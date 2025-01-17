<template>
  <div class="creation-grid-wrapper">
    <van-grid :border="false" :column-num="2">
      <van-grid-item v-for="(it, index) in items" :key="index">
        <GridCard :id="it.id" :image="it.image" :badge="it.badge" :title="it.title" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script setup lang="ts">
import demoImg from '@/assets/images/ai-draw-example1.png'
import demoImg2 from '@/assets/images/641.jpg'
import demoImg3 from '@/assets/images/shanhaijing01.png'
import GridCard from './GridCard.vue';
import { ref } from 'vue';

const mockItems = () => {
  const cards = []
  let i = 1;
  while (i < 11) {
    let image;
    switch (i % 3) {
      case 1:
        image = demoImg2;
        break;
      case 2:
        image = demoImg;
        break;
      case 0:
        image = demoImg3;
        break;
      default:
        image = demoImg2;
        break;
    }
    const card = {
      id: i,
      title: `demo-${i}`,
      badge: `${Math.random() * 10 * (Math.random() * 1000)}+`,
      image: image
    }
    cards.push(card)
    i++
  }

  return cards
}
const items = ref([...mockItems()])
</script>

<style scoped lang="less">
.creation-grid-wrapper {
  .head-section {
    font-size: 1.25em;
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  }
}
</style>
