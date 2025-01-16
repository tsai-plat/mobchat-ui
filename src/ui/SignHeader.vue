<template>
  <div class="w-full py-5 px-0 space-y-3 flex flex-col justify-start items-center">
    <svg-icon name="logo-dark" color="#FFF" />
    <!-- <img :src="logo" /> -->
    <span v-if="titleShow" class="text-xl text-white">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// import logo from '@/assets/icons/xy-128.png'
interface IProps {
  title?: string
}

const props = withDefaults(defineProps<IProps>(), {})
const titleShow = computed(() => !!props?.title?.length)
</script>

<style scoped lang="less"></style>
