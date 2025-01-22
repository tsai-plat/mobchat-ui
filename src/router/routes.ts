import { UIPageEnum } from '@/enums'
import type { RouteRecordRaw } from 'vue-router'
import HomeIndex from '@/pages/home/HomeIndex.vue'
import { ChatbotLayout, Layout } from './route.constant'

const routeLayoutList: RouteRecordRaw[] = [
  {
    path: '/index',
    name: UIPageEnum.BASE_HOME_NAME,
    component: HomeIndex,
    meta: {
      title: '智能助手',
    },
  },
  {
    path: UIPageEnum.DISCOVER,
    name: UIPageEnum.DISCOVER_NAME,
    component: () => import('@/pages/discover/DiscoverIndex.vue'),
    meta: {
      title: '发现',
    },
  },
  {
    path: UIPageEnum.CREATION,
    name: UIPageEnum.CREATION_NAME,
    component: () => import('@/pages/creation/CreationIndex.vue'),
    meta: {
      title: '创作心',
    },
  },
  {
    path: UIPageEnum.USER_CENTER,
    name: UIPageEnum.USER_CENTER_NAME,
    component: () => import('@/pages/mine/MyIndex.vue'),
    meta: {
      title: '个人中心',
    },
  },
]

export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/pages/auth/Login.vue'),
  meta: {
    title: 'Login',
  },
}

export const WechatLoginRoute: RouteRecordRaw = {
  path: UIPageEnum.WECHAT_AUTHORIZE,
  name: UIPageEnum.WECHAT_AUTHORIZE_NAME.toString(),
  component: () => import('@/pages/auth/WechatLogin.vue'),
  meta: {
    title: '微信授权登录',
  },
}

export const SigninRoute: RouteRecordRaw = {
  path: '/signin',
  name: 'Signin',
  component: () => import('@/pages/auth/Signin.vue'),
  meta: {
    title: '注册用户',
  },
}

export const LayoutRoute: RouteRecordRaw = {
  path: '/',
  name: 'RootLayout',
  component: Layout,
  redirect: UIPageEnum.BASE_HOME,
  children: [...routeLayoutList],
}

export const ChatLayoutRoute: RouteRecordRaw = {
  path: '/chat',
  name: 'ChatbotLayout',
  redirect: UIPageEnum.CHATBOT_ROOT,
  component: ChatbotLayout,
  children: [
    {
      path: '/chat/:chatid',
      name: UIPageEnum.CHATBOT_NAME,
      component: () => import('@/pages/chatbot/ChatPage.vue'),
      meta: {
        title: '智能助手',
        goback: '/index',
      },
    },
  ],
}

export const routes: RouteRecordRaw[] = [
  LayoutRoute,
  ChatLayoutRoute,
  LoginRoute,
  WechatLoginRoute,
  SigninRoute,
  { path: '/:pathMatch(.*)*', redirect: '/' },
]
