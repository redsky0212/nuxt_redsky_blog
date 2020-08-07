# nuxt, (typescript X), eslint, 블로그(Vue 2.0, Nuxt 2)
## 프로젝트 구성 순서 및 설치 내용.
*  프로젝트 폴더 생성.
* npm init
* .gitignore 파일 생성하여 제외목록 작성.
  - ignore 해야할 목록을 알려주는 사이트 [https://www.gitignore.io/](https://www.gitignore.io/)
* github에 repository 생성하여 현재 폴더를 git remote 시킴.
  - git init
  - git add .
  - git commit -m '첫 프로젝트 생성'
  - git remote add origin https://github.com/redsky0212/nuxt_redsky_blog.git
* nuxt설치의 다양한 방법
  - npx로 설치(npx create-nuxt-app <프로젝트명>)
  - vue-cli로설치
    - cli설치 npm i -g @vue/cli @vue/cli-init
    - vue init nuxt-community/express-template 프로젝트명
    - cd 프로젝트명
    - npm i
  - offline 설치
    - git clone https://github.com/nuxt-community/starter-template 에서 미리 클론 받아서 프로젝트 폴더로 옮겨놓는다.
    - 이 상태에서 vue cli로 오프라인 설치를 한다. vue init starter-template 프로젝트명 --offline
  - Nuxt.js 단일설치 (npm i nuxt)
* nuxt 단일 설치 (```Vue2, Vue Router, Vuex, Vue Server Renderer, vue-meta, vue-loader, babel-loader, webpack 포함됨```)
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
    - nuxt : 개발서버를 구동([HMR(hot module replacement)](https://webpack.js.org/concepts/hot-module-replacement/) 기능 활성화)
      - npm run dev로 실행, .nuxt/폴더에 빌드결과생성
    - nuxt build : 배포목적 빌드(css, js압축 등)
    - nuxt start : 배포모드로 서버구동(빌드 후에 사용)
    - nuxt generate : 정적호스팅목적으로 앱 빌드(모든 라우트 html파일생성)
      - npm run generate로 실행, dist/폴더에 빌드결과생성
    - ```(참조) 빌드결과 위치를 수정하고자 할때는 nuxt.config.js 에서 buildDir로 설정할 수 있다.```

* pages 폴더를 생성.
  - index.vue 파일 생성 (첫 entry페이지)
  - 나머지 필요파일 생성

* nuxt 환경설정 (nuxt.config.js)
  - <img src="./client/assets/images/common/nuxtConfig.png" width="60%" />
  - [NUXTCONFIG.md 파일 참조.](https://github.com/redsky0212/nuxt_redsky_blog/blob/master/NUXTCONFIG.md)

* client 폴더 하나로 정리하기
  - 루트에 client폴더를 만든다 ```mkdir client```
  - nuxt.config.js에 srcDir옵션을 설정하여 만든 client폴더를 설정해 준다.
  - client폴더에 pages, assets 등 폴더를 이동한다.

* Pug, Sass 사용
  - Pug설치 : npm i -D pug pug-plain-loader (특별히 사용할 필요는 없는것 같음.)
  - Sass설치 : npm i -D node-sass sass-loader (잘 사용하면 유용함.)
    - 설치 후 ```lang="scss"``` 셋팅하고 사용. sass보다 scss 사용하는게 더 좋음.

* style 사용 방법
  - global스타일
    - nuxt.config.js에 css: ['@/assets/sass/main.scss'] 설정 후 사용.
  - local스타일
    - 각 SPA 화면에 &lt;style lang="scss" ```scoped```&gt; 설정 후 각 페이지에서 사용.

* Typescript 사용
  - 경우에따라 typescript를 사용할 수 있다.

* ESLint, Prettier 사용
  - ESLint : 코드를 깔끔하게 유지.
  - Prettier : 코드 포매터.
    - [prettier전체 스키마 링크](https://json.schemastore.org/prettierrc)
  - 설치 : ```npm i -D babel-eslint eslint eslint-config-prettier eslint-loader eslint-plugin-vue eslint-plugin-prettier prettier```
  - .eslintrc.js 파일 생성 ```touch .eslintrc.js``` eslint관련 설정을 코딩한다.
  - package.json의 "scripts"에 lint, lintfix 스크립트를 추가해서 lint를 실행 할 수 있게 적용한다.
  ```javascript
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start",
    "lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
    "lintfix": "eslint --fix --ext .js,.vue --ignore-path .gitignore ."
  },
  ```

* ESLint 를 webpack을 통해 핫 리로드 모드 활성화 하기. (npm run dev 실행동안 저장시 lint를 확인한다.)
  - nuxt.config.js에 다음 소스 추가.
  ```javascript
  ...
  /*
   ** Build configuration
  */
  build: {
   /*
    ** You can extend webpack config here
   */
   extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
  ```
  - [ESLint설정관련 참조 url](https://velog.io/@kyusung/eslint-config-2)
  - .eslintrc.js파일에서 lint관련 추가,빼기를 적용하여 적절하게 lint를 적용한다.
  - [eslint standard rules 기본 설정 관련 url](https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json)
    - eslint 설정값 중 [2, 'never'] 이런식의 값 중에 첫번째는 (0,1,2)(none, warning, error)를나타냄. [참조url](https://eslint.org/docs/user-guide/configuring#configuring-rules)

* IE 호환 설정
  - PostCSS, Autoprefixer를 이용하여 IE호환 설정을 할 수 있다.
  - [IE호환가이드 참조](https://vue-nuxt.gitbook.io/nuxt/configuration/ie)

* 페이지 전환 로딩 설정
  - nuxt는 로딩 컴포넌트를 기본제공한다.
  - 로딩 표시 설정 비활성화
  ```javascript
  nuxt.config.js
  export default {
    loading: false,
  }
  ```
  - 로딩 표시 설정하기
  ```javascript
  nuxt.config.js
  export default {
    loading: {
      color: '#0826c0',       // 색상
      height: '6px',          // 높이
      failedColor: '#d43c6d', // 전환오류발생시 색상
    },
  }
  ```
  - 로딩바 설정 가능 속성
    - 'color' [string, 'black'] : 로딩바 색상
    - 'failedColor' [string, 'red'] : 전환오류시 생상
    - 'height' ['string', '2px'] : 로딩바 높이
    - 'throttle' ['number', 200] : 설정시간 대기 후 진행
    - 'duration' ['number', 5000] : 최대 지속 시간
    - 'rtl' ['boolean', false] : 프로세스바의 진행방향
  - 컴포넌트에서 사용방법
    - 시작 : ```this.$nuxt.$loading.start()```
    - 종료 : ```this.$nuxt.$loading.finish()```
  - 설정가능한 로딩 메서드
    - start() 필수 : 페이지 라우터 변경
    - finish() 필수 : 라우트 로드 완료 되고, 불러올 때 콜백
    - fail() 선택 : 페이지 라우트 실패
    - increase(num) 선택 : 컴포넌트 호출하는 동안 실행 콜백

  - 커스텀 로딩 컴포넌트 설정
  ```javascript
  nuxt.config.js
  export default {
    // 원하는 위치의 컴포넌트를 사용하여 로딩바 표시 할 수 있다.
    loading: '~/components/UI/Loading.vue',
  }
  ```
  ```javascript
  components/UI/Loading.vue
  <template>
    <div
      v-if="isLoading"
      class="loading-process">
      <!-- 로딩 프로세스 콘텐츠 -->
      <svg
        class="loader"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50">
        <path d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.6s"
            repeatCount="indefinite"/>
        </path>
      </svg>
    </div>
  </template>
  ​
  <script>
  export default {
    data() {
      return { isLoading: false }
    },
    methods: {
      start() { this.isLoading = true },
      finish() { this.isLoading = false }
    }
  }
  </script>
  ​
  <style scoped>
  .loading-process {
    position: fixed;
    z-index: 10000;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 0 2em;
    height: 100px;
    width: 400px;
    text-align: center;
    padding: 1em;
    margin: 0 auto 1em;
    display: inline-block;
    vertical-align: top;
  }
  .loader { width: 60px; height: 60px; }
  svg path, svg rect { fill: #00d0ff; }
  </style>
  ```
  - SPA모드일때 로딩 인디케이트 설정 ([SpinKit 사용](https://tobiasahlin.com/spinkit/))
  ```javascript
  nuxt.config.js
  export default {
    mode: 'spa',
    loadingIndicator: {
      name: 'folding-cube',
      color: '#fff',
      background: 'rgba(255,255,255,0.12)',
    }
  }
  // 설정 가능한 로딩 인디케이터 name
  // circle, cube-grid, fading-circle, folding-cube, chasing-dots, nuxt, pulse,
  // rectangle-bounce, rotating-plane, three-bounce, wandering-cubes
  ```
* 디렉토리 구조
  - 화면관련 디렉토리 (레이아웃/페이지/컴포넌트)
    - layouts : 앱의 시작점, 레이아웃 설정 &lt;nuxt /&gt;포함
    - pages : 앱 페이지
    - components : 앱 컴포넌트
  - nuxt전체 기본 디렉토리
    - layouts : 앱을 구성하는 레이아웃
    - pages : 앱 내부의 모든 화면 vue파일
    - components : 앱 내부의 vue 컴포넌트
    - assets : 컴파일 되지 않는 정적 에셋(css, js, sass 등)을 포함
    - plugins : vue 앱이 생성되기 전 실행하고 싶은 js 플러그인 포함
    - store : Vue Store 파일을 포함하는 디렉토리(index.js 파일이 생성되면 자동 활성화)
    - static : 정적 파일들을 포함하는 디렉토리, 내부 파일들은 루트패스(/)에 연결
    - middleware : 페이지 또는 레이아웃을 렌더링 하기 전에 실행 할 수 있는 사용자 정의 함수 포함
  - layouts의 기본 호출 파일은 default.vue파일이다.
  - 사용자 정의 layout적용하기.
    - layouts에 원하는 특정 layout 파일을 만들고
    - 만든 사용자 layout파일을 적용하고자 할때는 페이지vue파일에 아래와 같이 layout을 등록한다.
    ```javascript
    <script>
      export default {
        layout: 레이아웃 파일명,
      };
    </script>
    ```
  - 사용자 정의 오류페이지 만들기
    - 잘못된 페이지를 호출했을경우 nuxt는 기본 오류페이지를 보여줍니다.
    - 이 기본 오류페이지를 원하는 형태로 작업할 수 있음.
      - layouts/error.vue 파일 생성
      ```javascript
      <template>
       <section class="container">
        <h1 v-if="error.statusCode === 404">요청하는 페이지를 찾을 수 없습니다.</h1>
        <h1 v-else>오류가 발생했습니다.</h1>
        <nuxt-link to="/">홈</nuxt-link> 페이지로 이동하여 다시 시도해보세요.
       </section>
      </template>
      <script>
       export default {
         props: ['error'],
       };
      </script>
      ```

* 라우팅 (nuxt에서는 pages폴더의 디렉토리 구조가 라우터url이 된다.)
  - 다이나믹 라우트
    - routes(경로) : /music-info/:id
    - 실제 pages 내부 컴포넌트 경로 : music-info/_id.vue (언더바를 붙임)
    ```html
    <template>
      <header>
        <!-- vue파일에서는 $route의 params속성으로 매개변수에 접근할 수 있다. -->
        <!-- $route.params.id -->
        <h1>음악 ID : {{ $route.params.id }}</h1>
      </header>
    </template>
    ```
  - 라우터 링크
    - ```<nuxt-link>```의 ```to```속성으로 링크를 적용할 수 있다.
    ```html
    <nuxt-link to="/services">서비스</nuxt-link>
    ```
    - 고정된 path가 아닌경우 v-bind:to 또는 :to 속성을 사용해서 동적 라우팅을 할 수 있다.
    ```html
    <nuxt-link :to="'/products/' + product.id">{{ product.name }}<nuxt-link>
    ```
  - 링크 활성화 css 클래스
    - 링크활성화 css 이름 : .nuxt-link-active { ... }
    - 링크활성화 "완전일치모드(exact)"는 : .nuxt-link-exact-active {...}
    - 링크활성화 클래스명을 변경하고자 할때는 nuxt.config.js에서 변경가능
    ```javascript
    export default {
      router: {
        linkActiveClass: 'link-active',
        linkExactActiveClass: 'link-exact-active',
      }
    }
    ```
  - 프로그래밍 방식의 라우터
    - this.$router.push();
  - 라우터 매개변수 검사
    - 컴포넌트 안에서 `validate()`메서드로 검사 가능.
    ```javascript
    // /books/10 의 숫자만 가능하도록 검사 한다면
    export default {
      validate(data) {
        // 라우트 매개변수 ID값이 숫자인 경우만 허용
        return /^\d+$/.test(this.$route.params.id);
      }
    }
    ```
  - 중첩된 라우트 처리
    - 자식 라우트`<nuxt-child />` 처리를 위해서는 부모라우팅 vue파일과 같은 이름의 디렉토리가 있어야 한다. 그 안에 자식라우터vue페이지들이 있다.
* 라우팅 트랜지션
  - [참조URL : https://vue-nuxt.gitbook.io/nuxt/routing-transition](https://vue-nuxt.gitbook.io/nuxt/routing-transition)

* 빌드
* 배포