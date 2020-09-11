<template>
  <div>
    <div class="page-header">
      <h1>
        버튼
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          Button 컴포넌트 사용방법을 설명합니다.
          <a href="https://ej2.syncfusion.com/vue/documentation/introduction/" target="_blank">참조 url : https://ej2.syncfusion.com/vue/documentation/introduction/</a>
        </small>
      </h1>
    </div>
    <!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
          <div class="col-xs-12">
            <h3 class="header smaller bolder green">Default Button</h3>

            <div class="alert alert-info hidden-sm hidden-xs">
              <button type="button" class="close" data-dismiss="alert">
                <i class="ace-icon fa fa-times"></i>
              </button>
              <i class="ace-icon fa fa-check bigger-110 green"></i>
              <span class="bolder">Dependencies!</span><br />
              <span class="blue bolder">animejs : </span><a href="https://www.npmjs.com/package/animejs" target="_blank">npm i animejs</a>
            </div>

            <div class="widget-box">
              <div class="widget-header">
                <h4 class="smaller">
                  <b>기본 사용방법</b>
                  <small>전역 공통 <span class="label">ui-button</span> 기본 컴포넌트</small>
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>템플릿에 <span class="bolder green">&lt;ui-button&gt;</span>을 삽입해서 사용.</b>
                          <pre class="prettyprint linenums">
&lt;template&gt;
  &lt;div&gt;
    &lt;ui-button&gt;버튼&lt;/ui-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
                          </pre>
                        </li>
                        <li>
                          <b>preview</b>
                          <div class="thumbnail">
                            <!-- <ui-button @click="onClickBtn">버튼</ui-button> -->
                            <ui-button>버튼</ui-button>
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
                  <small>ui-button의 속성</small>
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
                              <b class="text-success lead">color</b>
                              <p class="alert alert-success">
                                버튼의 색 지정.<br />
                                <b>타입: </b> String<br />
                                <b>기본값: </b>'primary'<br />
                                <b>값 종류: </b>
                                <span>'primary', 'secondary', 'info', 'success', 'warning', 'danger', 'dark', 'light'</span>
                                <span>'outline-primary', 'outline-secondary', 'outline-info', 'outline-success', 'outline-warning', 'outline-danger', 'outline-dark', 'outline-light'</span>
                                <span>'light-primary', 'light-secondary', 'light-info', 'light-success', 'light-warning', 'light-danger', 'light-dark', 'light-light'</span>
                              </p>
                              <pre class="prettyprint linenums">
&lt;template&gt;
  &lt;div&gt;
    &lt;ui-button&gt;primary&lt;/ui-button&gt;
    &lt;ui-button color="secondary"&gt;secondary&lt;/ui-button&gt;
    &lt;ui-button color="info"&gt;info&lt;/ui-button&gt;
    &lt;ui-button color="success"&gt;success&lt;/ui-button&gt;
    &lt;ui-button color="warning"&gt;warning&lt;/ui-button&gt;
    &lt;ui-button color="danger"&gt;danger&lt;/ui-button&gt;
    &lt;ui-button color="dark"&gt;dark&lt;/ui-button&gt;
    &lt;ui-button color="light"&gt;light&lt;/ui-button&gt;
    &lt;br /&gt;
    &lt;br /&gt;
    &lt;ui-button color="outline-primary"&gt;primary&lt;/ui-button&gt;
    &lt;ui-button color="outline-secondary"&gt;secondary&lt;/ui-button&gt;
    &lt;ui-button color="outline-info"&gt;info&lt;/ui-button&gt;
    &lt;ui-button color="outline-success"&gt;success&lt;/ui-button&gt;
    &lt;ui-button color="outline-warning"&gt;warning&lt;/ui-button&gt;
    &lt;ui-button color="outline-danger"&gt;danger&lt;/ui-button&gt;
    &lt;ui-button color="outline-dark"&gt;dark&lt;/ui-button&gt;
    &lt;ui-button color="outline-light"&gt;light&lt;/ui-button&gt;
    &lt;br /&gt;
    &lt;br /&gt;
    &lt;ui-button color="light-primary"&gt;primary&lt;/ui-button&gt;
    &lt;ui-button color="light-secondary"&gt;secondary&lt;/ui-button&gt;
    &lt;ui-button color="light-info"&gt;info&lt;/ui-button&gt;
    &lt;ui-button color="light-success"&gt;success&lt;/ui-button&gt;
    &lt;ui-button color="light-warning"&gt;warning&lt;/ui-button&gt;
    &lt;ui-button color="light-danger"&gt;danger&lt;/ui-button&gt;
    &lt;ui-button color="light-dark"&gt;dark&lt;/ui-button&gt;
    &lt;ui-button color="light-light"&gt;light&lt;/ui-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
                              </pre>
                              <ui-button>primary</ui-button>
                              <ui-button color="secondary">secondary</ui-button>
                              <ui-button color="info">info</ui-button>
                              <ui-button color="success">success</ui-button>
                              <ui-button color="warning">warning</ui-button>
                              <ui-button color="danger">danger</ui-button>
                              <ui-button color="dark">dark</ui-button>
                              <ui-button color="light">light</ui-button>
                              <br />
                              <br />
                              <ui-button color="outline-primary">primary</ui-button>
                              <ui-button color="outline-secondary">secondary</ui-button>
                              <ui-button color="outline-info">info</ui-button>
                              <ui-button color="outline-success">success</ui-button>
                              <ui-button color="outline-warning">warning</ui-button>
                              <ui-button color="outline-danger">danger</ui-button>
                              <ui-button color="outline-dark">dark</ui-button>
                              <ui-button color="outline-light">light</ui-button>
                              <br />
                              <br />
                              <ui-button color="light-primary">primary</ui-button>
                              <ui-button color="light-secondary">secondary</ui-button>
                              <ui-button color="light-info">info</ui-button>
                              <ui-button color="light-success">success</ui-button>
                              <ui-button color="light-warning">warning</ui-button>
                              <ui-button color="light-danger">danger</ui-button>
                              <ui-button color="light-dark">dark</ui-button>
                              <ui-button color="light-light">light</ui-button>
                              <hr />
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <b class="text-success lead">disabled</b>
                              <p class="alert alert-success">버튼을 비활성화 시킬때 적용</p>
                              <pre class="prettyprint linenums">
