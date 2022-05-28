import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Guid: null,
  },
  getters: {
  },
  mutations: {
    setGuid(state,uid){
      state.Guid=uid;
    }
  },
  actions: {
  },
  modules: {
  }
})
