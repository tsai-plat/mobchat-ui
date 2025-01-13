import { useUserStore } from '@/stores'
import { generateRequestId } from '@/utils/ids'
import { isDevMode } from '@/utils/runtimes'
import { LotoHeaderEnum } from '@tsailab/core-types'
import axios, { HttpStatusCode } from 'axios'
import { showDialog } from 'vant'

const service = axios.create({
  baseURL: import.meta.env.VITE_GLOB_API_URL,
  withCredentials: true,
  timeout: 5000,
})

service.interceptors.request.use(
  (config) => {
    if (isDevMode()) {
      const { url, baseURL } = config
      globalThis.console.log(`Tsai client Fetch: ${url}`, baseURL)
    }

    const { token, cliid } = useUserStore()
    if (!config.headers[LotoHeaderEnum.X_Loto_Reqid])
      config.headers[LotoHeaderEnum.X_Loto_Reqid] = generateRequestId()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    if (cliid?.length) {
      config.headers[LotoHeaderEnum.X_Loto_Key] = cliid
    }

    return config
  },
  (error) => Promise.reject(error),
)

service.interceptors.response.use(
  (response) => {
    globalThis.console.log(`Tsai client Fetch response: `, response)
    return response
  },
  (error: any) => {
    if (error.response && error.response?.status === HttpStatusCode.Unauthorized) {
      const { removeToken, resetUserInfo } = useUserStore()
      removeToken()
      resetUserInfo()

      if (isDevMode()) {
        globalThis.console.warn(`No authorize,maybe in feurther rediect to login`)
        showDialog({
          title: '请重新登录',
        })
      }
      // redirect login
    }

    return Promise.reject(error)
  },
)

export default service
