type AppInfo = {
  appName: string
  version: string
  author?: string
  hash: string
  buildAt: string
  cliid: string
}

type GlobalSetting = {
  appinfo: AppInfo
  apiPrifix?: string
  [k: string]: any
}
