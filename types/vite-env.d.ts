/* eslint-disable @typescript-eslint/no-empty-object-type */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_PORT: number
  VITE_PROXY: [string, string][]

  VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean

  VITE_APP_HASH?: string
  /** global */
  VITE_GLOB_APP_NAME: string
  VITE_GLOB_API_URL: string
  VITE_GLOB_IMG_URL: string
  VITE_GLOB_ISSUER?: string

  /** wechat */
  VITE_WECHAT_GH_APPID: string
  VITE_WECHAT_AUTH_REDIRECT_URL: string
  VITE_WECHAT_AUTH_SLENT_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface WrapperEnv extends ImportMetaEnv {
  __APP_INFO__: {
    appName: string
    version: string
    author?: string
    hash: string
    buildAt: string
  }
}

declare module 'swiper/vue' {
  import _Vue from 'vue'
  export class Swiper extends _Vue {}
  export class SwiperSlide extends _Vue {}
}
