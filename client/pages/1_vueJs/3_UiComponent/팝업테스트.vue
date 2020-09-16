<template>
  <div>
    <div class="page-header">
      <h1>
        전역 팝업 만들기
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          참조 : <a href="https://m.blog.naver.com/jjoommnn/221102686590" target="_blank">https://m.blog.naver.com/jjoommnn/221102686590</a>
        </small>
      </h1>
    </div>
    <!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
          <div class="col-xs-12">
            <h3>Alert, Confirm, Popup</h3>

            <div class="alert alert-info hidden-sm hidden-xs">
              <button type="button" class="close" data-dismiss="alert">
                <i class="ace-icon fa fa-times"></i>
              </button>
              (중요!)<br />
              NuxtJs를 이용하여 코딩 할때는
              <span class="red bolder">client side &amp; serer side</span>
              를 모두 생각하면서 코딩 해야 한다.<br />
              NuxtJs에서 플러그인을 제작할때 Vue인스턴스 라이프사이클 중
              <span class="blue bolder">beforeCreate와 created</span>
              만 server, client에서 호출 된다. 나머지는 모두 client에서만 호출된다.
            </div>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  this.$rayui.alert() 열기 테스트
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <button @click="onOpen">alert열기</button>
                          <br />
                          <button @click="onConfirm">confirm 열기</button>
                          <br />
                          <input type="text" v-model="testPluginVal" />
                          <button @click="onTestPlugin">testPlugin테스트</button>
                        </li>
                        <li>
                          <b>this.$rayui.alert(), this.$rayui.confirm(), this.$rayui.popup()</b>
                          <pre class="prettyprint linenums">// ...</pre>
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
    const a = '';
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
    onTestPlugin() {
      // this.$testPlugin(this.testPluginVal);
    },
  },
};
</script>
