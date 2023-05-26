const CracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
            '@.': './src',
            '@api': './src/api',
            '@components': './src/common/components',
            '@pages': './src/common/pages',
            '@style': './src/style',
            '@utils': './src/utils',
            '@images': './src/images'
        },
      },
    },
  ],
}