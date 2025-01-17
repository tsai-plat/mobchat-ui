import { createRouter, createWebHistory } from 'vue-router'

import type { App } from 'vue'
import { routes } from './routes'
import { createRouterGuards } from './guards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app: App) {
  //
  createRouterGuards(router)
  app.use(router)
}

export default router
