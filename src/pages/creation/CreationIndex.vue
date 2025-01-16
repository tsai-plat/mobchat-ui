<template>
  <div class="creation-page">
    <div class="creation-page-header pt-5 pb-3 px-6">
      <span>智能创作</span>
    </div>
    <div class="header-swiper w-full flex items-stretch">
      <DiscoverSwiper />
    </div>
  </div>
</template>

<script setup lang="ts">
import DiscoverSwiper from '../discover/DiscoverSwiper.vue';
</script>

<style scoped lang="less">
.creation-page {

  .creation-page-header {
    background-image: linear-gradient(185deg, #f5f7fa 0%, #c3cfe2 100%);
  }

}

.header-swiper {
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
</style>
