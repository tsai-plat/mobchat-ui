import { clientPlatformEnv, type PlatformEnv } from '@/utils/runtimes'

interface UseApp {
  appinfo: AppInfo & { approvals?: Array<Approval>; company?: string }
  runtimeInfo: PlatformEnv
  isIOSWechat: boolean
}

export function useApp(): UseApp {
  const appinfo = Object.freeze({
    ...window.__APP_INFO__,
    company: import.meta.env.VITE_GLOB_ISSUER,
    approvals: [
      {
        label: 'ICP',
        no: '京ICP备2021034550号-2',
        link: '',
      },
      {
        label: '电信业务经营许可',
        no: '京B2-20230723',
        link: '',
      },
    ],
  })

  const runtimeInfo = Object.freeze(clientPlatformEnv)

  return {
    appinfo,
    runtimeInfo,
    isIOSWechat: Boolean(runtimeInfo.isIOS && runtimeInfo.isWechat),
  }
}
