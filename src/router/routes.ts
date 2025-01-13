import { UIPageEnum } from '@/enums'
import type { RouteRecordRaw } from 'vue-router'
import HomeIndex from '@/pages/home/HomeIndex.vue'

const routeModuleList: RouteRecordRaw[] = [
  {
    path: '/index',
    name: 'HomeIndex',
    component: HomeIndex,
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

export const SigninRoute: RouteRecordRaw = {
  path: '/signin',
  name: 'Signin',
  component: () => import('@/pages/auth/Signin.vue'),
  meta: {
    title: '注册用户',
  },
}

export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: UIPageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
}

export const routes: RouteRecordRaw[] = [LoginRoute, SigninRoute, RootRoute, ...routeModuleList]
