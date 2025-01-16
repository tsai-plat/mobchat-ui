import { APIVersionEnum } from '../api.version.enum'

export const UCModuleApis = {
  pwdRegist: `${APIVersionEnum.V1}/auth/mob/signin`,
  wxSlientLogin: `${APIVersionEnum.V1}/auth/wechat/slient_login`,
  wxRegisteredLogin: `${APIVersionEnum.V1}/auth/wechat/registered`,
}
