import http from '../http-common';

class NameService {
  // eslint-disable-next-line class-methods-use-this
  get() {
    return http.get('/');
  }
}

export default new NameService();
