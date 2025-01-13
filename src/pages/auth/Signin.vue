<template>
  <div class="signin-page">
    <SignHeader />
    <div class="sigin-page-form px-5">
      <van-form
        :ref="formRef"
        :show-error="true"
        :show-error-message="false"
        :validate-first="true"
        @failed="onFormFailed"
        @submit="onSigninHandle"
      >
        <van-cell-group inset>
          <van-field
            v-model="form.account"
            placeholder="手机/Email"
            name="account"
            :rules="rules.account"
          />
          <van-field
            v-model="form.password"
            type="password"
            placeholder="密码"
            name="password"
            :rules="rules.password"
          />
          <van-field v-model="form.repeat" type="password" placeholder="确认密码" />

          <van-field v-model="form.code" name="code" placeholder="验证码">
            <template #right-icon>
              <div class="p-0 ml-2 h-7 bg-[#cc9966] cursor-pointer" @click="refreshCaptcha">
                <img :src="captchaSrc" alt="点击刷新" style="width: 100%; height: 100%" />
              </div>
            </template>
          </van-field>
        </van-cell-group>
        <RegistAgreement ref="agreementRef" />
        <div class="submit-container px-4 pt-2">
          <van-button round block type="primary" native-type="submit">注册</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { registUser, type RegistCustomUser } from '@/api/uc/user-api'
import { useGlobalSetting } from '@/hooks/settings'
import { useUserStore } from '@/stores'
import { SignHeader, RegistAgreement } from '@/ui'
import { accountValidator, is86Phone, isEmail } from '@/utils/validators'
import { isSimplePassword } from '@/utils/validators/password.validator'
import { showFailToast, showToast, type FieldRule } from 'vant'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
interface EditForm {
  account: string
  password: string
  repeat: string
  code: string
}

const defFormState: EditForm = {
  account: '18801012231',
  password: '123456',
  repeat: '123456',
  code: '12',
}

const { setToken, setUserInfo } = useUserStore()
const router = useRouter()

const { buildCaptchaUrl } = useGlobalSetting()
const captchaSrc = ref<string>(buildCaptchaUrl())
const form = ref<EditForm>({ ...defFormState })
const formRef = ref()

const rules: Record<string, FieldRule[]> = reactive({
  account: [
    {
      required: true,
      validator: accountValidator,
      message: '请输入手机号或邮箱地址',
    },
  ],
  password: [
    {
      required: true,
      validator: (val: string) => {
        if (!isSimplePassword(val)) return false
        return true
      },
      message: '密码至少6位字母或数字组合',
    },
  ],
  repeat: [
    {
      required: true,
      validator: (val: string) => {
        if (val?.length && val === form.value.password) return true
        return false
      },
      message: '两次密码不一致',
    },
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
    },
  ],
})

const agreementRef = ref()

const refreshCaptcha = (e: any) => {
  e.preventDefault()
  captchaSrc.value = buildCaptchaUrl()
}

async function onSigninHandle(values: any) {
  globalThis.console.log('>>>>>>Submit>>>>', JSON.stringify(values))
  const checked = await agreementRef.value?.checked
  if (!checked) {
    await showToast(`请先同意用户协议!`)
    return
  }
  const { account, password, code } = values
  try {
    const data: RegistCustomUser = {
      username: account,
      password,
      code,
    }

    if (is86Phone(account)) {
      data.phone = account
    }
    if (isEmail(account)) {
      data.email = account
    }

    const ret = await registUser(data)
    if (ret) {
      const { token, userno, username, avatar, phone, email, nickname } = ret
      await setToken(token)
      await setUserInfo({ userno, username, avatar, phone, email, nickname })

      await router.replace({ path: '/index' })
    }
    console.log(ret)
  } catch (ex: any) {
    showFailToast({
      icon: 'warning-o',
      message: ex?.message,
      duration: 3000,
    })
  }

  globalThis.console.log(account, password, code)
}

function onFormFailed({ errors }: any) {
  if (errors?.length) {
    showFailToast({
      icon: 'warning-o',
      message: errors[0]?.message,
      duration: 3000,
    })
  }
}
</script>

<style scoped lang="less">
.signin-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  height: 100vh;
  padding-top: 58px;

  background: url('../../assets/images/loginbg.jpg') no-repeat;
  background-size: 100% 100%;
}
</style>
