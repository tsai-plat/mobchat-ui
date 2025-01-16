<template>
  <swiper class="discover-swiper" :slidesPerView="1.2" :spaceBetween="24" :pagination="{
    clickable: true,
  }" :modules="modules">
    <swiper-slide v-for="(it, index) in items" :key="index" class="discover-swiper-slide">
      <div class="discover-swiper-card bg-opacity-15 p-2 h-full" :class="{
        'card-bg1': index % 3 === 0,
        'card-bg2': index % 3 === 1,
        'card-bg3': index % 3 === 2,
      }">
        <div class="discover-swiper-card__head flex items-center justify-between pb-3">
          <img :src="it.icon" :alt="it.name" class="card-icon">
          <span class="name-clip ms-4">{{ it.name }}</span>
          <div class="right-action pe-3">
            <loto-icon icon="ep:top-right" :style="{
              fontSize: '2.15em',
              fontWeight: 900,
            }" />
          </div>
        </div>
        <img :src="it.image" class="card-img">

      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { discoveAagents, type AgentItemInfo } from '@/mocks/ui/discover-mock';
import { ref } from 'vue';

const items = ref<Array<AgentItemInfo>>([...discoveAagents])
const modules = ref([])
</script>

<style scoped lang="less">
.discover-swiper {
  .discover-swiper-slide {
    padding: 20px 0px;
  }

  .discover-swiper-card {
    background-color: aliceblue;
    border-radius: .6em;

    .card-icon {
      width: 60px;
      height: 60px;
    }

    span.name-clip {
      font-weight: 700;
      font-size: 2.615em;
      --num: 0;
      --deg: calc(var(--num) * 1deg);
      background: linear-gradient(120deg, hsl(var(--deg), 100%, 50%) 30%, hsl(calc(var(--deg) + 30deg), 100%, 50%));
      background-clip: text;
      color: transparent;
    }

    .right-action {
      color: linear-gradient(120deg, hsl(var(--deg), 100%, 50%) 30%, hsl(calc(var(--deg) + 30deg), 100%, 50%));
    }
  }
}

span.name-clip {
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  from {
    --num: 0;
  }

  to {
    --num: 360;
  }
}

@property --num {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}
</style>
