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
                              <b class="text-success lead">full</b>
                              <p class="alert alert-success">버튼의 넓이값(width)값을 부모의 넓이 전체에 맞춘다.</p>
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
                              <b class="text-success lead">Sizing 속성</b>
                              <p class="alert alert-success">
                                버튼의 크기를 조정하는 다양한 속성들이 있습니다.<br />
                                <b>기본값: </b>null<br />
                                <b>종류: </b> small, large
                              </p>
                              <pre class="prettyprint linenums">
&lt;template&gt;
  &lt;div&gt;
    &lt;ui-button small&gt;버튼&lt;/ui-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
                              </pre>
                              <ui-button full>버튼</ui-button>
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
