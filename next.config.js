// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  distDir: 'build',
  pageExtensions: ['tsx'],
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
