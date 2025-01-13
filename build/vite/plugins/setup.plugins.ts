import { PluginOption, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from '@vant/auto-import-resolver'
import { configCompressPlugin } from './compress'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'path'

export function setupVitePlugins(viteEnv: ImportMetaEnv, isBuild: boolean) {
  const { VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv
  const vitePlugins: (Plugin | Plugin[] | PluginOption[])[] = [
    /** Vue Required */
    vue(),
    vueJsx(),

    /* Vant auto import */
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),

    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ]

  if (isBuild) {
    const del: boolean =
      typeof VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE === 'string'
        ? VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE === 'true'
        : Boolean(VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE as boolean)
    vitePlugins.push(configCompressPlugin(VITE_BUILD_COMPRESS, del))
  }

  return vitePlugins
}
