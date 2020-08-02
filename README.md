# nuxt, (typescript X), eslint, 블로그(Vue 2.0, Nuxt 2)
## 프로젝트 구성 순서 및 설치 내용.
* npm init
* .gitignore 파일 생성하여 제외목록 작성.
  - ignore 해야할 목록을 알려주는 사이트 [https://www.gitignore.io/](https://www.gitignore.io/)
* github에 repository 생성하여 현재 폴더를 git remote 시킴.
  - git init
  - git add .
  - git commit -m '첫 프로젝트 생성'
  - git remote add origin https://github.com/redsky0212/nuxt_redsky_blog.git
* nuxt 설치 (```Vue2, Vue Router, Vuex, Vue Server Renderer, vue-meta, vue-loader, babel-loader, webpack 포함```)
  - npm i nuxt
    - vue가이드 사이트 : [https://kr.vuejs.org/v2/guide/index.html](https://kr.vuejs.org/v2/guide/index.html)
    - nuxt가이드 사이트 : [https://ko.nuxtjs.org/guide](https://ko.nuxtjs.org/guide)