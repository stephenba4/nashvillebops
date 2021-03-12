import Vue from 'vue';
import Vuex from 'vuex';
import artistData from '@/data/artistData'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    artistData,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getArtistData(state) {
      return state.artistData;
    },
    getTodoById: (state) => (id) => state.todos.find((todo) => todo.id === id),
    getSingleArtistData: (state) => (artistId) => state.artistData.find((artist) => artist.id === artistId),
  },
});
