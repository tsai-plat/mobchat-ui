<template>
  <div class="chatbot-navbar w-full">
    <div class="nav-back">
      <loto-icon icon="weui:back-filled" :style="{
        ...iconStyles,
      }" />
    </div>

    <div v-if="showTitle" class="title-label">
      {{ title }}
    </div>

    <slot v-if="hasActionSlot" name="action" :style="{
      ...iconStyles
    }" />
    <div v-if="!hasActionSlot && showAction" class="navbar-action-wrapper">
      <loto-icon icon="hugeicons:ai-beautify" :style="{
        ...iconStyles
      }" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { useApp } from '@/hooks';
import { computed, useSlots } from 'vue';
import { useRoute } from 'vue-router';

interface Props {
  showAction?: boolean
  iconSize?: string
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  showAction: true,
  iconSize: '1.75em',
  color: '#4facfe'
})
const { runtimeInfo } = useApp()
const route = useRoute()
const showTitle = computed(() => !runtimeInfo.isWechat)
const hasActionSlot = !!useSlots().action

const title = computed(() => route.meta?.title ?? '')
const iconStyles = computed(() => {
  let fontSize = props.iconSize
  if (/[\d]+/.test(props.iconSize)) {
    fontSize = `${props.iconSize}px`
  } else if (/^[\d]+(\.[\d]+)?(em|rem|px)$/.test(props.iconSize)) {
    fontSize = props.iconSize
  } else {
    fontSize = '1.75em'
  }

  const styles: Record<string, any> = {
    color: props.color,
    fontSize
  }

  return styles
})




</script>

<style scoped lang="less">
.chatbot-navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px;
}
</style>
