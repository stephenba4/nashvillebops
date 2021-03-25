import http from '../http-common';

class SpotifyService {
  // eslint-disable-next-line class-methods-use-this
  getTop100() {
    return http.get('/top100');
  }

  // eslint-disable-next-line class-methods-use-this
  getWeeklyRadar() {
    return http.get('/weeklyRadar');
  }

  // eslint-disable-next-line class-methods-use-this
  getNextUp() {
    return http.get('/nextUp');
  }
}

export default new SpotifyService();
