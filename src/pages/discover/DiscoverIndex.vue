<template>
  <div class="discover-page h-full w-full flex flex-col overflow-hidden">
    <div class="search-bar-container bar-bg w-full flex-grow-0 flex-shrink-0 relative">
      <div class="search-wrapper px-3 absolute left-0 right-0 w-full">
        <search-bar placeholder="搜索智能体..." />
      </div>
      <div class="swiper-wrapper px-0">
        <DiscoverSwiper />
      </div>
    </div>

    <div class="production-show flex-1 py-4 overflow-y-auto bg-white">
      <div class="title text-center py-1">
        <gradient-text size="1.6em">优秀作品榜</gradient-text>
      </div>
      <CreationGrid />
    </div>
  </div>
</template>

<script setup lang="ts">
import DiscoverSwiper from './DiscoverSwiper.vue';
import CreationGrid from '../creation/CreationGrid.vue';
</script>

<style scoped lang="less">
.discover-page {
  --search-h: 50px;
  color: @icon-active-color;
  background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);

  .search-wrapper {
    position: relative;
    height: var(--search-h);
  }

  .search-bar-container {
    background-image: linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%);
  }

  .bar-bg {
    background-image: linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%);
  }
}
</style>
