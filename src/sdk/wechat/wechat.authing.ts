import { setQueryParam } from '@tsailab/core-types'
import type { WechatAuthingClientOption, WechatAuthScope } from './interface/client.types'

interface Cache {
  state: string
  url: string
}
/**
 * web authing 流程
 * 1. 先静默获取code 到后台验证openid 是否注册，注册直接登录
 *  否则通知前端发起强制授权 code
 * 2. 再发送后端 注册
 */
export class WechatAuthingClient {
  private readonly openaiBase = 'https://open.weixin.qq.com'
  private verbose: boolean = false

  private cache?: Cache
  private options: WechatAuthingClientOption = {
    appid: import.meta.env.VITE_WECHAT_GH_APPID,
    scope: 'snsapi_base',
    redirectUrl: import.meta.env.VITE_WECHAT_AUTH_REDIRECT_URL,
    slientRedirect: import.meta.env.VITE_WECHAT_AUTH_SLENT_URL,
  }

  get prevousState() {
    return this.cache?.state
  }

  getOptions() {
    return this.options
  }

  clearCache() {
    this.cache = undefined
  }

  constructor(opts: WechatAuthingClientOption = { verbose: false }) {
    const { verbose, scope, redirectUrl } = opts
    this.verbose = !!verbose

    if (scope) {
      this.options.scope = scope
    }
    if (redirectUrl) {
      this.options.redirectUrl = redirectUrl
    }

    if (verbose) {
      globalThis.console.log('wechat authing options: \n', JSON.stringify(this.options))
    }
  }

  get wechatAuthorBase(): string {
    return `${this.openaiBase}/connect/oauth2/authorize`
  }

  /**
   *
   * when env config undefined will use window.location.origin
   * @returns encodeURIComponent url
   */
  get encodeRedirectUrl(): string {
    let url = this.options.redirectUrl
    if (!url?.length) {
      url = window.location.origin
      if (this.verbose) {
        globalThis.console.warn(`Use location.origin as redirect url. ${window.location.origin}`)
      }
    }

    url = setQueryParam(url, 'forcepopup', 0)

    return encodeURIComponent(url)
  }

  /**
   * redirect url search params will add forcepopup=1
   * @returns encodeURIComponent url
   */
  get forceEncodeRedirectUrl(): string {
    let url = this.options.redirectUrl
    if (!url?.length) {
      url = window.location.origin
      if (this.verbose) {
        globalThis.console.warn(`Use ${url} as slient redirect url.`)
      }
    }

    url = setQueryParam(url, 'forcepopup', 1)

    return encodeURIComponent(url)
  }

  /**
   * @see https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html
   *  https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx520c15f417810387&
   *  redirect_uri=https%3A%2F%2Fchong.qq.com%2Fphp%2Findex.php%3Fd%3D%26c%3DwxAdapter%26m%3DmobileDeal%26showwxpaytitle%3D1%26vb2ctag%3D4_2030_5_1194_60
   *  &response_type=code&scope=snsapi_base&state=123#wechat_redirect
   * @param forcePopup boolean
   * @returns url
   */
  buildAuthorizeUrl(forcePopup?: boolean, state?: string): string {
    if (!this.options.appid?.length)
      throw new Error(`Bootstrap WechatClient miss appid configuration.`)

    if (!state?.length) {
      state = this.generateState()
    }

    const scope: WechatAuthScope = forcePopup
      ? 'snsapi_userinfo'
      : (this.options.scope ?? 'snsapi_base')

    const redirectUrl = forcePopup ? this.forceEncodeRedirectUrl : this.encodeRedirectUrl
    let url = `${this.wechatAuthorBase}?appid=${this.options.appid}&redirect_uri=${redirectUrl}&response_type=code&scope=${scope}&state=${state}`
    if (forcePopup) {
      url = url + `t&forcePopup=true`
    }
    url = url + '#wechat_redirect'

    this.cache = {
      url,
      state,
    }
    return url
  }

  /**
   *
   * @returns
   */
  buildSlientAuthorizeUrl(state?: string): string {
    if (!this.options.appid?.length)
      throw new Error(`Bootstrap WechatClient miss appid configuration.`)

    if (!state?.length) {
      state = this.generateState()
    }
    const scope = 'snsapi_base'

    const redirectUrl = this.encodeRedirectUrl
    const url = `${this.wechatAuthorBase}?appid=${this.options.appid}&redirect_uri=${redirectUrl}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`
    this.cache = {
      url,
      state,
    }
    return url
  }

  /**
   * random state
   * @returns string
   */
  generateState(): string {
    const multipliter = Math.ceil(Math.random() * 10)
    const randomA = (Math.random() * 36 ** 1) | 0
    const randomB = (Math.random() * 36 ** 2) | 0

    const timestr = (Date.now() * multipliter).toString(36)
    const state = `${randomA.toString(36).toUpperCase()}${timestr}${randomB.toString(36)}`
    return state
  }
}
