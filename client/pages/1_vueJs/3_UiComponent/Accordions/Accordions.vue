<template>
  <div>
    <div class="page-header">
      <h1>
        Accordion
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          확장/축소를 토글할 수 있는 여러 개의 요소가 하나의 그룹으로 묶여 있는 영역 컴포넌트.
        </small>
      </h1>
    </div>
    <!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
          <div class="col-xs-12">
            <h3 class="header smaller bolder green">Ui Accordion</h3>

            <div class="alert alert-info hidden-sm hidden-xs">
              <button type="button" class="close" data-dismiss="alert">
                <i class="ace-icon fa fa-times"></i>
              </button>
              <i class="ace-icon fa fa-check bigger-110 green"></i>
              <span class="bolder">참조링크</span><br />
              <span class="blue bolder">Vuetify 참조 : </span>
              <a href="https://vuetifyjs.com/ko/components/expansion-panels/" target="_blank">https://vuetifyjs.com/ko/components/expansion-panels/</a>
              <br />
              <span class="blue bolder">접근성 관련 참조 : </span>
              <a href="https://mulder21c.github.io/2018/06/04/how-to-make-accessible-tab-content/" target="_blank">https://mulder21c.github.io/2018/06/04/how-to-make-accessible-tab-content/</a>
              <br />
              <span class="blue bolder">accordion접근성 관련 참조 : </span>
              <a href="https://nuli.navercorp.com/community/article/1132889?email=true" target="_blank">https://nuli.navercorp.com/community/article/1132889?email=true</a>
              <br />
              <a href="https://github.com/yamoo9/DDP/blob/master/D_03/UI%20Component/README.md" target="_blank">https://github.com/yamoo9/DDP/blob/master/D_03/UI%20Component/README.md</a>
              <br />
              <span class="blue bolder">JSDoc 참조 : </span>
              <a href="https://jsdoc.app/index.html#block-tags" target="_blank">https://jsdoc.app/index.html#block-tags</a>
              <br />
              <span class="blue bolder">UI Component 참조 : </span>
              <a href="https://material.io/develop/web/components/lists" target="_blank">https://material.io/develop/web/components/lists</a>
              <br />
              <span class="blue bolder">CSS flex grid 참조 : </span>
              <a href="https://studiomeal.com/archives/533" target="_blank">https://studiomeal.com/archives/533</a>
              <br />
              <span class="blue bolder">prettify 참조 : </span>
              <a href="https://github.com/googlearchive/code-prettify?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library" target="_blank">
                https://github.com/googlearchive/code-prettify?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library
              </a>
              <br />
            </div>

            <div class="widget-box">
              <div class="widget-header">
                <h4 class="smaller">
                  <b>기본 사용방법</b>
                  <small>
                    <span class="label">ui-accordions</span>
                    <span class="label">ui-accordion</span>
                    <span class="label">ui-accordion-header</span>
                    <span class="label">ui-accordion-content</span>
                    를 이용한 accordion 컴포넌트 사용방법.
                  </small>
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>템플릿에 <span class="bolder green">&lt;ui-accordions&gt;</span>컴퍼넌트를 입력해서 컴퍼넌트의 위치를 정합니다. container역할을 합니다.</b>
                          <br />
                          <p>
                            <span class="bolder green">&lt;ui-accordion&gt;</span>으로 원하는 개수의 accordion list를 입력합니다.
                            <br />
                            <span class="bolder green">&lt;ui-accordion&gt;</span>내부에 <span class="bolder green">&lt;ui-accordion-header&gt;</span>(제목)와
                            <span class="bolder green">&lt;ui-accordion-content&gt;</span>(컨텐츠)를 입력하여 title부분과 content부분으로 나눕니다.
                            <br />
                            <b>header</b>와 <b>content</b>에는 원하는 형태의 html tag나 text를 채워서 보여줍니다.
                          </p>
                          <div style="border: 1px solid #e2e2e2;">
                            <ui-tabs>
                              <ui-tab>Source</ui-tab>
                              <ui-tab>Demo</ui-tab>
                              <ui-tabpanel>
                                <pre class="prettyprint linenums lang-html">
&lt;template&gt;
  &lt;div&gt;
    &lt;ui-accordions&gt;
      &lt;ui-accordion&gt;
        &lt;ui-accordion-header&gt;Home&lt;/ui-accordion-header&gt;
        &lt;ui-accordion-content&gt;
          Home Content
          &lt;br /&gt;
          &lt;input type="text" placeholder="text 입력상자 테스트" /&gt;
        &lt;/ui-accordion-content&gt;
      &lt;/ui-accordion&gt;
      &lt;ui-accordion&gt;
        &lt;ui-accordion-header&gt;Profile&lt;/ui-accordion-header&gt;
        &lt;ui-accordion-content&gt;Profile Content&lt;/ui-accordion-content&gt;
      &lt;/ui-accordion&gt;
      &lt;ui-accordion&gt;
        &lt;ui-accordion-header&gt;More&lt;/ui-accordion-header&gt;
        &lt;ui-accordion-content&gt;More Content&lt;/ui-accordion-content&gt;
      &lt;/ui-accordion&gt;
    &lt;/ui-accordions&gt;
  &lt;/div&gt;
