import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false

import {Button,Toast} from 'mint-ui'
Vue.component(Toast.name,Toast);
Vue.component(Button.name, Button);

import './lib/animate/animate.css'


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})