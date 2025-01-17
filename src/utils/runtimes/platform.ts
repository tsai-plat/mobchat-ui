export type PlatformEnv = {
  ua?: string
  isMobile?: boolean
  isIOS?: boolean
  isWechat?: boolean
  clientType?: ClientPlatformEnum
  platform?: string
  isMiniprogram?: boolean
}
export enum ClientPlatformEnum {
  IOS_WECHAT,
  ANDROID_WECHAT,
  MOBILE_WEB,
  PC_WEB,
  IOS,
  ANDROID,
}
export const clientPlatformEnv = ((): PlatformEnv => {
  const env: PlatformEnv = {
    ua: navigator?.userAgent,
  }
  if (!navigator.userAgent) return {}
  const ua = navigator.userAgent

  if (/(iPhone|iPad|iPod|iOS)/i.test(ua)) {
    env.isIOS = true
    env.isMobile = true
  } else if (/(Android)/i.test(ua)) {
    env.isMobile = true
  }

  if (env.isMobile) {
    if (/Micromessenger/i.test(ua)) {
      env.isWechat = true
      env.clientType = env.isIOS ? ClientPlatformEnum.IOS_WECHAT : ClientPlatformEnum.ANDROID_WECHAT
      if (/miniprogram/i.test(ua)) {
        env.isMiniprogram = true
      }
    } else {
      env.clientType = /(iPhone|iPad|iPod|iOS)/i.test(ua)
        ? ClientPlatformEnum.IOS
        : ClientPlatformEnum.ANDROID
    }
  } else {
    env.clientType = ClientPlatformEnum.PC_WEB
  }

  return env
})()
