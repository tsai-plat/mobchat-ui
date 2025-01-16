<script setup lang="ts">
import { onMounted } from 'vue'
import { vanThemeVars } from './ui/themes'


const compatiblePc = () => {
  const userAgentInfo = window.navigator.userAgent
  const Agents: string[] = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  if (
    !Agents.some((it) => userAgentInfo.toLocaleLowerCase().includes(it.toLowerCase())) &&
    !(self.frameElement && self.frameElement.tagName == 'IFRAME')
  ) {
    let ifrTag = document.getElementsByTagName('iframe')[0]

    if (ifrTag) {
      ifrTag.remove()
    } else {
      ifrTag = document.createElement('iframe')
      document.body.innerHTML = ''
      ifrTag.setAttribute('src', window.location.href)

      const sytles = {
        width: '480px',
        height: '100vh', //'920px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        border: '0.02em solid #ccc',
      }
      Object.entries(sytles).forEach(([key, value]: [any, string]) => {
        ifrTag.style[key] = value
      })
      document.body.append(ifrTag)
    }
  }
}
onMounted(() => {
  compatiblePc()
})
</script>

<template>
  <van-config-provider theme="light" :theme-vars="vanThemeVars" theme-vars-scope="global">
    <RouterView />
  </van-config-provider>
</template>
