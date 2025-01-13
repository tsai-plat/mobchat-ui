export {}

declare global {
  type Recordable<T = any> = Record<string, T>

  interface Window {
    $log: any
    __APP_INFO__: {
      appName: string
      version: string
      author?: string
      hash: string
      buildAt: string
      cliid: string
    }
  }
  declare type Recordable<T = any> = Record<string, T>
  namespace WeixinJSBridge {
    function call(apiName: string): void
  }

  namespace wx {
    function error(config: unknown): void
    function config(config: unknown): void
    function checkJsApi(config: unknown): void
    function ready(config: unknown): void
    function agentConfig(config: unknown): void
    function onMenuShareTimeline(config: unknown): void
    function onMenuShareAppMessage(config: unknown): void
    function updateAppMessageShareData(config: unknown): void
    function updateTimelineShareData(config: unknown): void
    function invoke(apiName: string, config: object, cb: unknown): void
    function hideMenuItems(config: unknown): void
    function showMenuItems(config: unknown): void
    function hideOptionMenu(): void
    function getLocation(config: unknown): void
  }
}
