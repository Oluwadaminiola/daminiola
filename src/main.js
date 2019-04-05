// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Jquery from 'jquery'

Vue.use(Jquery);
Vue.config.productionTip = false

require('@/assets/js/jquery.min.js');
// require('@/assets/js/bootstrap.js');
require('@/assets/js/aos.js');
require('@/assets/css/bootstrap.css');
require('@/assets/css/aos.css');
require('@/assets/css/style.css');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
