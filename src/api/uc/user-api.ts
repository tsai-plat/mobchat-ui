import {
  PlatformEnum,
  UserStatusEnum,
  type IUser,
  type WechatAuthorizeParam,
} from '@tsailab/core-types'
import { APIVersionEnum } from '../api.version.enum'
import { HttpRequest } from '../axios/request'
import { UCModuleApis } from './apis.constants'

type UserProfile = Omit<IUser, 'password' | 'isSuper' | 'remark' | 'clit'> & {
  age?: number
  gender?: string
  recoverEmail?: string
}

export interface RegistCustomUser {
  username: string
  password: string
  phone?: string
  email?: string
  status?: UserStatusEnum
  code: string
}

export interface RegisteredUserResp extends IUser {
  token: string
}

export function getUserProfile(uno: string) {
  return HttpRequest.get<UserProfile>(`${APIVersionEnum.V1}/profile/get/${uno}`)
}

export function registUser(data: RegistCustomUser) {
  const { password, username, email, phone, code, status = UserStatusEnum.NORMAL } = data
  return HttpRequest.post<RegisteredUserResp>(UCModuleApis.pwdRegist, {
    password,
    username,
    email,
    phone,
    status,
    platform: PlatformEnum.MOB_PLATFORM,
    code,
  })
}

export function wxSlientLogin(params: WechatAuthorizeParam) {
  return HttpRequest.post(UCModuleApis.wxSlientLogin, { ...params })
}

export function wxRegisteredAndLogin(params: WechatAuthorizeParam) {
  return HttpRequest.post(UCModuleApis.wxRegisteredLogin, { ...params })
}
