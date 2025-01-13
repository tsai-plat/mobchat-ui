<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login-page">
    <div class="login-page-container">
      <div class="head-logo w-full flex justify-center items-center py-5">
        <svg-icon name="logo-dark" color="#FFF" />
      </div>
      <van-form>
        <van-cell-group inset>
          <van-field v-model="form.account" placeholder="手机/Email">
            <template #button>
              <van-button size="small" type="default" plain hairline @click="onSendClickHandle"
                >发送验证码</van-button
              >
            </template>
          </van-field>
          <van-field v-model="form.password" type="password" placeholder="密码" />
        </van-cell-group>
        <div class="submit-container px-4 pt-8">
          <van-button round block type="primary" native-type="submit" @click="onloginHandle"
            >登录</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getUserProfile } from '@/api/uc/user-api'
import { useGlobalSetting } from '@/hooks/settings'
import { ref } from 'vue'

interface LoginForm {
  account: string
  password: string
  code: string
}

const form = ref<LoginForm>({
  account: '',
  password: '',
  code: '',
})

async function onloginHandle() {
  const ret = await getUserProfile('2wkjp9f5y')
  globalThis.console.log(ret)
}

function onSendClickHandle() {
  const { glob } = useGlobalSetting()

  globalThis.console.log(glob)
}
</script>

<style scoped lang="less">
.login-page {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  height: 100vh;
  padding-top: 38px;

  background: url('../../assets/images/loginbg.jpg') no-repeat;
  background-size: 100% 100%;

  & > .login-page-container {
    flex: 1 1 100%;
    padding: 0px 20px;
  }
}
</style>
