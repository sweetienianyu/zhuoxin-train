import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'hash', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: () => import('@/views/todo')
    },
    {
      path: '/functional',
      component: () => import('@/views/functional')
    },
    {
      path: '/proxy',
      component: () => import('@/views/subPub')
    }
  ]
})