import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://39.105.102.182:8080/';
Vue.prototype.$hostURL = 'http://39.105.102.182:8080';
// axios.defaults.baseURL = 'http://127.0.0.1:8080/';
// Vue.prototype.$hostURL = 'http://127.0.0.1:8080';
<<<<<<< HEAD
axios.defaults.withCredentials = true
=======
axios.defaults.withCredentials=true
>>>>>>> 33e9ee3a87241f0445e8602d3edbf4413da45f78

Vue.config.productionTip = true;
Vue.use(ElementUI);
Vue.config.debug = true;




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
