import * as mutations from './mutations';

export const GETNEWS = 'FETCH_NEWS';

export default {
  async fetchNews({ commit }) {
    // const newsData = await AxiosService.instance.get('/news/1.json');
    // commit('newsList', newsData.data);
  },
  [GETNEWS]({ commit }) {
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
    return this.$axios
      .$get('/news/1.json', {
        params: { aa: 'bb' },
      })
      .then((data) => {
        commit(mutations.SET_NEWS_LIST, data);
      })
      .catch((ex) => {
        console.log(ex);
      });
  },
};
