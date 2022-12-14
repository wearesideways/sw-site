function renderBody(status: string, content: object) {
  const html = `
    <script>
      const receiveMessage = (message) => {
        window.opener.postMessage(
          'authorization:github:${status}:${JSON.stringify(content)}',
          message.origin
        );
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:github", "*");
    </script>
    `

  return new Blob([html])
}

export const onRequest: PagesFunction<{
  GITHUB_CLIENT_ID: string
  GITHUB_CLIENT_SECRET: string
}> = async (context) => {
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context

  const client_id = env.GITHUB_CLIENT_ID
  const client_secret = env.GITHUB_CLIENT_SECRET

  try {
    const url = new URL(request.url)
    const code = url.searchParams.get('code')
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'user-agent': 'cloudflare-functions-github-oauth-login',
        accept: 'application/json',
      },
      body: JSON.stringify({ client_id, client_secret, code }),
    })
    const result = (await response.json()) as {
      access_token: string
      error?: unknown
    }
    if (result.error) {
      return new Response(renderBody('error', result), { status: 401 })
    }
    const token = result.access_token
    const provider = 'github'
    const responseBody = renderBody('success', {
      token,
      provider,
    })
    return new Response(responseBody, { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response(error instanceof Error ? error.message : 'Unexpected error', {
      status: 500,
    })
  }
}