&lt;/template&gt;
                                </pre>
                              </ui-tabpanel>
                              <ui-tabpanel>
                                <ui-accordions multi-select selected-index="2">
                                  <ui-accordion>
                                    <ui-accordion-header>Home</ui-accordion-header>
                                    <ui-accordion-content background-color="#f4f9fd">
                                      Home Content
                                      <br />
                                      <input type="text" placeholder="text 입력상자 테스트" />
                                    </ui-accordion-content>
                                  </ui-accordion>
                                  <ui-accordion>
                                    <ui-accordion-header>Profile</ui-accordion-header>
                                    <ui-accordion-content background-color="#f4f9fd">Profile Content</ui-accordion-content>
                                  </ui-accordion>
                                  <ui-accordion>
                                    <ui-accordion-header>More</ui-accordion-header>
                                    <ui-accordion-content background-color="#f4f9fd">More Content</ui-accordion-content>
                                  </ui-accordion>
                                </ui-accordions>
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
                  <small>ui-accordion의 속성</small>
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
                              <b class="text-success lead">selected-index</b>
                              <p class="alert alert-success">
                                최초 선택(펼침) 되어져야 할 Accordion의 index값을 설정한다.<br />
                                <b>타입: </b> Number<br />
                                <b>기본값: </b> null<br />
                              </p>
                              <div style="border: 1px solid #e2e2e2;">
                                <ui-tabs>
                                  <ui-tab>Source</ui-tab>
                                  <ui-tab>Demo</ui-tab>
                                  <ui-tabpanel>
                                    <pre class="prettyprint linenums">
&lt;ui-accordions selected-index="1"&gt;
  &lt;ui-accordion&gt;
    &lt;ui-accordion-header&gt;Home&lt;/ui-accordion-header&gt;
    &lt;ui-accordion-content&gt;Home Content&lt;/ui-accordion-content&gt;
  &lt;/ui-accordion&gt;
  &lt;ui-accordion&gt;
    &lt;ui-accordion-header&gt;Profile&lt;/ui-accordion-header&gt;
    &lt;ui-accordion-content&gt;Profile Content&lt;/ui-accordion-content&gt;
  &lt;/ui-accordion&gt;
  &lt;ui-accordion&gt;
    &lt;ui-accordion-header&gt;More&lt;/ui-accordion-header&gt;
    &lt;ui-accordion-content&gt;More Content&lt;/ui-accordion-content&gt;
  &lt;/ui-accordion&gt;
&lt;/ui-accordions&gt;
                                    </pre>
                                  </ui-tabpanel>
                                  <ui-tabpanel>
                                    <ui-accordions selected-index="1">
                                      <ui-accordion>
                                        <ui-accordion-header>Home</ui-accordion-header>
                                        <ui-accordion-content>Home Content</ui-accordion-content>
                                      </ui-accordion>
                                      <ui-accordion>
                                        <ui-accordion-header>Profile</ui-accordion-header>
                                        <ui-accordion-content>Profile Content</ui-accordion-content>
                                      </ui-accordion>
                                      <ui-accordion>
                                        <ui-accordion-header>More</ui-accordion-header>
                                        <ui-accordion-content>More Content</ui-accordion-content>
                                      </ui-accordion>
                                    </ui-accordions>
                                  </ui-tabpanel>
                                </ui-tabs>
                              </div>
                              <hr />
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <b class="text-success lead">multi-select</b>
                              <p class="alert alert-success">
                                아코디언 컴퍼넌트를 펼칠때 다중 펼침 옵션을 지정하여 주유롭게 펼칠 수 있습니다. 기본은 하나만 펼치게 되어있습니다.<br />
                                <b>타입: </b> Boolean<br />
                                <b>기본값: </b> false<br />
                              </p>
                              <div style="border: 1px solid #e2e2e2;">
                                <ui-tabs>
                                  <ui-tab>Source</ui-tab>
                                  <ui-tab>Demo</ui-tab>
                                  <ui-tabpanel>
                                    <pre class="prettyprint linenums">
&lt;ui-accordions multi-select&gt;
  &lt;ui-accordion&gt;
    &lt;ui-accordion-header&gt;Home&lt;/ui-accordion-header&gt;
    &lt;ui-accordion-content&gt;Home Content&lt;/ui-accordion-content&gt;
  &lt;/ui-accordion&gt;
  &lt;ui-accordion&gt;
    &lt;ui-accordion-header&gt;Profile&lt;/ui-accordion-header&gt;
    &lt;ui-accordion-content&gt;Profile Content&lt;/ui-accordion-content&gt;
  &lt;/ui-accordion&gt;
  &lt;ui-accordion&gt;
    &lt;ui-accordion-header&gt;More&lt;/ui-accordion-header&gt;
    &lt;ui-accordion-content&gt;More Content&lt;/ui-accordion-content&gt;
  &lt;/ui-accordion&gt;
&lt;/ui-accordions&gt;
                                    </pre>
                                  </ui-tabpanel>
                                  <ui-tabpanel>
                                    <ui-accordions multi-select>
                                      <ui-accordion>
                                        <ui-accordion-header>Home</ui-accordion-header>
                                        <ui-accordion-content>Home Content</ui-accordion-content>
                                      </ui-accordion>
                                      <ui-accordion>
                                        <ui-accordion-header>Profile</ui-accordion-header>
                                        <ui-accordion-content>Profile Content</ui-accordion-content>
                                      </ui-accordion>
                                      <ui-accordion>
                                        <ui-accordion-header>More</ui-accordion-header>
                                        <ui-accordion-content>More Content</ui-accordion-content>
                                      </ui-accordion>
                                    </ui-accordions>
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
