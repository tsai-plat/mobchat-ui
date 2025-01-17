<template>
  <section class="loto-search-bar">
    <div class="inner-box flex items-center float-start">
      <div class="prefix-icon">
        <loto-icon :icon="icon" class="text-red-400" :style="{
          ...iconStyles,
        }" />
      </div>
      <input type="text" ref="inputRef" v-model="keywords" :placeholder="placeholder" enterkeyhint="search"
        @keyup.enter="searchEventHandle" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';


interface Props {
  placeholder?: string
  icon?: string
  iconSize?: string | number
}

const inputRef = ref()
const keywords = ref<string>('')

const props = withDefaults(defineProps<Props>(), {
  placeholder: '搜索关键词...',
  icon: 'mdi:search',
  iconSize: '1.5em'
})

const iconStyles = computed(() => {
  const s: Record<string, any> = {}
  const size = /^[\d]+$/.test(props.iconSize.toString()) ? `${props.iconSize}px` : props.iconSize as string
  s.width = size
  s.height = size

  return s
})

function searchEventHandle() {
  inputRef.value?.blur();// 关闭手机键盘
}
</script>

<style scoped lang="less">
.loto-search-bar {
  padding: 12px 8px;
  width: 100%;

  .inner-box {
    width: 100%;
    background-color: #F7F8FA;
    border-radius: 8px;
    height: 2.3em;

    .prefix-icon {
      min-width: 2.2em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    input {
      background-color: #F7F8FA;
      border: 0px;
      font-size: 14px;
      flex: 1
    }
  }
}

svg.loto-iconify {
  color: #424242;
}
</style>
