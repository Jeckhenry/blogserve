import Vue from 'vue'
import Router from 'vue-router'
import article from './views/article.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'article',
      component: article
    },
    {
      path: '/label',
      name: 'label',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/label.vue')
    },
      {
          path: '/search',
          name: 'search',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/search.vue')
      }
  ]
})
