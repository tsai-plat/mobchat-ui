<template>
  <div class="creation-page h-full w-full overflow-hidden flex flex-col overflow-y-auto">
    <div class="creation-page-header pt-5 pb-3 px-6">
      <gradient-text size="1.35em" gradient="linear-gradient(to top,#75f306 0%, #08c421 100%)" :font-weight="600">
        智能创作
      </gradient-text>
    </div>
    <div class="header-swiper w-full">
      <DiscoverSwiper />
    </div>
    <section class="section-title-colorful pl-6 pt-4 text-center">
      <gradient-text size="1.35em" gradient="linear-gradient(to top, #c471f5 0%, #fa71cd 100%)">
        智能体
      </gradient-text>
    </section>
    <CreationGrid />

  </div>
</template>

<script setup lang="ts">
import DiscoverSwiper from '../discover/DiscoverSwiper.vue';
import CreationGrid from './CreationGrid.vue'
</script>

<style scoped lang="less">
.creation-page {

  .creation-page-header {
    background-image: linear-gradient(185deg, #f5f7fa 0%, #c3cfe2 100%);
  }

}

.header-swiper {
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-bottom: 0.01em solid #94b0de;
}
</style>
