import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Guid: 1,
  },
  getters: {
  },
  mutations: {
    setGuid(state, uid) {
      state.Guid = uid;
    }
  },
  actions: {
  },
  modules: {
  }
})
