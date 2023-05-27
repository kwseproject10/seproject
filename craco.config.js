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
            '@components': './src/components',
            '@pages': './src/pages',
            '@style': './src/style',
            '@utils': './src/utils',
            '@images': './src/images',
        },
      },
    },
  ],
}