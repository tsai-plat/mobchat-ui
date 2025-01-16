<template>
  <div class="discover-page h-full">
    <div class="search-bar-container w-full">
      <div class="search-wrapper px-3">
        <search-bar placeholder="搜索智能体..." />
      </div>

      <div class="swiper-wrapper px-5">
        <DiscoverSwiper />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DiscoverSwiper from './DiscoverSwiper.vue';
</script>

<style scoped lang="less">
.discover-page {
  color: @icon-active-color;
  background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);

  .search-bar-container {

    // background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
    background-image: linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%);
  }
}
</style>
