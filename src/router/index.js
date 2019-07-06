import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: {
          title: 'Home',
          icon: 'home'
        }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/forum',
    component: Layout,
    redirect: '/forum/index',
    name: 'Forum',
    meta: {
      title: 'Forum',
      icon: 'forum'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/forum/index'),
        name: 'TopicList',
        meta: {
          title: 'Topic List',
          icon: 'list'
        }
      },
      {
        path: 'create',
        component: () => import('@/views/forum/components/CreateTopic'),
        name: 'CreateTopic',
        meta: {
          title: 'Create Topic',
          icon: 'edit'
        }
      },
      {
        path: 'edit/:id', // 这里需要进行修改 考虑动态绑定值进行文章编辑
        name: 'EditTopic',
        component: () => import('@/views/forum/components/Edit'),
        hidden: true,
        meta: {
          title: 'Edit Topic',
          noCache: true,
          activeMenu: '/forum/index'
        }
      },
      {
        path: ':topicId',
        name: 'TopicDetails',
        component: () => import('@/views/forum/components/TopicDetails'),
        hidden: true,
        meta: {
          title: 'TopicDetails'
        }
      }
    ]
  },
  {
    path: '/torrent',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Torrent',
        component: () => import('@/views/torrent/index'),
        meta: {
          title: 'Torrent',
          icon: 'torrent'
        }
      }
    ]
  },
  {
    path: '/subtitle',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Subtitle',
        component: () => import('@/views/home/index'),
        meta: {
          title: 'Subtitle',
          icon: 'subtitle'
        }
      }
    ]
  },
  {
    path: '/market',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Market',
        component: () => import('@/views/home/index'),
        meta: {
          title: 'Market',
          icon: 'market'
        }
      }
    ]
  },
  {
    path: '/game',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Game',
        component: () => import('@/views/home/index'),
        meta: {
          title: 'Game',
          icon: 'game'
        }
      }
    ]
  },
  {
    path: '/faq',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'FAQ',
        component: () => import('@/views/home/index'),
        meta: {
          title: 'FAQ',
          icon: 'faq'
        }
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'About',
        component: () => import('@/views/home/index'),
        meta: {
          title: 'About',
          icon: 'about'
        }
      }
    ]
  },

  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/meter',
    name: 'Dashboard',
    meta: {
      title: 'Dashboard',
      icon: 'dashboard',
      roles: ['admin']
    },
    children: [
      {
        path: 'meter',
        name: 'Meter',
        component: () => import('@/views/home/index'),
        meta: {
          title: 'Meter',
          icon: 'meter'
        }
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/home/index'),
        meta: {
          title: 'User',
          icon: 'user'
        }
      },
      {
        path: 'torrent',
        name: 'Dashboard-Torrent',
        component: () => import('@/views/home/index'),
        meta: {
          title: 'Torrent',
          icon: 'torrent'
        }
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import('@/views/home/index'),
        meta: {
          title: 'Setting',
          icon: 'setting'
        }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
