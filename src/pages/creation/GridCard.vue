<template>
  <div class="loto-grid-card">
    <div class="img-container">
      <img :src="image" :style="{ width: '100%', height: '100%' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Prop {
  id: string | number;
  title?: string
  name?: string
  icon?: string
  image: string
  badge?: number | string

}

withDefaults(defineProps<Prop>(), {
  id: -1
})
</script>

<style scoped lang="less">
.loto-grid-card {
  position: relative;
  width: 100%;
  min-height: 100px;

  div.img-container {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
