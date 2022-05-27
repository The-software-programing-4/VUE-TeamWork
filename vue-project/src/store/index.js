import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Guid: null,
    MvSeRe:'1234',
    MSing:0
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
