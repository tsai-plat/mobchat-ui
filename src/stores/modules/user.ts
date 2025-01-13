import { RandomHelper, storage } from '@/utils'
import { defineStore } from 'pinia'
import { ACCESS_TOKEN, CLIENT_UUID, CURRENT_USER } from '../mutation-types'
import { ClientTypeEnum, type IUser } from '@tsailab/core-types'
import { isWechat } from '@/utils/runtimes/wechat-browser-detect'

export interface IUserState {
  cliid: string
  token?: string
  info: Partial<IUser>
}

const defaultUserInfo: Partial<IUser> = {
  username: '',
  avatar: '',
  openid: '',
  userno: '',
}

const initClientId = () => {
  if (!storage.get(CLIENT_UUID)?.length) {
    storage.set(
      CLIENT_UUID,
      RandomHelper.clientUUID(isWechat ? ClientTypeEnum.mobileWxChat : ClientTypeEnum.mobileChat),
      null,
    )
  }
}

initClientId()

export const useUserStore = defineStore('loto-user', {
  state: (): IUserState => ({
    cliid: storage.get(
      CLIENT_UUID,
      RandomHelper.clientUUID(isWechat ? ClientTypeEnum.mobileWxChat : ClientTypeEnum.mobileChat),
    ),
    token: storage.get(ACCESS_TOKEN, undefined),
    info: storage.get(CURRENT_USER, { ...defaultUserInfo }),
  }),
  getters: {
    avatar(state: IUserState) {
      return state.info?.avatar ?? ''
    },
    username(state: IUserState): string {
      return state.info?.username ?? ''
    },
  },
  actions: {
    setUserInfo(info: Partial<IUser>) {
      this.$state.info = info
      storage.set(CURRENT_USER, info)
    },
    resetUserInfo() {
      this.$state.info = { ...defaultUserInfo }
      storage.set(CURRENT_USER, this.$state.info)
    },
    logout() {
      this.removeToken()
      this.resetUserInfo()
    },

    removeToken() {
      this.$state.token = ''
      storage.remove(ACCESS_TOKEN)
    },
    setToken(token: string) {
      this.$state.token = token
      storage.set(ACCESS_TOKEN, token)
    },
    updateUserInfo(info: Partial<IUser>) {
      this.$state.info = Object.assign(this.$state.info, { ...info })
      storage.set(CURRENT_USER, this.$state.info)
    },
  },
})
