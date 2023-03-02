import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../pages/List.vue')
  },
  {
    path: '/add',
    name: 'AddList',
    component: () => import('../pages/Addlist.vue')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../pages/Help.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../pages/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router