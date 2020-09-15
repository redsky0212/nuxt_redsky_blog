<template>
  <div>
    <div class="page-header">
      <h1>
        UI Lists
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          Lists 컴포넌트는 항목을 하나 또는 여러 개 선택할 수 있는 다양한 레이아웃의 목록을 표현합니다.
        </small>
      </h1>
    </div>
    <!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
          <div class="col-xs-12">
            <h3 class="header smaller bolder green">Ui Lists</h3>

            <div class="alert alert-info hidden-sm hidden-xs">
              <button type="button" class="close" data-dismiss="alert">
                <i class="ace-icon fa fa-times"></i>
              </button>
              <i class="ace-icon fa fa-check bigger-110 green"></i>
              <span class="bolder">참조링크</span><br />
              <span class="blue bolder">Vuetify 참조 : </span>
              <a href="https://vuetifyjs.com/ko/components/lists/" target="_blank">https://vuetifyjs.com/ko/components/lists/</a>
              <br />
              <span class="blue bolder">Kendo UI listview 참조 : </span>
              <a href="https://www.telerik.com/kendo-vue-ui/components/listview/listview/selection/" target="_blank">https://www.telerik.com/kendo-vue-ui/components/listview/listview/selection/</a>
              <br />
              <span class="blue bolder">웹접근성 지침!! : </span>
              <a href="https://www.wah.or.kr:444/Participation/guide.asp" target="_blank">https://www.wah.or.kr:444/Participation/guide.asp</a>
              <br />
              <span class="blue bolder">참조 할만한 다른 listview컴포넌트 : </span>
              <a href="https://www.syncfusion.com/vue-ui-components/vue-listview" target="_blank">https://www.syncfusion.com/vue-ui-components/vue-listview</a>
              <br />
            </div>

            <div class="widget-box">
              <div class="widget-header">
                <h4 class="smaller">
                  <b>기본 사용방법</b>
                  <small>전역 공통 <span class="label">ui-lists</span> 컴포넌트</small>
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>템플릿에 <span class="bolder green">&lt;ui-lists&gt;</span>컴퍼넌트를 삽입해서 사용.</b>
                          <br />
                          <p><span class="bolder green">&lt;ui-...&gt;</span>의 개수와 <span class="bolder green">&lt;ui-...&gt;</span>의 개수 index가 짝지어져 각각의 탭이 열립니다.</p>
                          <div style="border: 1px solid #e2e2e2;">
                            <ui-tabs>
                              <ui-tab>Source</ui-tab>
                              <ui-tab>Demo</ui-tab>
                              <ui-tabpanel>
                                <pre class="prettyprint linenums">
  &lt;template&gt;
    &lt;div&gt;
      &lt;ui-lists :data="listData"&gt;&lt;/ui-lists&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script&gt;
  export default {
    data() {
      return {
        listData: [
          { header: 'Home', content: 'Home Content...html' },
          { header: 'Profile', content: 'Profile Content...html' },
          { header: 'More', content: 'More Content...' },
        ],
      };
    },
  };
  &lt;/script&gt;
                                </pre>
                              </ui-tabpanel>
                              <ui-tabpanel>
                                <!-- <ui-accordions></ui-accordions> -->
                              </ui-tabpanel>
                            </ui-tabs>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="widget-box">
              <div class="widget-header">
                <h4 class="smaller">
                  <b>API</b>
                  <small>ui-selects의 속성</small>
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <h4><b>Props</b></h4>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <b class="text-success lead">...</b>
                              <p class="alert alert-success">
                                ....<br />
                                <b>타입: </b> ...<br />
                                <b>기본값: </b> ...<br />
                              </p>
                              <div style="border: 1px solid #e2e2e2;">
                                <ui-tabs>
                                  <ui-tab>Source</ui-tab>
                                  <ui-tab>Demo</ui-tab>
                                  <ui-tabpanel>
                                    <pre class="prettyprint linenums">
  &lt;template&gt;
    &lt;div&gt;
      &lt;ui-lists :data="listData"&gt;&lt;/ui-lists&gt;
    &lt;/div&gt;
  &lt;/template&gt;
                                    </pre>
                                  </ui-tabpanel>
                                  <ui-tabpanel>
                                    <div class="thumbnail">
                                      ...
                                    </div>
                                  </ui-tabpanel>
                                </ui-tabs>
                              </div>
                              <hr />
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    // context.app.$testPlugin('asyncData 호출!');
  },
  data() {
    return {
      testPluginVal: '',
      tabData: [
        { title: 'Home', content: 'Home panel' },
        { title: 'Profile', content: 'Profile panel' },
        { title: 'More', content: 'More panel' },
      ],
    };
  },
  mounted() {
    window.prettyPrint();
  },
  methods: {
    onOpen() {
      console.log('call this.$rayui.alert()');
      const opt = {
        title: 'alert 테스트 타이틀',
      };
      this.$rayui.alert('rayui의 alert열기 테스트 입니다.', opt).then((result) => {
        console.log('alert then --------->', result);
      });
    },
    onConfirm() {
      console.log('call this.$rayui.confirm()');
      const opt = {
        title: 'confirm 테스트 타이틀',
      };
      this.$rayui.confirm('rayui의 confirm 확인?', opt).then((result) => {
        console.log('confirm then --------->', result);
      });
    },
    onClickBtn(event) {
      this.$rayui.alert('버튼 클릭!' + event.currentTarget.tagName);
    },
  },
};
</script>
