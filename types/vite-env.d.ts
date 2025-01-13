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
  /** global */
  VITE_GLOB_APP_NAME: string
  VITE_GLOB_API_URL: string
  VITE_GLOB_IMG_URL: string
  VITE_APP_HASH?: string
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
