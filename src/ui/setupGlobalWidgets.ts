import type { App } from 'vue'

import { Dialog, Popup, Toast, ConfigProvider, Radio } from 'vant'
import SvgIcon from './icons/SvgIcon.vue'
import LotoIcon from './icons/LotoIconify.vue'

export function setupGlobalWidgets(app: App) {
  app.use(ConfigProvider)
  app.use(Dialog)
  app.use(Popup)
  app.use(Toast)
  app.use(Radio)

  app.component('svg-icon', SvgIcon)
  app.component('loto-icon', LotoIcon)
}
