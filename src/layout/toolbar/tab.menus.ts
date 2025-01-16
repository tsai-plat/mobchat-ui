import { UIPageEnum } from '@/enums'
import { type RouteLocationRaw } from 'vue-router'

export type TabBarMenu = {
  title: string
  icon?: string
  iconify?: string
  active?: boolean
  hidden?: boolean
  to: RouteLocationRaw & { name: string }
  isMiddle?: boolean
  badge?: string | number
}

const homeMenu: TabBarMenu = {
  title: 'AI助手',
  to: {
    name: UIPageEnum.BASE_HOME_NAME,
  },
  // icon: 'chat-o',
  iconify: 'gg:bot',
}

const discoverMenu: TabBarMenu = {
  title: '探索',
  to: {
    name: UIPageEnum.DISCOVER_NAME,
  },
  // icon: 'user-circle-o',
  iconify: 'streamline:ai-science-spark',
}

const creationMenu: TabBarMenu = {
  title: '创作',
  to: {
    name: UIPageEnum.CREATION_NAME,
  },
  // icon: 'user-circle-o',
  iconify: 'mdi:creation-outline',
}

const settingMenu: TabBarMenu = {
  title: '我的',
  to: {
    name: UIPageEnum.USER_CENTER_NAME,
  },
  // icon: 'user-circle-o',
  iconify: 'fluent:bot-sparkle-32-regular',
}

export const allMenus: TabBarMenu[] = [homeMenu, discoverMenu, creationMenu, settingMenu].filter(
  (it) => !it.hidden,
)