&lt;template&gt;
  &lt;div&gt;
    &lt;ui-button disabled&gt;버튼&lt;/ui-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
                              </pre>
                              <ui-button disabled>disabled</ui-button>
                              <hr />
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <b class="text-success lead">full</b>
                              <p class="alert alert-success">버튼의 넓이값(width)을 부모의 넓이 전체에 맞춘다.</p>
                              <pre class="prettyprint linenums">
&lt;template&gt;
  &lt;div&gt;
    &lt;ui-button full&gt;버튼&lt;/ui-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
                              </pre>
                              <ui-button full>버튼</ui-button>
                              <hr />
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <b class="text-success lead">rounded</b>
                              <p class="alert alert-success">버튼의 모서리를 둥글게 처리한다.</p>
                              <pre class="prettyprint linenums">
&lt;template&gt;
  &lt;div&gt;
    &lt;ui-button rounded&gt;버튼&lt;/ui-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
                              </pre>
                              <ui-button rounded>버튼</ui-button>
                              <hr />
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <b class="text-success lead">Sizing 속성</b>
                              <p class="alert alert-success">
                                버튼의 크기를 조정하는 속성.<br />
                                <b>기본값: </b>'default'<br />
                                <b>속성 종류: </b> 'xsmall', 'small', 'default', 'large', 'xlarge'
                              </p>
                              <pre class="prettyprint linenums">
&lt;template&gt;
  &lt;div&gt;
    &lt;ui-button&gt;버튼&lt;/ui-button&gt;
    &lt;ui-button xsmall&gt;버튼&lt;/ui-button&gt;
    &lt;ui-button small&gt;버튼&lt;/ui-button&gt;
    &lt;ui-button default&gt;버튼&lt;/ui-button&gt;
    &lt;ui-button large&gt;버튼&lt;/ui-button&gt;
    &lt;ui-button xlarge&gt;버튼&lt;/ui-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
                              </pre>
                              <ui-button>버튼</ui-button>
                              <ui-button xsmall>버튼</ui-button>
                              <ui-button small>버튼</ui-button>
                              <ui-button default>버튼</ui-button>
                              <ui-button large>버튼</ui-button>
                              <ui-button xlarge>버튼</ui-button>
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
            <div class="widget-box">
              <div class="widget-header">
                <h4 class="smaller">
                  <b>Event</b>
                  <small><span class="label">ui-button</span> 컴포넌트에 이벤트를 적용하는 방법.</small>
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <h4><b>Click</b></h4>
                          <b><span class="bolder green">&lt;ui-button&gt;</span>에 click이벤트 적용.</b>
                          <pre class="prettyprint linenums">
&lt;template&gt;
  &lt;div&gt;
    &lt;ui-button @click="onClick"&gt;버튼&lt;/ui-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  methods: {
    onClick(event) {
      this.$rayui.alert('버튼 클릭!');
    },
  },
}
&lt;/script&gt;
                          </pre>
                          <ui-button
                            @click="
                              () => {
                                $rayui.alert('버튼 클릭!');
                              }
                            "
                          >
                            버튼
                          </ui-button>
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
