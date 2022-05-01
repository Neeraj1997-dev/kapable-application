import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: null,
  },
  mutations: {
    drawerAction(state, value) {
      state.drawer = value;
    },
  },
  actions: {
    drawerAction({ commit }, value) {
      commit('drawerAction', value);
    },
  },
  modules: {
    user,
  },
});
