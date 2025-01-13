import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'

// import vueDevTools from 'vite-plugin-vue-devtools'
import { createProxy, setupVitePlugins } from './build/vite'
import { wrapperEnv } from './build/vite/wrapper.env'
import { resolve } from 'node:path'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'
  const env = loadEnv(mode, process.cwd())

  const viteEnvs = wrapperEnv(env as ImportMetaEnv)

  return {
    // base: process.env.VITE_PUBLIC_PATH,
    css: {
      modules: {
        // 一般我们通过 generateScopedName 属性来对生成的类名进行自定义
        // 其中 name 表示当前文件名，local 表示类名
        // generateScopedName: "[name]__[local]__[hash:base64:5]"
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "${resolve(__dirname, 'src/styles/variables.less')}";`,
        },
      },
    },

    define: {
      __APP_INFO__: JSON.stringify(viteEnvs.__APP_INFO__),
    },
    esbuild: {},
    plugins: setupVitePlugins(viteEnvs, isBuild),
    resolve: {
      extensions: ['.js', '.json', '.ts', '.mjs'],
      alias: [
        // '@': fileURLToPath(new URL('./src', import.meta.url)),
        {
          find: '@',
          replacement: pathResolve('src') + '/',
        },
        {
          find: /\/#\//,
          replacement: pathResolve('src/typings') + '/',
        },
      ],
      dedupe: ['vue'],
    },
    server: {
      host: '0.0.0.0',
      port: viteEnvs.VITE_PORT ?? 5179,
      proxy: createProxy(viteEnvs.VITE_PROXY),
    },
    build: {
      reportCompressedSize: false,
      sourcemap: false,
      commonjsOptions: {
        ignoreTryCatch: false,
      },
      chunkSizeWarningLimit: 2000,
    },
  }
}
