import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'
import notfound from './views/notfound.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register.vue'),
    },
    {
      path: '*',
      component: notfound,
      meta: {
          title: '404未找到',
      }
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('./views/main.vue'),
      redirect: "/main/home",
      children: [
        {
          path: 'label',
          name: 'label',
          component: () => import('./views/label.vue')
        },
        {
            path: 'search',
            name: 'search',
            component: () => import(/* webpackChunkName: "about" */ './views/search.vue')
        },
        {
          path: 'edit',
          name: 'edit',
          component: () => import('./views/edit.vue')
        },
        {
          path: 'home',
          name: 'home',
          component: () => import('./views/home.vue')
        }
      ]
    },
  ]
})
