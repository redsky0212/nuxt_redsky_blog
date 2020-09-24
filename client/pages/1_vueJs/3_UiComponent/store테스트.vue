<template>
  <div>
    <div class="page-header">
      <h1>
        store 사용 및 관리
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          Nuxt Store 관리 관련 테스트
        </small>
      </h1>
    </div>
    <!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
          <div class="col-xs-12">
            <h3>Actions, Mutations, Getters, State</h3>

            <div class="alert alert-info hidden-sm hidden-xs">
              <button type="button" class="close" data-dismiss="alert">
                <i class="ace-icon fa fa-times"></i>
              </button>
              <span class="blue bolder">Nuxt Store 관리 관련 참조 : </span>
              <a href="https://jbee.io/vuetorials/Vuetorials-7-Vuex-Best-Practice/" target="_blank">https://jbee.io/vuetorials/Vuetorials-7-Vuex-Best-Practice/</a>
              <br />
              <span class="blue bolder">vuex 관리 관련 참조 : </span>
              <a href="https://vuex.vuejs.org/guide/mutations.html" target="_blank">https://vuex.vuejs.org/guide/mutations.html</a>
              <br />
              <span class="blue bolder">axios 관련 참조 : </span>
              <a href="https://github.com/axios/axios#example" target="_blank">https://github.com/axios/axios#example</a>
              <br />
              <span class="blue bolder">axios 구조설계 관련 참조 : </span>
              <a href="https://github.com/gothinkster/vue-realworld-example-app/blob/master/src/common/api.service.js" target="_blank">
                https://github.com/gothinkster/vue-realworld-example-app/blob/master/src/common/api.service.js
              </a>
              <br />
              <span class="blue bolder">axios client 구조설계 관련 참조 : </span>
              <a href="https://laravel-news.com/building-flexible-axios-clients" target="_blank">https://laravel-news.com/building-flexible-axios-clients</a>
              <br />
              <span class="blue bolder">axios client 구조설계2 관련 참조 : </span>
              <a href="https://dev.to/localeai/architecting-http-clients-in-vue-js-applications-for-effective-network-communication-1eec" target="_blank">
                https://dev.to/localeai/architecting-http-clients-in-vue-js-applications-for-effective-network-communication-1eec
              </a>
              <br />
            </div>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  Hacker News API 테스트
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <div style="border: 1px solid #e2e2e2;">
                        <ul>
                          <li v-for="(item, index) of newsData" :key="index">
                            {{ item.title }}
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
  </div>
</template>

<script>
// namespace를 입력할 필요없게 하기 위해 'store/testBiz'에서 return한 helper함수를 사용한다.
import testBiz, { mapActions, mapGetters, mapState } from '@/store/testBiz';

export default {
  asyncData(context) {
    // context.app.$testPlugin('asyncData 호출!');
  },
  data() {
    return {
      b: '',
    };
  },
  computed: {
    ...mapGetters({
      newsData: testBiz.getter.NEWS_LIST,
    }),
    ...mapState({
      newsVal: (state) => state.newsData,
    }),
    // helper함수를 사용하지 않고 바로 사용하는 형식 지양한다.
    newsState() {
      return this.$store.state.testBiz.newsData;
    },
  },
  mounted() {
    window.prettyPrint();
    this.$nextTick(() => {
      this.fetchNews();
      console.log(testBiz.getter);
    });
  },
  methods: {
    ...mapActions({
      fetchNews: testBiz.action.FETCH_NEWS_CON,
    }),
  },
};
</script>
