<template>
  <div class="home-page h-full w-full flex flex-col items-stretch">
    <div class="home-header">
      <HomeBanner />
    </div>
    <div class="major-swiper-container w-full">
      <div class="px-3 pt-2 pb-1 text-orange-400 flex items-center space-x-2">
        <label for="#">高级功能</label>
        <img :src="vip" alt="" :style="{ width: `${iconSize}px`, height: `${iconSize}px` }">
      </div>

      <div class="w-full pb-5">
        <HomeMajorSlider />
      </div>
    </div>
    <div class="list-container">
      <HomeChatList />
    </div>
  </div>
</template>
<!-- <script lang="ts">
import { register } from 'swiper/element/bundle';
register()
</script> -->
<script setup lang="ts">
import HomeBanner from './HeadBanner.vue'
import HomeMajorSlider from './MajorSlider.vue'
import HomeChatList from './HomeChatList.vue'
import vip from '@/assets/icons/icon-vip.png'
import { ref } from 'vue';

const iconSize = ref<number>(24)

</script>

<style scoped lang="less">
.home-page {
  overflow: hidden;

  .major-swiper-container {
    background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);
  }
}

.home-header {
  flex: 0 0 132px;
}

.list-container {
  border-top: 0.05em solid rgba(#424242, 0.1);
  flex: 1 1 auto;
  overflow-y: auto;
}
</style>
