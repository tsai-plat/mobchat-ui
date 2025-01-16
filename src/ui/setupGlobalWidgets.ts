import type { App } from 'vue'

import {
  Cell,
  CellGroup,
  Collapse,
  CollapseItem,
  ConfigProvider,
  Dialog,
  Popup,
  Toast,
  Radio,
} from 'vant'
import SvgIcon from './icons/SvgIcon.vue'
import LotoIcon from './icons/LotoIconify.vue'
import ChatListItem from './chat/ChatListItem.vue'
import { SearchBar } from '.'

export function setupGlobalWidgets(app: App) {
  app.use(Cell)
  app.use(CellGroup)
  app.use(Collapse)
  app.use(CollapseItem)
  app.use(ConfigProvider)
  app.use(Dialog)
  app.use(Popup)
  app.use(Toast)
  app.use(Radio)

  app.component('svg-icon', SvgIcon)
  app.component('loto-icon', LotoIcon)
  app.component('chat-list-item', ChatListItem)
  app.component('search-bar', SearchBar)
}
