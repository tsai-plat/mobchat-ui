<template>
  <van-tabbar v-model="active" fixed route safe-area-inset-bottom class="loto-tabbar">
    <van-tabbar-item v-for="(item, index) in allMenus" :key="index" :to="item.to" :name="item.to.name"
      :badge="item?.badge">
      <span>{{ item.title }}</span>
      <template #icon="props">
        <LotoIconify v-if="item.iconify" :icon="item.iconify" class="tab-menu-icon" :class="{
          'active': !!props.active
        }" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { allMenus } from './tab.menus'
import { LotoIconify } from '@/ui/index'

const active = ref(0)
</script>

<style scoped lang="less">
.van-tabbar-item {
  --van-tabbar-item-text-color: #424242;
}

.van-tabbar-item--active {
  --van-tabbar-item-active-color: @icon-active-color;
  --van-tabbar-item-icon-size: 2.2em;
}

.loto-tabbar {
  border-top: 0.01em solid rgba(#424242, 0.1);
}
</style>
