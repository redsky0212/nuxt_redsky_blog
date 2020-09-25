import axios from 'axios';
import store from '@/store';

/**
 * Create a new Axios client instance
 * @see http://localhost:3000
 */
const getHttp = (baseUrl = null) => {
  const options = {
    baseURL: process.env.restApiUrl || baseUrl,
    timeout: 10000, // 1000ms가 1초
    headers: { 'Content-Type': 'application/json' },
  };

  // 인증 관련 작업시 필요할 수도...
  // if (store.getters['users/isAuthenticated']) {
  //   options.headers = {
  //     Authorization: `Bearer ${store.getters['users/accessToken']}`,
  //   };
  // }

  const http = axios.create(options);

  // Add a request interceptor
  http.interceptors.request.use(
    (requestConfig) => {
      console.log(`http request interceptor : ${requestConfig}`);
      return requestConfig;
    },
    (requestError) => {
      // 에러 트래킹을 위한 모듈 사용
      // Raven.captureException(requestError);
      return Promise.reject(requestError);
    }
  );

  // Add a response interceptor
  http.interceptors.response.use(
    (response) => {
      console.log(`http response interceptor : ${response}`);
      return response;
    },
    (error) => {
      if (error.response.status >= 500) {
        // 에러 트래킹을 위한 모듈 사용
        // Raven.captureException(error);
      }
      return Promise.reject(error);
    }
  );

  return http;
};

class ApiClient {
  constructor(baseUrl = null) {
    this.client = getHttp(baseUrl);
  }

  get(url, conf = {}) {
    return this.client
      .get(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  delete(url, conf = {}) {
    return this.client
      .delete(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  head(url, conf = {}) {
    return this.client
      .head(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  options(url, conf = {}) {
    return this.client
      .options(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  post(url, data = {}, conf = {}) {
    return this.client
      .post(url, data, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  put(url, data = {}, conf = {}) {
    return this.client
      .put(url, data, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  patch(url, data = {}, conf = {}) {
    return this.client
      .patch(url, data, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }
}

export { ApiClient };

/**
 * Base HTTP Client
 */
export default {
  // Provide request methods with the default base_url
  get(url, conf = {}) {
    return getHttp()
      .get(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },

  delete(url, conf = {}) {
    return getHttp()
      .delete(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },

  head(url, conf = {}) {
    return getHttp()
      .head(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },

  options(url, conf = {}) {
    return getHttp()
      .options(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },

  post(url, data = {}, conf = {}) {
    return getHttp()
      .post(url, data, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },

  put(url, data = {}, conf = {}) {
    return getHttp()
      .put(url, data, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },

  patch(url, data = {}, conf = {}) {
    return getHttp()
      .patch(url, data, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },
};
