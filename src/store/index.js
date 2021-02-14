import Vue from 'vue';
import Vuex from 'vuex';
import monthlyListenerData from '@/data/monthlyListenerData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    monthlyListenerFields: monthlyListenerData.fields,
    monthlyListenerItems: monthlyListenerData.items,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getMonthlyListenerFields(state) {
      return state.monthlyListenerFields;
    },
    getMonthlyListenerItems(state) {
      return state.monthlyListenerItems;
    },
  },
});
