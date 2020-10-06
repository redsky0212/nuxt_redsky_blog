<template>
  <div>
    <div class="page-header">
      <h1>
        Text Input
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          사용자가 텍스트를 입력하고 편집할 수 있는 컴퍼넌트.
        </small>
      </h1>
    </div>
    <!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
          <div class="col-xs-12">
            <h3 class="header smaller bolder green">Ui Textinput</h3>

            <div class="alert alert-info hidden-sm hidden-xs">
              <button type="button" class="close" data-dismiss="alert">
                <i class="ace-icon fa fa-times"></i>
              </button>
              <i class="ace-icon fa fa-check bigger-110 green"></i>
              <span class="bolder">참조링크</span><br />
              <span class="blue bolder">Vuetify 참조 : </span>
              <a href="https://vuetifyjs.com/ko/components/forms/" target="_blank">https://vuetifyjs.com/ko/components/forms/</a>
              <br />
              <span class="blue bolder">Vue component 참조 사이트 : </span>
              <a href="https://ej2.syncfusion.com/home/vue.html" target="_blank">https://ej2.syncfusion.com/home/vue.html</a>
              <br />
              <span class="blue bolder">bootstrap input 참조 : </span>
              <a href="https://bootstrap-vue.org/docs/components/form-input" target="_blank">https://bootstrap-vue.org/docs/components/form-input</a>
              <br />
              <span class="blue bolder">Text field 참조 : </span>
              <a href="https://material.io/develop/web/components/text-fields#api" target="_blank">https://material.io/develop/web/components/text-fields#api</a>
              <br />
              <span class="blue bolder">input text 접근성 관련 참조 : </span>
              <a href="https://neul-carpediem.tistory.com/266" target="_blank">https://neul-carpediem.tistory.com/266</a>
              <br />
              <span class="blue bolder">javascript 확장기능들 모음 참조 : </span>
              <a href="https://locutus.io/php/" target="_blank">https://locutus.io/php/</a>
              <br />
              <span class="blue bolder">input type설정 관련 참조 : </span>
              <a href="https://www.filamentgroup.com/lab/type-number.html" target="_blank">https://www.filamentgroup.com/lab/type-number.html</a>
              <br />
            </div>

            <div class="alert alert-danger hidden-sm hidden-xs">
              <button type="button" class="close" data-dismiss="alert">
                <i class="ace-icon fa fa-times"></i>
              </button>
              <i class="ace-icon fa fa-check bigger-110 green"></i>
              <span class="bolder">추가 해야할 작업</span><br />
              <i class="ace-icon fa fa-angle-right bigger-110"></i>
              <span class="red" style="text-decoration: line-through;">focus와 value가 있을때 label 처리 </span>
              <br />
              <i class="ace-icon fa fa-angle-right bigger-110"></i>
              <span class="red" style="text-decoration: line-through;">focus 되었을때 밑줄, floating label처리 </span>
              <br />
              <i class="ace-icon fa fa-angle-right bigger-110"></i>
              <span class="red">number 통화포맷시 콤마처리 및 커서포지션 버그 수정 </span>
              <br />
              <i class="ace-icon fa fa-angle-right bigger-110"></i>
              <span class="red">validation처리 (error, warning, normal) </span>
              <br />
              <i class="ace-icon fa fa-angle-right bigger-110"></i>
              <span class="red">다양한 Formatting처리 (Number, Eng, Kor, length 등) </span>
              <br />
            </div>

            <div class="widget-box">
              <div class="widget-header">
                <h4 class="smaller">
                  <b>기본 사용방법</b>
                  <small>
                    <span class="label">ui-text-input</span>
                    를 이용한 text input 컴포넌트 사용방법.
                  </small>
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>템플릿에 <span class="bolder green">&lt;ui-text-input&gt;</span>컴퍼넌트를 코딩하여 사용합니다.</b>
                          <br />
                          <p>
                            <span class="bolder green">&lt;ui-text-input&gt;</span>
                            으로 입력하고자 하는 위치에 코딩하고 다양한 옵선 속성을 적용하여 설정 합니다.
                            <br />
                            <span class="bolder green">&lt;ui-text-input v-model="값 연결"&gt;</span>
                            모든 UiTextInput은 <span class="bolder blue">v-model</span>로 data 값을 연결하여 입력된 데이터를 유지할 수 있게 한다.
                          </p>
                          <div style="border: 1px solid #e2e2e2;">
                            <ui-tabs selected-index="1">
                              <ui-tab title="Source">
                                <pre class="prettyprint linenums lang-html">
&lt;template&gt;
&lt;div&gt;
  &lt;ui-text-input v-model="testValue"&gt;&lt;/ui-text-input&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  data() {
    return {
      testValue: '',
    };
  },
}
&lt;/script&gt;
                                </pre>
                              </ui-tab>
                              <ui-tab title="Demo">
                                <ui-text-input v-model="testValue" label="Full Name"></ui-text-input>
                                <ui-text-input v-model="testValue2" label="숫자 입력" message="숫자값을 입력하세요." type="number"></ui-text-input>
                                <ui-text-input v-model="testValue3" label="message-area옵션 테스트" message-area="auto" message="값을 입력하세요."></ui-text-input>
                                <ui-text-input v-model="testValue4" label="format속성 테스트 (currency)" message-area="auto" message="값을 입력하세요." type="number" format="currency"></ui-text-input>
                                <ui-text-input v-model="testValue5" label="format속성 테스트 (only number)" message-area="auto" message="값을 입력하세요." type="number"></ui-text-input>
                              </ui-tab>
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
                  <small>ui-text-input의 속성</small>
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
                              <b class="text-success lead">value</b>
                              <p class="alert alert-success">
                                value설명 ... ...<br />
                                <b>타입: </b> String<br />
                                <b>기본값: </b> null<br />
                              </p>
                              <div style="border: 1px solid #e2e2e2;">
                                <ui-tabs>
                                  <ui-tab title="Source">
                                    <pre class="prettyprint linenums">
&lt;template&gt;
  &lt;div&gt;
    &lt;ui-text-input&gt;&lt;/ui-text-input&gt;
  &lt;/div&gt;
&lt;/template&gt;
                                    </pre>
                                  </ui-tab>
                                  <ui-tab title="Demo">
                                    ...
                                  </ui-tab>
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
      testValue: '',
      testValue2: '123',
      testValue3: 'abc',
      testValue4: '34242.4324',
      testValue5: '342424324',
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
