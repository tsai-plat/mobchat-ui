import './styles/tailwind.css'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'

import { createApp } from 'vue'

import 'virtual:svg-icons-register'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './stores'
import { setupGlobalWidgets } from './ui/setupGlobalWidgets'
import { setupI18n } from './i18n'

async function bootstrap() {
  const app = createApp(App)
  // setup pinia store
  setupStore(app)

  setupI18n(app)
  setupGlobalWidgets(app)

  setupRouter(app)

  app.mount('#app')
}

void bootstrap()
