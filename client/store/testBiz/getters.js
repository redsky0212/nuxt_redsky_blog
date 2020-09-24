export const NEWS_LIST = 'getNewsData';
export const TEST_LIST = 'getTestList';

export default {
  [NEWS_LIST]: (state) => {
    return state.newsData;
  },
  [TEST_LIST]: (state) => {
    return state.itemData;
  },
};
