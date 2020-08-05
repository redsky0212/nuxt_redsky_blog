module.exports = {
  mode: 'spa',
  srcDir: 'client/',
  css: ['@/assets/sass/global.scss'],
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
  loadingIndicator: {
    name: 'folding-cube',
    color: '#fff',
    background: 'rgba(255,255,255,0.12)',
  },
}
