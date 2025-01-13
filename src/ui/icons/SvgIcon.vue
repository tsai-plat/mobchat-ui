<template>
  <svg :class="svgClass" :style="{ color, width, height }" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface IProps {
  name: string
  className?: string
  color: string
  size?: number | string
}

const props = withDefaults(defineProps<IProps>(), {
  name: 'none',
})

const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => {
  const clsname = props.className ? `icon-${props.className}` : ''
  return ['loto-svg', clsname]
})

const width = computed(() => (typeof props.size === 'number' ? `${props.size}px` : props.size))
const height = computed(() => (typeof props.size === 'number' ? `${props.size}px` : props.size))
</script>

<style scoped lang="less">
.loto-icon {
  width: 1.3em;
  height: 1.3em;
  vertical-align: -0.3em;
  fill: currentColor;
  overflow: hidden;
}
</style>
