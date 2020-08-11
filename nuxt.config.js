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
    titleTemplate: '%s - redsky',
    // 한글 깨짐현상 관련 적용
    meta: [{ charset: 'utf-8' }, { 'http-equiv': 'content-language', content: 'ko' }],
    // body태그에 class 추가
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
  router: {
    // 빌드 후 router url이 특정 디렉토리 일때 추가.
    base: process.env.NODE_ENV === 'production' ? '/redsky/devil/' : '',
  },
  build: {
    vendor: ['jquery'],
    // 빌드 시 루트경로 적용
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
