import type { App, Component } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/less'
import 'swiper/less/pagination'

const plugins: { [name: string]: Component } = {
  swiper: Swiper,
  'swiper-slide': SwiperSlide,
}

const swiper = {
  install: function (app: App<Element>) {
    Object.keys(plugins).forEach((key: string) => {
      app.component(key, plugins[key])
    })
  },
}

export function setupSwiper(app: App) {
  app.use(swiper)
}
