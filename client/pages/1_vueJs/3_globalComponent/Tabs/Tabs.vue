<template>
  <div>
    <div class="page-header">
      <h1>
        Tabs
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          Tab 컴포넌트 사용방법 설명.
          <a href="https://vuetifyjs.com/ko/components/tabs/" target="_blank">참조 url : https://vuetifyjs.com/ko/components/tabs/</a>
        </small>
      </h1>
    </div>
    <!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
          <div class="col-xs-12">
            <h3 class="header smaller bolder green">Ui Tabs</h3>

            <div class="alert alert-info hidden-sm hidden-xs">
              <button type="button" class="close" data-dismiss="alert">
                <i class="ace-icon fa fa-times"></i>
              </button>
              <i class="ace-icon fa fa-check bigger-110 green"></i>
              <span class="bolder">참조링크</span><br />
              <span class="blue bolder">접근성 관련 참조 : </span>
              <a href="https://mulder21c.github.io/2018/06/04/how-to-make-accessible-tab-content/" target="_blank">https://mulder21c.github.io/2018/06/04/how-to-make-accessible-tab-content/</a>
              <br />
              <span class="blue bolder">구문 하이라이터 : </span>
              <a href="https://prismjs.com/plugins/line-numbers/" target="_blank">https://prismjs.com/plugins/line-numbers/</a>
            </div>

            <div class="widget-box">
              <div class="widget-header">
                <h4 class="smaller">
                  <b>기본 사용방법</b>
                  <small>전역 공통 <span class="label">ui-tabs</span> 컴포넌트</small>
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>템플릿에 <span class="bolder green">&lt;ui-tabs&gt;</span>을 삽입해서 사용.</b>
                          <pre class="prettyprint linenums">
&lt;template&gt;
  &lt;div&gt;
    &lt;ui-tabs&gt;
      &lt;ui-tab href="tab-1"&gt;Home&lt;/ui-tab&gt;
      &lt;ui-tab&gt;Profile&lt;/ui-tab&gt;
      &lt;ui-tab&gt;More&lt;/ui-tab&gt;
    &lt;/ui-tabs&gt;
  &lt;/div&gt;
&lt;/template&gt;
                          </pre>
                        </li>
                        <li>
                          <b>preview</b>
                          <div class="thumbnail">
                            <div style="border: 1px solid #e2e2e2;">
                              <ui-tabs>
                                <ui-tab v-for="(item, index) in tabData" :key="index">
                                  {{ item.title }}
                                </ui-tab>
                                <ui-tabpanel v-for="(item, index) in tabData" :key="index">
                                  {{ item.title }}
                                </ui-tabpanel>
                              </ui-tabs>
                              <ui-tabs>
                                <ui-tab v-for="(item, index) in tabData" :key="index">
                                  {{ item.title }}
                                </ui-tab>
                                <ui-tabpanel v-for="(item, index) in tabData" :key="index">
                                  {{ item.title }}
                                </ui-tabpanel>
                              </ui-tabs>
                            </div>
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
                  <small>ui-tabs의 속성</small>
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
                              <b class="text-success lead">aaaaaaa</b>
                              <p class="alert alert-success">
                                aaaaaaaaaaaaaaaaa
                              </p>
                              <pre class="prettyprint linenums">
&lt;template&gt;
  &lt;div&gt;
    &lt;ui-tabs&gt;&lt;/ui-tabs&gt;
  &lt;/div&gt;
&lt;/template&gt;
                              </pre>
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
      tabData: [{ title: 'Home' }, { title: 'Profile' }, { title: 'More' }],
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
