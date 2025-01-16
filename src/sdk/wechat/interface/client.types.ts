export type WechatAuthScope = 'snsapi_base' | 'snsapi_userinfo'

export type WechatAuthingClientOption = {
  appid?: string
  verbose?: boolean
  scope?: WechatAuthScope
  redirectUrl?: string
  slientRedirect?: string
}
