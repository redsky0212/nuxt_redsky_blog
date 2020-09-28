import testBizHttp from '@/api/testBiz';
import * as mutations from './mutations';

export const FETCH_NEWS_CON = 'FETCH_NEWS';
export const GET_PHOTOS = 'GET_PHOTOS';

export default {
  async fetchNews({ commit }) {
    // const newsData = await AxiosService.instance.get('/news/1.json');
    // commit('newsList', newsData.data);
  },
  [FETCH_NEWS_CON]({ commit }, payload) {
    // return this.$axios({
    //   method: 'get',
    //   url: '/news/1.json',
    //   headers: { 'Content-Type': 'text/plain' },
    //   params: { a: 'b' },
    // })
    //   .then((data) => {
    //     commit('newsList', data);
    //   })
    //   .catch((ex) => {
    //     console.log(ex);
    //   });

    // 여기서 바로 this.$axios를 사용하는 방법
    // return this.$axios
    //   .$get('/news/1.json', {
    //     params: { aa: 'bb' },
    //   })
    //   .then((data) => {
    //     commit(mutations.SET_NEWS_LIST, data);
    //   })
    //   .catch((ex) => {
    //     console.log(ex);
    //   });

    // http모듈 기본 사용 방법
    // return http
    //   .get('/news/1.json', { params: { aa: 'bb' } })
    //   .then((data) => {
    //     commit(mutations.SET_NEWS_LIST, data.data);
    //   })
    //   .catch((ex) => {
    //     console.log(ex);
    //   });
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
