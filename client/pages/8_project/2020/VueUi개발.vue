<template>
  <div>
    <div class="page-header">
      <h1>
        Vue UI 개발 (개인 프로젝트)
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          VueJs를 이용한 UI 라이브러리 개발 (2019.08.19 ~ )
        </small>
      </h1>
    </div>
    <!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
          <div class="col-xs-12">
            <h3>UI라이브러리 개발 시 필요한 사항 정리</h3>
            <div class="alert alert-info hidden-sm hidden-xs">
              <button type="button" class="close" data-dismiss="alert">
                <i class="ace-icon fa fa-times"></i>
              </button>
              UI개발 시 모바일용, web용 으로 나눌 필요가 있음.
              <span class="red bolder">모바일용</span>
              <span class="blue bolder">WEB용</span>
            </div>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  참조 사항
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>참조글</b><br />
                          <a href="https://vuejs-kr.github.io/jekyll/update/2017/01/13/vuejs-plugin/" target="_blank">VueJs플러그인 제작기</a><br />
                          <a href="https://jjong-factory.tistory.com/12" target="_blank">Vuejs + Cordova + OnsenUi 로 하이브리드 어플 개발기</a><br />
                          만들어진 UI 참조:<a href="https://github.com/ElemeFe/element/blob/dev/src/index.js" target="_blank">element 컴포넌트</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
