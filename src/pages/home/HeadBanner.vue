<template>
  <swiper class="home-banner-swiper" :spaceBetween="30" :autoplay="{
    delay: 3000,
    disableOnInteraction: false,
  }" :navigation="true" :modules="modules">
    <swiper-slide v-for="(it, index) in items" :key="index">
      <img :src="it.banner" />
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { banners, type HomeHeadBanner } from './head-images';
import { Autoplay } from 'swiper/modules';

const items = ref<HomeHeadBanner[]>([...banners])

const modules = ref([Autoplay])
</script>

<style scoped lang="less"></style>
