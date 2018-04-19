// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import router from './router'
import API from '../config/httpUrl'
import {fetch, post} from './axios'
import 'lib-flexible'



Vue.use(iView);
Vue.prototype.API = API;
Vue.prototype.$get = fetch;
Vue.prototype.$post = post;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
