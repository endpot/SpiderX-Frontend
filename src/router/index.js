import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'Home',
    children: [{
      path: 'home',
      component: () => import('@/views/home/index'),
      meta: { title: 'Home', icon: 'home' }
    }]
  }
]

export const asyncRouterMap = [
  {
    path: '/forum',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Forum',
      component: () => import('@/views/home/index'),
      meta: { title: 'Forum', icon: 'forum' }
    }]
  },

  {
    path: '/torrent',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Torrent',
      component: () => import('@/views/home/index'),
      meta: { title: 'Torrent', icon: 'torrent' }
    }]
  },

  {
    path: '/subtitle',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Subtitle',
      component: () => import('@/views/home/index'),
      meta: { title: 'Subtitle', icon: 'subtitle' }
    }]
  },

  {
    path: '/market',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Market',
      component: () => import('@/views/home/index'),
      meta: { title: 'Market', icon: 'market' }
    }]
  },

  {
    path: '/game',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Game',
      component: () => import('@/views/home/index'),
      meta: { title: 'Game', icon: 'game' }
    }]
  },

  {
    path: '/faq',
    component: Layout,
    children: [{
      path: 'index',
      name: 'FAQ',
      component: () => import('@/views/home/index'),
      meta: { title: 'FAQ', icon: 'faq' }
    }]
  },

  {
    path: '/about',
    component: Layout,
    children: [{
      path: 'index',
      name: 'About',
      component: () => import('@/views/home/index'),
      meta: { title: 'About', icon: 'about' }
    }]
  },

  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/meter',
    name: 'Dashboard',
    meta: { title: 'Dashboard', icon: 'dashboard', roles: ['admin'] },
    children: [
      {
        path: 'meter',
        name: 'Meter',
        component: () => import('@/views/home/index'),
        meta: { title: 'Meter', icon: 'meter' }
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/home/index'),
        meta: { title: 'User', icon: 'user' }
      },
      {
        path: 'torrent',
        name: 'Torrent',
        component: () => import('@/views/home/index'),
        meta: { title: 'Torrent', icon: 'torrent' }
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import('@/views/home/index'),
        meta: { title: 'Setting', icon: 'setting' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
