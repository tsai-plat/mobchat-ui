<template>
  <van-cell is-link :label="desc">
    <template #title>
      <div class="chat-item-title flex items-center space-x-2">
        <img v-if="icon" :src="icon" :alt="title" class="chat-item-img">
        <span class="title">
          {{ title }}
        </span>
      </div>
    </template>
  </van-cell>
</template>

<script setup lang="ts">

interface ChatItemProps {
  id: string
  title: string
  icon?: string
  desc?: string
}

withDefaults(defineProps<ChatItemProps>(), {
  id: '',
  title: '',
})


</script>

<style scoped lang="less">
.chat-item-img {
  width: 24px;
  height: 24px;
}
</style>
