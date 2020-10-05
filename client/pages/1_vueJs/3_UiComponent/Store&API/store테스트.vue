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
              <span class="blue bolder">dotenv 관련 참조 : </span>
              <a href="https://fkkmemi.github.io/nuxt/nuxt-007-firebase-dotenv/" target="_blank">https://fkkmemi.github.io/nuxt/nuxt-007-firebase-dotenv/</a>
              <br />
              <span class="blue bolder">dotenv 다른사람예제 : </span>
              <a href="https://pliss.tistory.com/146" target="_blank">https://pliss.tistory.com/146</a>
              <br />
              <span class="blue bolder">가짜 REST API 예제 사이트 : </span>
              <a href="https://jsonplaceholder.typicode.com/" target="_blank">https://jsonplaceholder.typicode.com/</a>
              <br />
              <span class="blue bolder">Nuxt로 사이트 개발 과정 설명 : </span>
              <a href="https://www.vuemastery.com/blog/why-nuxtjs-is-the-perfect-framework-for-building-static-websites/" target="_blank">
                https://www.vuemastery.com/blog/why-nuxtjs-is-the-perfect-framework-for-building-static-websites/
              </a>
              <br />
            </div>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  get photos list
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <div>
                        <ul class="ace-thumbnails clearfix">
                          <li v-for="(photo, index) in $rayui.utils.isArray(photoList) ? photoList.slice(0, 10) : []" :key="index">
                            <a :href="photo.url" title="Photo Title" data-rel="colorbox">
                              <img width="150" height="150" alt="150x150" :src="photo.thumbnailUrl" />
                            </a>
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
                            {{ item.email }}
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
                  .env 설정
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <div style="border: 1px solid #e2e2e2;">
                        <ul>
                          <li>
                            <b>npm install --save-dev <span class="bolder green">@nuxtjs/dotenv</span> 설치</b>
                          </li>
                          <li>
                            <b><span class="bolder green">.env</span>파일 예제</b>
                            <pre class="prettyprint linenums lang-env">
BASE_DIR="/redsky/devil/"
REST_API_URL="https://jsonplaceholder.typicode.com/"
REST_API_URL2="https://api.Hnpwa.com"
                            </pre>
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
      photoList: null,
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
      console.log(`==================>${process.env.NODE_ENV}`);
      this.getPhotos().then((data) => {
        this.photoList = data.data;
      });
    });
  },
  methods: {
    ...mapActions({
      fetchNews: testBiz.action.FETCH_NEWS_CON,
      getPhotos: testBiz.action.GET_PHOTOS,
    }),
  },
};
</script>
