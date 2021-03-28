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
  getMonthlyRecap() {
    return http.get('/monthlyRecap');
  }
}

export default new SpotifyService();
