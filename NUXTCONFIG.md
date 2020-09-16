# nuxt.config.js 환경설정
## 시작하기
### nuxt config 설정 속성
[공식 참조 URL: https://vue-nuxt.gitbook.io/nuxt/configuration](https://vue-nuxt.gitbook.io/nuxt/configuration)
* 렌더링 모드(mode)
  ```javascript
  module.exports = {
    mode: 'universal', // 렌더링 모드 선택 : 'universal' | 'spa'
  }
  ```
* 헤드(head)
  - html페이지의 &lt;head&gt;영역 정보를 셋팅
  ```javascript
  module.exports = {
    head: {
      // 페이지 제목
      title: '페이지 제목',
      // 메타데이터 설정
      meta: [
        // 언어 인코딩 설정
        {charset: 'utf-8'},
        // 반응형 웹 설정
        {name: 'viewport', content: 'width-device-width, initial-scale=1'},
        // 페이지 설명 설정
        // ※ hid 속성 값은 렌더링 후, data-hid로 설정(표준 속성이 아님)
        // hid 속성은 고유 식별자로 사용됨
        {hid: 'description', name: 'description', content: '페이지 설명'},
      ],
      // 링크 설정
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        {rel: 'stylesheet', href: 'css파일경로'},
      ],
      // 스크립트 설정
      script: [
        {src: 'js 파일 url'},
      ],
      // 페이지별 제목 + 공통적인 text (페이지별text는 각 페이지 head()메서드에 title로 정의 해줘야 한다.)
      titleTemplate: '%s - Nuxt 가이드',
    },
  }
  ```
* 빌드 디렉토리(buildDir)
  - 빌드 디렉토리 위치를 다른곳으로 설정 할 수 있다.(기본: `.nuxt`)
  ```javascript
  module.exports = {
    buildDir: '../nuxt',
  }
  ```
* 빌드(build)
  - plugin을 설치하여 해당 플러그인의 기능을 설정할 수 있다.
  - 아래는 css 추출 mini-css-extract-plugin 사용으로 메인 청크 css데이터를 개별 파일로 추출할 수 있다.
  ```javascript
  module.exports = {
    extractCSS: true,
  }
  ```
---
### client 정리
* srcDir
  - 루트에 모두 나와있는 nuxt기본 폴더들(pages, assets, components, layouts, store...등)을 srcDir에 설정해 둔 url로 이동해서 정리 할 수 있다.
  ```javascript
  module.exports = {
    srcDir: 'client/',
  }
  ```
  ```cli
  mkdir client
  mv assets components layouts pages plugins static store middleware client
  ```
---
### Pug / Sass 설정
#### Pug와Sass는 들여쓰기에 민감하므로 (VSCode)settings에서 renderWhitespace값을 all로 하면 editor에서 들여쓰기를 눈으로 확인할 수 있다.
* nuxt.js는 확장자를 자동으로 추측, webpack에 프로세서 로더를 사용한다. 필요에따라 설치를 해서 사용한다.
  - Pug (HTML 템플릿 엔진) npm i -D pug pug-plain-loader (html을 좀 더 쉽게 코딩할 수 있는 것... 굳이 필요할까? 싶음)
  - Sass (css 프리프로세서) npm i -D node-sass sass-loader (scss는 사용하면 훨씬편함.)
* sass를 설치하면 scss를 사용할 수 있다. scss는 sass의 좀 더 큰범위 상위개념(scss를 추천).
* 설치한 프로세서 Vue컴포넌트에서 `lang`을 이용하여 사용하기
```html
<template lang="pug">
.container
  h1.title 안녕! {{ name }}
</template>

<script>
export default {
  data () {
    return {
      name: '야무'
    }
  }
}
</script>

// sass보다는 scss사 사용하기 더 편함.
<style lang="sass">
.container
  background-color: #101010
  height: 100vh
  display: grid
.title
  color: #fff
</style>
// scss 방식(css와 좀 더 유사하다.)
<style lang="scss">
.container{
  background-color: #101010;
  height: 100vh;
  display: grid;
}
.title{
  color: #fff;
}
</style>
```
---
### 글로벌 스타일 적용(되도록이면 글로벌 권장)
* nuxt.config.js의 css속성에 등록된 css파일은 모두 글로벌css가 된다.
```javascript
export default {
  css: [
    '@/assets/sass/main.scss'
  ]
}
```
---
### 로컬 스타일(필요한 경우)
* Vue컴포넌트의 개별 css를 적용하고자 할때는 Vue컴포넌트의 &lt;script&gt;태그에 `scoped` 속성을 추가한다.
---
## TypeScript 설정
* 필요한 패키지를 설치(@nuxt/typescript-build 이거 설치하는것과 뭐가 다른지 파악 필요)
** @nuxt/typescript-build 방식이 더 최신 방식으로 보임.
  - nuxt-typescript
  - typescript
  - tslint

