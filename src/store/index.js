import Vue from 'vue';
import Vuex from 'vuex';
import SpotifyService from '@/services/SpotifyService'
import {
  TOP_100, WEEKLY_RADAR, MONTHLY_RECAP,
} from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    top100Data: [],
    isTop100Busy: true,
    weeklyRadarData: [],
    isWeeklyRadarBusy: true,
    monthlyRecapData: [],
    isMonthlyRecapBusy: true,
    tabNames: ['Top 100', 'Weekly Radar', 'Monthly Recap'],
  },
  mutations: {
    [TOP_100](state, n) {
      state.top100Data = n.top100Data
      state.isTop100Busy = false
    },
    [WEEKLY_RADAR](state, n) {
      state.weeklyRadarData = n.weeklyRadarData
      state.isWeeklyRadarBusy = false
    },
    [MONTHLY_RECAP](state, n) {
      state.monthlyRecapData = n.monthlyRecapData
      state.isMonthlyRecapBusy = false
    },
  },
  actions: {
    getTop100: async ({ commit }) => {
      const top100Data = await SpotifyService.getTop100()
        .then((response) => response.data.slice(0, 100))
        .catch((e) => {
          console.log(e)
        })
      commit(TOP_100, { top100Data })
    },
    getWeeklyRadar: async ({ commit }) => {
      const weeklyRadarData = await SpotifyService.getWeeklyRadar()
        .then((response) => response.data)
        .catch((e) => {
          console.log(e)
        })
      commit(WEEKLY_RADAR, { weeklyRadarData })
    },
    getMonthlyRecap: async ({ commit }) => {
      const monthlyRecapData = await SpotifyService.getMonthlyRecap()
        .then((response) => response.data)
        .catch((e) => {
          console.log(e)
        })
      commit(MONTHLY_RECAP, { monthlyRecapData })
    },
  },
  modules: {
  },
  getters: {
  },
});
