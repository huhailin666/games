import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false;

var Toast = require('./lib/Toast/Toast.js').Toast;

// import {Button,Toast} from 'mint-ui'
// Vue.component(Toast.name,Toast);
// Vue.component(Button.name, Button);
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
import './lib/animate/animate.css'
import './lib/common/common.css'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
