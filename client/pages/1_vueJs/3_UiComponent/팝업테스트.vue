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
                  vuex axios 테스트
                  <a href="https://dev.to/itnext/learn-how-you-can-build-enterprise-vue-js-applications-with-nuxt-5fp4" target="_blank">엔터프라이즈 Nuxt프로젝트 관련 참고 사이트</a><br />
                  <a href="https://jbee.io/vuetorials/Vuetorials-7-Vuex-Best-Practice/" target="_blank">Nuxt store관리 관련 참조url</a>
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <div style="border: 1px solid #e2e2e2;">
                        <ul>
                          <li v-for="(item, index) of $store.state.testBiz.newsData" :key="index">
                            {{ item.title }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                      <div style="border: 1px solid #e2e2e2;">
                        <ui-tabs selected-index="1">
                          <ui-tab title="소스보기 템플릿 화면">
                            <pre class="prettyprint linenums lang-html">
&lt;template&gt;
&lt;div&gt;
  &lt;ui-text-input&gt;&lt;/ui-text-input&gt;
&lt;/div&gt;
&lt;/template&gt;
                            </pre>
                          </ui-tab>
                          <ui-tab title="Demo">
                            <p>참조:</p>
                            <a href="https://learnvue.co/2019/12/building-reusable-components-in-vuejs-tabs/" target="_blank">참조 url</a>
                            <ui-text-input v-model="testValue"></ui-text-input>
                          </ui-tab>
                        </ui-tabs>
                        <ui-tabs selected-index="2">
                          <ui-tab v-for="(item, index) in tabData" :title="item.title" :key="index">
                            {{ item.content }}
                          </ui-tab>
                        </ui-tabs>
                      </div>
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
import { mapActions, mapGetters } from 'vuex';
import * as newsAction from '@/store/testBiz/actions';

export default {
  asyncData(context) {
    // context.app.$testPlugin('asyncData 호출!');
  },
  data() {
    return {
      testValue: 'aaa',
      testPluginVal: '',
      tabData: [
        { title: 'Home', content: 'Home panel' },
        { title: 'Profile', content: 'Profile panel' },
        { title: 'More', content: 'More panel' },
      ],
    };
  },
  computed: {
    ...mapGetters({
      newsData: 'testBiz/getNewsData',
    }),
  },
  mounted() {
    window.prettyPrint();
    this.FETCH_NEWS();
  },
  methods: {
    // ...mapActions({
    //   getNews: 'testBiz/getNews',
    // }),
    ...mapActions('testBiz', [newsAction.GETNEWS]),
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
