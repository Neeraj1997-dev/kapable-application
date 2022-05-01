export default {
  namespaced: true,
  state: {
    currentUser: false,
  },
  getters: {
    currentUser: (state) => state.currentUser,
  },
  mutations: {
    signIn(state, user) {
      state.currentUser = {
        id: user.id,
        name: user.name,
        type: user.type,
        status: user.status,
        username: user.username,
        email: user.email,
      };
      if (user.factories) {
        state.currentUser.factories = user.factories;
      }
    },
    setupUserMeta(state, meta) {
      state.currentUser.meta = meta;
    },
    setupCreditControl(state, credit) {
      state.currentUser.credit = credit;
    },
    signOut(state) {
      state.currentUser = false;
    },
  },
  actions: {
    signIn({ commit }, user) {
      commit('signIn', user);
    },
    setupUserMeta({ commit }, meta) {
      commit('setupUserMeta', meta);
    },
    setupCreditControl({ commit }, credit) {
      commit('setupCreditControl', credit);
    },
    async signOut({ commit }) {
      // const res = await fetch(`${apiURL}/sessions`, {
      //   method: 'DELETE',
      //   ...options,
      // });
      await commit('signOut');
      window.location.replace('/');
      // if (res.status === 200) {
      //   // this.$store.dispatch('user/signOut');
      //   await commit('signOut');
      //   window.location.replace('/');
      // }
    },
  },
};
