<template>
  <div>
    <div class="page-header">
      <h1>
        store관리
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          비동기 API통신을 위한 store생성 방법
        </small>
      </h1>
    </div>
    <!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
          <div class="col-xs-12">
            <h3>Vuex를 베이스로 store 생성 방법</h3>

            <div class="alert alert-info hidden-sm hidden-xs">
              <button type="button" class="close" data-dismiss="alert">
                <i class="ace-icon fa fa-times"></i>
              </button>
              <span class="blue bolder">Nuxt Store 관리 관련 참조 : </span>
              <a href="https://jbee.io/vuetorials/Vuetorials-7-Vuex-Best-Practice/" target="_blank">https://jbee.io/vuetorials/Vuetorials-7-Vuex-Best-Practice/</a>
              <br />
              <span class="blue bolder">prettify 참조 : </span>
              <a href="https://github.com/googlearchive/code-prettify?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library" target="_blank">
                https://github.com/googlearchive/code-prettify?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library
              </a>
              <br />
            </div>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  store폴더에 각 업무 store생성 과정
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <img alt="store생성 예제 이미지" src="~/assets/images/pages/store.png" />
                      <ul>
                        <li>
                          <b>위 그림과 같이 store폴더에 업무별 폴더를 생성하고 파일을 추가한다.</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <span class="bolder green">index.js, state.js, getters.js, mutations.js, actions.js</span> 파일 생성
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>index.js</b>
                          <pre class="prettyprint linenums lang-js" style="margin-bottom: 0;">
// *를 사용하여 export, export default를 모두 가져온다.
// * 별칭은 파일명과 다르게 사용한다.
import { createNamespacedHelpers } from 'vuex';
import * as states from './state';
import * as getter from './getters';
import * as mutation from './mutations';
import * as action from './actions';

// 각 업무명에 맞게 namespace 설정.
const NAMESPACE = 'testBiz';

const { mapActions, mapGetters, mapMutations, mapState } = createNamespacedHelpers(NAMESPACE);

export { mapActions, mapGetters, mapMutations, mapState };
export default {
  namespaced: true,
  states,
  getter,
  mutation,
  action,
};
                          </pre>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              NAMESPACE 상수값만 각 업무명에 맞게 입력하고 나머지 코드는 그대로 사용한다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>state.js</b>
                          <pre class="prettyprint linenums lang-js" style="margin-bottom: 0;">
// state는 객체가 아닌 함수로 만든다.
export default () => {
  return {
    newsData: null, // 자유롭게 state를 설정한다.
    ...
  };
};
                          </pre>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              state는 화살표 함수로 생성하고 state값은 자유롭게 생성한다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>getters.js</b>
                          <pre class="prettyprint linenums lang-js" style="margin-bottom: 0;">
// getter 함수명은 상수로 따로 만들어 관리한다.
export const NEWS_LIST = 'getNewsData';
export const TEST_LIST = 'getTestList';

export default {
  // 위에 만들어진 상수값을 이용하여 getters함수명을 적용한다.
  [NEWS_LIST]: (state) => {
    return state.newsData;
  },
  [TEST_LIST]: (state) => {
    return state.itemData;
  },
};
                          </pre>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              getters함수명은 상수값으로 따로 관리하고 export시켜준다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>mutations.js</b>
                          <pre class="prettyprint linenums lang-js" style="margin-bottom: 0;">
// mutations 함수명은 상수로 따로 만들어 관리한다.
export const SET_NEWS_LIST = 'newsList';

export default {
  // 위에 만들어진 상수값을 이용하여 mutations함수명을 적용한다.
  [SET_NEWS_LIST](state, payload) {
    state.newsData = payload;
  },
};
                          </pre>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              mutations함수명은 상수값으로 따로 관리하고 export시켜준다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>actions.js</b>
                          <pre class="prettyprint linenums lang-js" style="margin-bottom: 0;">
// api는 api폴더에서 따로 관리하여 import로 가져와 사용한다.
import testBizHttp from '@/api/testBiz';
import * as mutations from './mutations';

// action명은 상수값으로 따로 관리한다.
export const FETCH_NEWS_CON = 'FETCH_NEWS';
export const GET_PHOTOS = 'GET_PHOTOS';

export default {
  [FETCH_NEWS_CON]({ commit }, payload) {
    // api폴더에 만들어 놓은 각 업무별 http client를 사용하는 방법
    return testBizHttp
      .getNews(payload)
      .then((data) => {
        commit(mutations.SET_NEWS_LIST, data.data);
      })
      .catch((ex) => {
        console.log(ex);
      });
  },
  [GET_PHOTOS]({ commit }, payload) {
    return testBizHttp.getPhotos(payload);
  },
};
                          </pre>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              action명은 상수값으로 따로 관리하고 export시켜준다.
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              각 업무별로 api를 api폴더에서 따로 관리하여 사용한다.
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
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  ...
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      ...
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
