type AppInfo = {
  appName: string
  version: string
  author?: string
  hash: string
  buildAt: string
  cliid: string
  company?: string
  approvals?: Array<Approval>
}

type Approval = {
  no: string
  link?: string
  label?: string
}

type GlobalSetting = {
  appinfo: AppInfo
  apiPrifix?: string
  [k: string]: any
}
