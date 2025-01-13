import { CLIENT_UUID } from '@/stores/mutation-types'
import { RandomHelper, storage } from '@/utils'
import { isWechat } from '@/utils/runtimes'
import { ClientTypeEnum } from '@tsailab/core-types'

interface UseGlobalSetting {
  glob: GlobalSetting
  buildCaptchaUrl: () => string
}

export const useGlobalSetting = (): UseGlobalSetting => {
  let cliid: string = storage.get(CLIENT_UUID)
  if (!cliid?.length) {
    cliid = RandomHelper.clientUUID(
      isWechat ? ClientTypeEnum.mobileWxChat : ClientTypeEnum.mobileChat,
    )
    storage.set(CLIENT_UUID, cliid, null)
  }

  let apiPrifix = import.meta.env.VITE_GLOB_API_URL
  if (apiPrifix?.length && !apiPrifix.startsWith('/')) {
    apiPrifix = `/${apiPrifix}`
  }
  if (apiPrifix && apiPrifix.endsWith('/')) {
    apiPrifix = apiPrifix.slice(0, apiPrifix.length - 1)
  }
  const glob: Readonly<GlobalSetting> = {
    apiPrifix: apiPrifix ?? undefined,
    isWechat: isWechat,
    appinfo: {
      ...window.__APP_INFO__,
      appName: import.meta.env.VITE_GLOB_APP_NAME,
    },
  }

  const buildCaptchaUrl = () => {
    const url = glob.apiPrifix?.length
      ? `${glob.apiPrifix}/v1/auth/captcha?cli=${cliid}&t=${Date.now()}`
      : `/v1/auth/captcha?cli=${cliid}&t=${Date.now()}`
    globalThis.console.log(url)
    return url
  }

  return {
    glob,
    buildCaptchaUrl,
  }
}
