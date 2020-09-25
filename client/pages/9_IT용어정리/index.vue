<template>
  <div>
    <div class="page-header">
      <h1>
        용어 정리
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          잡다구리 모든 용어 이해하기.
        </small>
      </h1>
    </div>
    <!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
          <div class="col-xs-12">
            <div class="media search-media">
              <div class="media-body">
                <div>
                  <h4 class="media-heading">
                    <a href="#" class="blue">폴리필(polyfill)</a>
                  </h4>
                </div>
                <p>특정 기능이 지원되지 않는 브라우저를 위해 사용할 수 있는 js라이브러리, 코드 조각, 플러그인 따위로 정상동작 하게끔 대안 구현 행위</p>
                <ul>
                  <li class="text-success">
                    <b><a href="https://github.com/afarkas/html5shiv" target="_blank">html5shiv</a></b>
                    : HTML5의 섹셔닝 요소(예: header, nav)를 지원하지 않는 브라우저를 위한 라이브러리.
                  </li>
                  <li class="text-success">
                    <b><a href="http://www.mediaelementjs.com/" target="_blank">mediaelement.js</a></b>
                    : HTML5의 video, audio 요소들을 모든 브라우저에서 하나의 파일로 같은 UI를 제공하기 위한 라이브러리.
                  </li>
                  <li class="text-success">
                    <b><a href="https://github.com/UmbraEngineering/Placeholder" target="_blank">Placeholder</a></b>
                    : HTML5의 플레이스홀더(placeholder)의 지원을 통일하기 위해서 제공하는 라이브러리.
                  </li>
                  <li class="text-success">
                    <b><a href="http://ericleads.com/h5validate/" target="_blank">h5Validate</a></b>
                    : HTML5의 폼검증 기능을 구현하기 위해 제공하는 라이브러리.
                  </li>
                  <li class="text-success">
                    <b><a href="http://selectivizr.com/" target="_blank">selectivizr</a></b>
                    : CSS3의 의사클래스(pseudo-class)와 속성 선택자들을 IE6~8에서 지원하기 위한 라이브러리.
                  </li>
                  <li class="text-success">
                    <b><a href="http://css3pie.com/" target="_blank">css3pie</a></b>
                    : CSS3의 boder-radius와 box-shadow, liner-gradient를 IE6~9 브라우저에서 지원하기 위한 라이브러리.
                  </li>
                  <li class="text-success">
                    <b><a href="https://github.com/scottjehl/Respond" target="_blank">Respond</a></b>
                    : 반응형 웹의 필수 속성중에 하나인 미디어쿼리를 IE6~8에서 지원하기 위한 라이브러리.
                  </li>
                </ul>
              </div>
            </div>
            <div class="media search-media">
              <div class="media-body">
                <div>
                  <h4 class="media-heading">
                    <a href="#" class="blue">심(shim)</a>
                  </h4>
                </div>
                <p>땜빵해주는...(틈 메우는)</p>
                <p>프로그램 API에서 중간에 매개변수를 가로 채 변경하거나 조작 처리하는 작은 라이브러리.</p>
              </div>
            </div>
            <div class="media search-media">
              <div class="media-body">
                <div>
                  <h4 class="media-heading">
                    <a href="#" class="blue">proxy</a>
                  </h4>
                </div>
                <p>프록시 서버(중계 서버)(보안, 캐시 목적)</p>
                <p>프록시 서버란 인터넷 상의 여러 네트워크들에 접속할 때 중계 역할을 해주는 프로그램 또는 컴퓨터를 말한다.</p>
                <ul>
                  <li>포워드 프록시: 인터넷 상에서 어디로든지 리퀘스트를 전송해주는 프록시.</li>
                  <li>리버스 프록시: 인터넷에서 리퀘스트를 받으면, 내부망 내의 서버로 전송해주는 프록시.</li>
                  <li>nuxt의 proxy: @nuxtjs/proxy 설치</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slotProps: '{{ slotProps }}',
      a: {},
    };
  },
  mounted() {
    window.prettyPrint();
    this.$set(this.a, 'b', 1);
  },
};
</script>
