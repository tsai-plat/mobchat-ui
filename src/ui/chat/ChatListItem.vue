<template>
  <van-cell is-link :replace="isIOSWechat" :label="desc" :to="to">
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
import { useApp } from '@/hooks';
import { computed } from 'vue';



interface ChatItemProps {
  id: string
  title: string
  icon?: string
  desc?: string
}

const { isIOSWechat } = useApp()

const props = withDefaults(defineProps<ChatItemProps>(), {
  id: '',
  title: '',
})

const to = computed(() => props.id ? `/chat/${props.id}` : '/chat/default_chatbot')


</script>

<style scoped lang="less">
.chat-item-img {
  width: 24px;
  height: 24px;
}
</style>
