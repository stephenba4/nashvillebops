import Vue from 'vue';
import Vuex from 'vuex';
import data from '@/data/data'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getData(state) {
      return state.data;
    },
  },
});
