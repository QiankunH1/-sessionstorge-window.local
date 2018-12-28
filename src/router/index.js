import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home'
import login from '@/views/login'
import push from '@/views/push'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/push',
      name: 'push',
      component: push
    },
  ]
})
