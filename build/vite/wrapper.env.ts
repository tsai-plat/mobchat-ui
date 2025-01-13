import { name, version } from '../../package.json'
import { getCurrentHash } from './getbuild.info'

/**
 *
 * @param env
 * @returns
 */
export function wrapperEnv(env: ImportMetaEnv): WrapperEnv {
  // const { name, version } = pkg
  const { VITE_GLOB_APP_NAME } = env
  const ret: Record<string, any> = {
    __APP_INFO__: {
      appName: VITE_GLOB_APP_NAME ?? name,
      author: 'lanbery<lanbery@gmail.com>',
      version,
      buildAt: new Date().toISOString(),
      hash: getCurrentHash(),
    },
  }

  for (const envName of Object.keys(env)) {
    let realName = env[envName].replace(/\\n/g, '\n')

    realName = realName === 'true' ? true : realName === 'false' ? false : realName

    if (envName === 'VITE_PORT') {
      realName = Number(realName)
    }

    if (envName === 'VITE_PROXY') {
      try {
        realName = JSON.parse(realName)
      } catch (_e) {}
    }
    ret[envName] = realName
    process.env[envName] = realName
  }

  return ret as WrapperEnv
}
