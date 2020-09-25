<template>
  <div>
    <div class="page-header">
      <h1>
        Vue.js 환경설정
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          프로젝트 구성 &amp; nuxt설치, 다양한 방법 &amp; ETC
        </small>
      </h1>
    </div>
    <!-- /.page-header -->

    <div class="row">
      <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
          <div class="col-xs-12">
            <div class="alert alert-info hidden-sm hidden-xs">
              <button type="button" class="close" data-dismiss="alert">
                <i class="ace-icon fa fa-times"></i>
              </button>
              <span class="blue bolder">Nuxt 애플리케이션 배포 및 PM2 관련(Nuxt서버 환경에서 필요해 보임) : </span>
              <a href="https://jhyeok.com/nuxtjs-pm2-nginx/" target="_blank">https://jhyeok.com/nuxtjs-pm2-nginx/</a>
              <br />
              <span class="blue bolder">Nuxt 에서 테스트 코드 짜기 관련(Jest) : </span>
              <a href="https://jhyeok.com/nuxtjs-api-test/" target="_blank">https://jhyeok.com/nuxtjs-api-test/</a>
              <br />
            </div>
            <h2>Vue.js 개발을 위한 기본 셋팅</h2>
            <hr />
            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  기본 개발 환경 설정
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>node.js설치 (<a href="https://nodejs.org/ko/" target="_blank">https://nodejs.org/ko/</a>)</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              nodejs가 설치 되어있지 않다면 설치한다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>git 설치 (<a href="https://git-scm.com/" target="_blank">https://git-scm.com/</a>)</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <a href="https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98" target="_blank">Git 설치 링크</a>
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <a href="https://www.youtube.com/watch?v=cEg9hiZax8U" target="_blank">Git 무료강좌</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>개발 에디터 설치</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <a href="https://www.jetbrains.com/ko-kr/webstorm/" target="_blank">WebStorm</a> 또는 <a href="https://code.visualstudio.com/" target="_blank">VSCode</a> 추천.
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              VSCode에서 사용하면 좋은 extensions<br />
                              * <span class="green bolder">Auto Close Tag</span> : 태그 코딩시 자동으로 닫힘 태그가 생성되는 기능<br />
                              * <span class="green bolder">Import Cost</span> : import하는 모듈의 사이즈를 보여줌.<br />
                              *<span class="green bolder"> GitLens</span> : 최종 커밋한 사람과 날짜 등을 가이드 해주는 기능<br />
                              * <span class="green bolder">TODO Highlight</span> : 주석처리시 TODO : 이렇게 시작하는 text를 입력하면 색깔로 반전시켜주는 기능<br />
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  프로젝트 구성
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>PC의 원하는 위치에 프로젝트 폴더를 생성하고 해당 폴더에서 (npm init) nodejs 프로젝트를 시작하기 위한 초기화를 한다.</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              nodejs가 설치 되어있지 않다면 설치한다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>git repository에 올릴때 올리지 말아야할 파일,폴더를 설정한다.</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              .gitignore파일을 생성해서 내용정리.
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              ignore 해야할 목록을 알려주는 사이트(<a href="https://www.gitignore.io/" target="_blank">https://www.gitignore.io/</a>)
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>github에 repository 를 생성하여 현재 폴더를 git remote 시킨다.</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              git init
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              git add .
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              git commit -m '첫 프로젝트 생성'
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              git remote add origin 깃주소
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              git log --branches --graph --oneline (커밋한 history 로그를 보기좋게 줄로 표현해서 보여주는 명령어)
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-xs-12">
            <h2>Nuxt로 프로젝트 설치 다양한 방법</h2>
            <p>참조 : <a href="https://ko.nuxtjs.org/api/context/" target="_blank">https://ko.nuxtjs.org/api/context/</a></p>
            <p class="red bolder">(되도록이면 'nuxt단일설치'를 사용)</p>
            <hr />
            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  create-nuxt-app으로 설치 (npx create-nuxt-app &lt;프로젝트 명&gt;)
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>npx create-nuxt-app &lt;project-name&gt;실행</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              이 명령어는 아래의 질문을 물어본다.<br />
                              - 1.통합 서버 사이드 프레임 워크를 선택<br />
                              - 2.UI 프레임워크 선택(추후에 추가 가능)<br />
                              - 3.테스팅 프레임워크 선택(차후에 추가 가능)<br />
                              - 4. nuxt모드선택('Universial' 또는 'spa')<br />
                              - 5.HTTP 통신을 위한 axios module추가 여부<br />
                              - 6.저장 시 코드 린트를 위한 EsLint추가 여부<br />
                              - 7.코드를 prettify하기 위한 prettify추가 여부
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>설치한 프로젝트 폴더로 이동한 다음 실행</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              cd &lt;project-name&gt;<br />
                              npm run dev
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>실행된 애플리케이션은 http://localhost:3000 에서 작동됨.</b>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  Vue CLI 로 설치하기
                </h4>
                <h5 style="color: black;">* Vue CLI란?</h5>
                <p style="color: black;">
                  Vue CLI 는 커맨드라인 인터페이스 기반의 Vue 프로젝트 생성 도구입니다. Vue 애플리케이션을 개발할 때 기본적인 폴더 구조, 라이브러리 등을 설정해줍니다.<br />
                  <a href="https://cli.vuejs.org/guide/" target="_blank">링크 : Vue CLI 공식문서</a>
                </p>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>vue cli 설치 ( npm i -g @vue/cli )</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              vue 명령어 제공 cli를 글로벌로 설치한다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>vue init 사용을 위한 설치 ( npm i @vue/cli-init )</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              2.x template을 가져오기 위한 vue init 사용하기 위하여 @vue/cli-init 을 설치한다. -g(글로벌)로 설치할지 말지는 본인이 선택하여 설치한다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>첫 프로젝트 생성 ( vue create &lt;프로젝트명&gt; )</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              명령창에서 vue create를 실행하면 프로젝트 생성 관련 여러가지 선택 사항이 출력된다. 상황에 맞게 선택하여 설치하면 된다.
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              TypeScript로 개발하려면 첫 선택물음에 'Manually select features'로 선택하여 설치 진행 한다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>vue init nuxt-community/express-template &lt;project-name&gt;</b>
                          <ul>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              vue create 방식 말고 이와같이 nuxt-community를 이용해서 설치할 수 있다.<br />
                              <a href="https://github.com/nuxt-community/express-template" target="_blank">참조 : https://github.com/nuxt-community/express-template</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>프로젝트 생성 후 프로젝트 메니져 실행 ( vue ui )</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              프로젝트가 모두 설정 되었다고 했을때 해당 프로젝트 폴더에서 'vue ui' 명령을 실행하면 브라우져에서 현재 프로젝트 상태를 UI로 볼 수 있는 메니져가 실행된다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>Vue CLI를 통하여 plugin설치 ( vue add &lt;플러그인명&gt; )</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              vue add 명령어로 플러그인을 설치 할 수 있다. 참조 : <a href="https://cli.vuejs.org/guide/plugins-and-presets.html#plugins" target="_blank">vue plugin 관련 공식문서</a>
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              Vue 프로젝트 메니져 에서도 플러그인을 추가 할 수 있다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>Vue CLI 3 에서 웹팩 설정</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              Vue CLI 3.x 에서는 webpack설정파일이 노출되지 않습니다. 따라서 웹팩 설정을 위해서는 루트 디렉토리에 vue.config.js파일을 생성하고 관련 내용을 작성해줍니다.<br />
                              <a href="https://cli.vuejs.org/guide/webpack.html#simple-configuration" target="_blank">vue-cli 3.x vue.config.js 공식문서 참조</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  offline 설치
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>
                            nuxt-community/starter-template를 이용하여 오프라인 설치<br />
                            git clone https://github.com/nuxt-community/starter-template에서 clone받는다.
                          </b>
                        </li>
                        <li>
                          <b>프로젝트 폴더로 옮긴다.</b>
                        </li>
                        <li>
                          <b>해당 프로젝트 폴더에서 vue cli로 설치 (vue init starter-template 프로젝트명 --offline)</b>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  nuxt 단일 설치
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>nuxt 단일 설치 시 설치되는 모듈 (Vue2, Vue Router, Vuex, Vue Server Renderer, vue-meta, vue-loader, babel-loader, webpack)</b>
                        </li>
                        <li>
                          <b>설치 (npm i nuxt)</b>
                        </li>
                        <li>
                          <b>
                            <a href="https://kr.vuejs.org/v2/guide/index.html">vue 가이드 사이트</a>
                            <br />
                            <a href="https://ko.nuxtjs.org/guide">nuxt 가이드 사이트</a>
                            <br />
                            <a href="https://vue-nuxt.gitbook.io/nuxt">nuxt 가이드 북</a>
                          </b>
                        </li>
                        <li>
                          <b>
                            nuxt단일설치 시 과정 정리 참고 :
                            <a href="https://github.com/redsky0212/nuxt_redsky_blog">
                              https://github.com/redsky0212/nuxt_redsky_blog
                            </a>
                          </b>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  .env 설정(Nuxt에서 설정방법)
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>Node.js에서 프로그래밍에 필요한 값들을 서술할 수 있는 .env 환경변수 파일</b>
                        </li>
                        <li>
                          <p>설치 (npm i --save-dev <span class="bolder green">@nuxtjs/dotenv</span>)</p>
                        </li>
                        <li>
                          <p>nuxt.config.js 에 모듈 등록</p>
                          <pre class="prettyprint linenums lang-js">
module.exports = {
  modules: [
    '@nuxtjs/dotenv'
  ],
};
                          </pre>
                        </li>
                        <li>
                          <p><span class="bolder green">.env</span> 파일을 root에 생성하고 필요한 환경변수를 기술한다.</p>
                          <pre class="prettyprint linenums lang-env">
BASE_URL="http://localhost:3000"
API_URL="https://api.Hnpwa.com/v0"

REST_API_URL="https://jsonplaceholder.typicode.com/"
REST_API_URL2="https://api.Hnpwa.com"
                          </pre>
                        </li>
                        <li>
                          <p>nuxt.config.js 에 <span class="bolder green">env 프로퍼티</span>를 설정해서 사용할 수도 있다.</p>
                          <pre class="prettyprint linenums lang-js">
module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }
}
                          </pre>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    window.prettyPrint();
  },
};
</script>
