import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/label',
      name: 'label',
      component: () => import('./views/label.vue')
    },
    {
        path: '/search',
        name: 'search',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/search.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('./views/edit.vue')
    },
    {
      path: '/articleInfo',
      name: 'articleInfo',
      component: () => import('./views/articleInfo.vue')
    },
  ]
})
