import Vue from 'vue';
import Vuex from 'vuex';
import fakeData from '@/data/fakeData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fakeData,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getFakeData(state) {
      return state.fakeData;
    },
  },
});
