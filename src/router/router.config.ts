import { RouteRecordRaw } from 'vue-router'
import Layout from '@/views/layouts/index.vue'

export const constantRouterMap: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '导航一',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "tabbar" */ '@/views/tabBar/home/index.vue'),
        meta: { title: '首页', keepAlive: false, showTab: true, showFooter: true }
      }
    ]
  },
  {
    path: '/user',
    name: '导航二',
    component: Layout,
    redirect: '/user',
    children: [
      {
        path: '/user',
        name: 'User',
        component: () => import(/* webpackChunkName: "tabbar" */ '@/views/tabBar/user/index.vue'),
        meta: { title: '个人中心', keepAlive: false, showTab: true, showFooter: true }
      }
    ]
  },
  {
    path: '/warning',
    name: 'Warning',
    component: () => import('@/views/error-page/warning.vue'),
    meta: { title: '警告', keepAlive: false, showTab: false }
  }
  // {
  //   path: '/:catchAll(.*)',
  //   name: '404',
  //   component: () => import('@/views/error-page/404.vue'),
  //   meta: { title: '404', keepAlive: false, showTab: false }
  // }
]
