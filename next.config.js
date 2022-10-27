// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  // remove when we are able to upload real images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'piscum.photos',
        port: '',
        pathname: '/id/**',
      },
    ],
  },
  distDir: 'build',
  pageExtensions: ['tsx'],
  // we do linting and typecheking on CI, no need to do it on every CMS-issued build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          use: 'yaml-loader',
        },
        {
          test: /\.svg$/,
          use: '@svgr/webpack',
        },
      ],
    )
    return config
  },
}
