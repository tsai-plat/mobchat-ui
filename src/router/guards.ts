import { clientPlatformEnv } from '@/utils/runtimes'
import type { Router } from 'vue-router'

export function createRouterGuards(router: Router) {
  router.beforeEach(async (_to, _from, next) => {
    if (clientPlatformEnv.isIOS && clientPlatformEnv.isWechat) {
      window.history.replaceState(null, '', window.location.href)
    }

    next()
  })
}
