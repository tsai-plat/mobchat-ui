<template>
  <!-- 2、 include：需要长缓存的组件名称  max：最多缓存10个，缓存太多影响性能  -->
  <div class="loto-layout">
    <router-view v-slot="{ Component }">
      <component :is="Component" v-if="!$route.meta.keepAlive" />

      <KeepAlive :include="cacheRoutes" :max="10">
        <component :is="Component" v-if="$route.meta.keepAlive" />
      </KeepAlive>
    </router-view>
  </div>
  <AppTabbar />
</template>

<script setup lang="ts">

import { UIPageEnum } from '@/enums';
import AppTabbar from './toolbar/AppTabbar.vue';


/**
 * 浏览器可以搭配插件vue.js Devtools 查看以及控制台网络降速测试
 * 需要长缓存的组件名称
 */
const cacheRoutes: string[] = [UIPageEnum.BASE_HOME_NAME, UIPageEnum.USER_CENTER_NAME]
</script>

<style scoped lang="less">
.loto-layout {
  height: calc(100vh - 50px);
  padding: 0;
  margin: 0;
  overflow: hidden;

}
</style>
