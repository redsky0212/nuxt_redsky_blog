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
    - [nuxt 가이드북 (https://vue-nuxt.gitbook.io/nuxt/)](https://vue-nuxt.gitbook.io/nuxt/)
* package.json, ```'scripts'``` 작성
  ```javascript
  {
    "scripts": {
      "dev": "nuxt",
      "build": "nuxt build",
      "start": "nuxt start"
    }
  }
  ```
  - nuxt에서 제공하는 커맨드 명령어
    - nuxt : 개발서버를 구동(HMR(hot module replacement)기능 활성화)
      - npm run dev로 실행, .nuxt/폴더에 빌드결과생성
    - nuxt build : 배포목적 빌드(css, js압축 등)
    - nuxt start : 배포모드로 서버구동(빌드 후에 사용)
    - nuxt generate : 정적호스팅목적으로 앱 빌드(모든 라우트 html파일생성)
      - npm run generate로 실행, dist/폴더에 빌드결과생성
    -(참조) 빌드결과 위치를 수정하고자 할때는 nuxt.config.js 에서 buildDir로 설정할 수 있다.

* pages 폴더를 생성.
  - index.vue 파일 생성 (첫 entry페이지)
  - 나머지 필요파일 생성
