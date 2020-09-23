export const SET_NEWS_LIST = 'newsList';

export default {
  [SET_NEWS_LIST](state, payload) {
    state.newsData = payload;
  },
};
