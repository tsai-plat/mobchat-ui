<template>
  <div class="rect-action px-2 py-2 flex flex-col justify-stretch items-stretch space-y-1">
    <div class="icon-wrapper flex justify-center items-center pt-1">
      <img v-if="showImg" :src="image" :style="{ ...imgStyles }" />
      <Icon v-if="showIconify" :icon="icon" :class="iconClass" :style="{ color: iconColor, fontSize: iconSize }" />
    </div>
    <div class="label flex justify-center items-center text-center text-sm font-thin">
      {{ label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue'

interface Props {
  icon?: string
  image?: string
  label?: string
  iconSize?: string
  iconColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  icon: '',
  image: '',
  iconSize: '1.85em',
  iconColor: '',
})
const showImg = computed(() => !!props.image?.length)
const imgStyles = computed(() => {
  const size = /[\d]+/.test(props.iconSize) ? `${props.iconSize}px` : props.iconSize
  return {
    color: props.iconColor,
    width: size,
    height: size,
  }
})
const showIconify = computed(() => !props.image?.length && props.icon?.length)
const iconClass = computed(() => ([`text-[${props.iconSize}]`]))
</script>

<style scoped lang="less">
.rect-action {
  width: 100%;
  // background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  border-radius: 8px;
}
</style>
