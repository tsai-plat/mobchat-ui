<template>
  <swiper class="major-swiper" :slidesPerView="1.5" :spaceBetween="24" :pagination="{
    clickable: true,
  }" :modules="modules">
    <swiper-slide v-for="(it, index) in items" :key="index" class="major-swiper-slide">
      <div class="major-card bg-opacity-15 p-2" :class="{
        'major-card-bg1': index % 3 === 0,
        'major-card-bg2': index % 3 === 1,
        'major-card-bg3': index % 3 === 2,
      }">
        <div class="major-card-main flex items-stretch">
          <img :src="it.logo" />
          <div class="right-pannel block">
            <div class="tool-bar w-full text-right pr-1 pt-1 min-h-7">
              <van-icon v-if="it.showBadge" name="fire-o" color="#ee0a24" :badge="it.badge ?? ''" size="24" />
            </div>
            <div class="w-full text-center">
              <span class="text-xl text-center">
                {{ it.title }}
              </span>
            </div>

          </div>

        </div>
        <div class="major-card-intro pt-2">
          <p class="text-sm">
            {{ it.description }}
          </p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { majorItems, type ChatbotItem } from '@/mocks/ui/home-mock';
import { ref } from 'vue';
// import { Pagination } from 'swiper/modules';

const items = ref<Array<ChatbotItem>>([...majorItems])
const modules = ref([])


</script>

<style scoped lang="scss">
.major-card {
  border-radius: 8px;

  &-main {
    &>img {
      width: 100px;
      height: 100px;
      border-radius: 50px;
    }

    .right-pannel {
      flex: 1 1 auto;
    }
  }

  &-bg1 {
    background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  }

  &-bg2 {
    background-image: linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);
  }

  &-bg3 {
    background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
  }
}

.major-swiper-slide {
  border-radius: 8px;
}
</style>
