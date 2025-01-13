import type { AxiosProgressEvent, AxiosResponse, GenericAbortSignal } from 'axios'
import service from './Axios'
import { APIHttpStatus, type APIResponse } from '@tsailab/core-types'
import { useUserStore } from '@/stores'

export interface HttpOptions {
  url: string
  data?: any
  method?: string
  headers?: any
  parseResult?: boolean
  onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void
  signal?: GenericAbortSignal
  beforeRequest?: () => void
  afterRequest?: () => void
}
export class HttpRequest {
  static requst<T = any>({
    url,
    data,
    method,
    headers,
    onDownloadProgress,
    signal,
    beforeRequest,
    afterRequest,
  }: HttpOptions) {
    const successHandler = (res: AxiosResponse<APIResponse<T>>) => {
      if (res.data?.code === undefined && res.data) {
        return res.data as any as T
      }
      const { code, result } = res.data

      if (code === APIHttpStatus.OK || code === APIHttpStatus.SUCCESS) {
        return result as T
      }

      const userStore = useUserStore()
      if (code === APIHttpStatus.UNAUTHORIZED) {
        userStore.removeToken()
        userStore.resetUserInfo()
        // dialog redirect
      }

      // can toast message
      return Promise.reject(res.data)
    }

    const failHandler = (error: any) => {
      afterRequest?.()
      if (error.response) {
        // 请求成功但状态码不在 2xx 范围

        return Promise.reject({
          code: error.response?.status,
          message: error.response?.statusText ?? '未知错误',
        })
      } else if (error.request) {
        // 请求发出但没有收到响应
        globalThis.console.warn(error.request)
        return Promise.reject(error?.message ?? '未知错误')
      } else {
        // 在设置请求时发生了错误
        return Promise.reject(error?.message ?? '未知错误')
      }
    }

    beforeRequest?.()
    method = method || 'GET'
    const params = Object.assign(typeof data === 'function' ? data() : (data ?? {}), {})
    if (method.toUpperCase() === 'GET') {
      return service
        .get(url, { params, signal, onDownloadProgress })
        .then(successHandler, failHandler)
    } else if (method.toUpperCase() === 'PUT') {
      return service
        .put(url, params, { headers, signal, onDownloadProgress })
        .then(successHandler, failHandler)
    } else {
      return service
        .post(url, params, { headers, signal, onDownloadProgress })
        .then(successHandler, failHandler)
    }
  }

  static get<T = any>(apiPath: string, data?: any, options?: HttpOptions) {
    return this.requst<T>({ ...options, url: apiPath, method: 'GET', data })
  }

  static post<T = any>(apiPath: string, data?: any, options?: HttpOptions) {
    return this.requst<T>({ ...options, url: apiPath, method: 'POST', data })
  }
}
