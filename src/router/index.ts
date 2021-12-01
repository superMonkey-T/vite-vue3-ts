import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    }, {
      path: '/user',
      name: 'user',
      component: () => import('../views/User.vue')
    }, {
      path: '/iframe',
      name: 'iframe',
      component: () => import('../views/Iframe.vue')
    }
  ]
})
