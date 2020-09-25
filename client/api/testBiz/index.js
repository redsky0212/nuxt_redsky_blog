import http from '@/service/http';
// 각 업무별 url을 따로 분리해서 관리
import URL from '@/api/testBiz/url';

export default {
  getNews(testParam) {
    return http.get(URL.NEWS, { params: testParam });
  },
};
