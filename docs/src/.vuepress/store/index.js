import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLight: false,
  },
  mutations: {
    toggleLightMode(state) {
      state.isLight = !state.isLight;
    },
  },
});
