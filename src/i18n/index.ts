import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { messages } from './locales'

export const lang = 'zhCN'

export const i18n = createI18n({
  locale: lang,
  globalInjection: true,
  messages,
})

export function setupI18n(app: App) {
  app.use(i18n)
}
