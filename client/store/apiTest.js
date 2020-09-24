import axios from 'axios';

// create an axios instance with default options
const http = axios.create({ baseURL: 'https://api.Hnpwa.com/v0' });

export default {
  getCompanyDetails(tradeKey) {
    // then return the promise of the axios instance
    return http.get(`companies/show/${tradeKey}`).catch((e) => {
      // catch errors here if you want
      console.log(e);
    });
  },
  anotherEndpoint() {
    return http.get('other/endpoint');
  },
};
