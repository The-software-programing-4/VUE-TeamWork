import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uid: 1,
    username:"未登陆000",
    Login:false,
  },
  getters: {
  },
  mutations: {
    setMessage(state, uid,username,Login) {
      state.uid = uid;
      state.username=username;
      state.Login=Login;
    },
    setLogin(state, log)
    {
      state.Login=log;
    }
  },
  actions: {
  },
  modules: {
  }
})
