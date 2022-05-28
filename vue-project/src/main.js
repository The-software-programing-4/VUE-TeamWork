import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
axios.defaults.withCredentials = true;
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://39.105.102.182:8080/'
Vue.prototype.$hostURL = 'http://localhost:8080'
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
