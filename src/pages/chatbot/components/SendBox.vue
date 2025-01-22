<template>
  <div class="chat-send-box block w-full ">
    <div class="main-send flex justify-between items-center">
      <div v-if="!inputActived && !loading" class="left-container flex items-center justify-center">
        <loto-icon icon="gg:add" class="mr-2" :class="iconClass" @click="toggleMore" />
      </div>

      <div class="middle-input-container flex justify-center items-center relative">
        <van-field v-if="!micEnabled" ref="inputRef" v-model="text" placeholder="有问题尽管问我..."
          :autosize="{ maxHeight: 100, minHeight: 20 }" type="textarea" :disabled="loading"
          @focus="toggleInputActived(true)" @blur="onInputBlurHandle"></van-field>

        <div v-else class="btn-wrapper w-full py-2">
          <van-button block round>按下说话</van-button>
        </div>


        <div v-if="inputActived" class="send-icon-wrapper absolute bottom-2 -right-1">
          <div class="icon-rounded w-7 h-7 rounded-[14px] flex justify-center items-center">
            <loto-icon v-if="!loading" icon="mingcute:send-plane-fill" class="h-7 w-7 text-[#a1c4fd]"
              @click="sendHandle" />
            <loto-icon v-if="loading" icon="line-md:downloading-loop" class="h-7 w-7 text-[#a1c4fd]" />
          </div>
        </div>
        <div v-if="inputActived && !loading" class="mic-icon-wrapper absolute top-1 -right-1">
          <loto-icon icon="famicons:mic-circle-outline" class="h-7 w-7 text-[#a1c4fd]" @click="changeMicroStatus" />
        </div>
      </div>
      <div v-if="!inputActived && !loading" class="right-container flex items-center justify-center pl-1">
        <loto-icon v-if="micEnabled" icon="codicon:record-keys" :class="iconClass" @click="triggerMicStatus(false)" />
        <loto-icon v-else icon="famicons:mic-circle-outline" :class="iconClass" @click="triggerMicStatus(true)" />
      </div>
    </div>
    <div v-if="showMore" class="attchment-switcher py-2">
      <van-grid :column-num="5" :gutter="10" :border="false" :style="{
        '--van-grid-item-content-padding': 'none'
      }">
        <van-grid-item>
          <RectAction class="rect-grid-item" label="拍照" icon="fluent:camera-sparkles-20-regular" />
        </van-grid-item>
        <van-grid-item>
          <RectAction class="rect-grid-item" label="摄像" icon="fluent:record-stop-32-regular" />
        </van-grid-item>
        <van-grid-item>
          <RectAction class="rect-grid-item" label="文档" icon="flat-color-icons:reading-ebook" />
        </van-grid-item>
        <van-grid-item>
          <RectAction class="rect-grid-item" label="对话" icon="ri:kakao-talk-line" />
        </van-grid-item>
        <van-grid-item>
          <RectAction class="rect-grid-item" label="翻译" icon="weui:transfer-outlined" />
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import RectAction from './RectAction.vue';
const loading = ref<boolean>(false)
const text = ref<string>('')
const micEnabled = ref<boolean>(false)
const showMore = ref<boolean>(false)

const inputActived = ref<boolean>(false)
const inputRef = ref()

const iconClass = ref<string[]>(['text-[1.95em]'])

function toggleInputActived(b: boolean = false) {
  if (loading.value) return
  showMore.value = false
  inputActived.value = b
}

function triggerMicStatus(b: boolean) {
  showMore.value = false
  micEnabled.value = b
}

function onInputBlurHandle() {
  // if (!loading.value) {
  //   showMore.value = false
  //   inputActived.value = false
  // }
}

function changeMicroStatus() {
  inputActived.value = false
  micEnabled.value = true
}

function toggleMore() {
  showMore.value = !showMore.value
}

function sendHandle() {
  loading.value = true
  inputActived.value = true
  setTimeout(() => {
    loading.value = false
    inputActived.value = false
  }, 15000)
}
</script>

<style scoped lang="less">
.main-send {
  .left-container {
    flex: 0 0 auto;
  }

  .middle-input-container {
    flex: 1 1 auto;

    .van-cell.van-field {
      border: 1px solid rgba(253, 248, 248, 0.5);
      border-radius: 10px;
    }
  }

  // .icon-rounded {
  //   background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  // }

}
</style>
