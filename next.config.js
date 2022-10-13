// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
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
