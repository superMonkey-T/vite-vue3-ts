import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Index.vue')
    }, {
      path: '/user',
      name: 'user',
      component: () => import('../views/User.vue')
    }
  ]
})
