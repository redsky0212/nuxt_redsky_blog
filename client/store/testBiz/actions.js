export default {
  async fetchNews({ commit }) {
    // const newsData = await AxiosService.instance.get('/news/1.json');
    // commit('newsList', newsData.data);
  },
  getNews({ commit }) {
    return this.$axios
      .$get('/news/1.json')
      .then((data) => {
        commit('newsList', data);
      })
      .catch((ex) => {
        console.log(ex);
      });
  },
};
