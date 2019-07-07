import Vue from 'vue'

import Router from 'vue-router'
import mine from './components/mine/Mine.vue'
import card from './components/card/Card.vue'
//import test from './components/mine/test.vue'
import home from './components/Home.vue'

Vue.use(Router)

// 3. 创建路由对象
var router = new Router({
  routes: [
    { path: '/', redirect: 'home' },
    {

      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/card',
      name: 'card',
      component: card
    }
  ]
})

// 把路由对象暴露出去
export default router