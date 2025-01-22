<template>
  <div class="wechat-login-page">

    <div class="sigin-container bg-transparent">
      <div class="header py-5">
        <SignHeader />
      </div>
      <van-form @submit="submitHandle">
        <van-cell-group inset :style="{
          '--van-cell-background': 'transparent'
        }">
          <div class="authorize-loading w-full flex justify-center items-center py-4">
            <img :src="wxAuthorizeSrc" />
          </div>
          <!-- <van-field v-model="form.nickname" placeholder="昵称" name="nickname" label="昵称" />
          <van-field v-model="form.phone" placeholder="手机" name="phone" label="手机" /> -->

          <RegistAgreement textClass="text-gray-500" ref="agreementRef" :defChecked="true" />
        </van-cell-group>

        <div class="submit-container px-4 pt-6 hidden">
          <van-button round block type="primary" native-type="submit">快捷登录</van-button>
        </div>
      </van-form>
    </div>

  </div>
</template>

<script setup lang="ts">
import { wxRegisteredAndLogin, wxSlientLogin } from '@/api/uc/user-api';

import { WxAuthClient } from '@/sdk/wechat';
import { useUserStore } from '@/stores';
import { SignHeader, RegistAgreement } from '@/ui'
import { APIHttpStatus, type TokenUserCache, type WechatAuthorizeParam } from '@tsailab/core-types';
import { showConfirmDialog, } from 'vant';
import { computed, onBeforeMount, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import wxAuthorizeSrc from '@/assets/images/wx_authorize_small.png'


interface EditForm {
  phone: string
  nickname: string
  avatar: string
}

const defFormState: EditForm = {
  nickname: '',
  phone: '',
  avatar: '',
}

const route = useRoute()
const { signinByTokenUser } = useUserStore()
const form = ref<EditForm>({ ...defFormState })
const client = new WxAuthClient({ verbose: true })
const force = computed(() => route.query.forcepopup === '1')

function submitHandle() {
  const url = client.buildAuthorizeUrl(force.value)
  showConfirmDialog({
    message: url
  }).then(() => {
    // confirmed
    window.location.replace(url)
  }).catch(() => {
    // canceled
  })
}


function reloadAuthorizeUrl(force: boolean = false) {
  const url = client.buildAuthorizeUrl(force)
  history.replaceState(null, '', `?id=${Date.now()}`)
  window.location.replace(url)
}

async function tryLogin() {
  const { code, state } = route.query || {}
  if (code?.length && state?.length) {
    try {
      const params: WechatAuthorizeParam = {
        code: code.toString(),
        state: state.toString(),
        phone: form.value.phone,
      }
      const ret = force.value ? await wxRegisteredAndLogin(params) : await wxSlientLogin(params)
      if (ret) {
        await signinByTokenUser(ret as TokenUserCache)
      }
      setTimeout(() => {
        history.replaceState(null, '', `?id=${Date.now()}`)
        window.history.replaceState(null, '', window.location.href)
        window.location.replace(window.location.origin)

      }, 100)
    } catch (ex: any) {
      let html = `获取授权失败<br>是否刷新授权码？`
      if (ex?.code === APIHttpStatus.UNAUTHORIZED_NEED_MORE_INFO) {
        html = ex?.message ?? html
      }
      showConfirmDialog({
        allowHtml: true,
        message: html
      }).then(() => {
        reloadAuthorizeUrl(true)
      }).catch(() => { })
    }

  } else {
    const url = client.buildAuthorizeUrl()
    history.replaceState(null, '', `?id=${Date.now()}`)
    window.location.replace(url)
  }
}


onBeforeMount(() => {
  tryLogin()
})

onMounted(() => {

})

</script>

<style scoped lang="less">
.wechat-login-page {
  width: 100%;
  height: 100vh;
  color: #fff;
  background: url('../../assets/images/loginbg.jpg') no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;

  .sigin-container {
    min-height: 35vh;
    width: 100%;
    padding: 0px 20px;
    padding-top: calc(25vh - 140px);
  }
}
</style>
