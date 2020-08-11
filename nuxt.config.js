const webpack = require('webpack');
module.exports = {
  mode: 'spa',
  srcDir: 'client/',
  css: [
    '@/assets/sass/global.scss',
    '~assets/css/bootstrap.min.css',
    '~assets/css/all.min.css',
    '~assets/css/ace.min.css',
    '~assets/font-awesome/4.5.0/css/font-awesome.min.css',
    '~assets/css/prettify.min.css',
  ],
  head: {
    meta: [{ charset: 'utf-8' }, { 'http-equiv': 'content-language', content: 'ko' }],
    bodyAttrs: {
      class: 'no-skin',
    },
  },
  plugins: [
    { src: '@/plugins/js/bootstrap.min.js', mode: 'client' },
    { src: '@/plugins/js/ace-elements.min.js', mode: 'client' },
    { src: '@/plugins/js/ace.min.js', mode: 'client' },
    { src: '@/plugins/js/prettify.min.js', mode: 'client' },
  ],
  build: {
    vendor: ['jquery'],
    publicPath: process.env.NODE_ENV === 'production' ? 'http://hyun0238.dothome.co.kr/redsky/devil/' : '/nuxt',
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  loadingIndicator: {
    name: 'folding-cube',
    color: '#fff',
    background: 'rgba(255,255,255,0.12)',
  },
};
