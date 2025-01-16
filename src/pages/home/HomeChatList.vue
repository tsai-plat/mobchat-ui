<template>

  <div class="chat-list-container bg-slate-300 bg-opacity-20 space-y-3 px-1 py-4">
    <van-cell-group>
      <chat-list-item v-for="(it, idx) in list2" :key="idx" :id="it.chatid" :title="it.title" :icon="it.icon"
        :desc="it.description" />
    </van-cell-group>
    <van-cell-group>
      <chat-list-item v-for="(it, idx) in list" :key="idx" :id="it.chatid" :title="it.title" :icon="it.icon"
        :desc="it.description" />
    </van-cell-group>
  </div>


</template>

<script setup lang="ts">
import { promptItems } from '@/mocks/ui/home-mock'
import { ref } from 'vue';
import ChatListItem from '@/ui/chat/ChatListItem.vue';

const subs = promptItems.slice(0, 3)
const list = ref([...promptItems])
const list2 = ref([...subs])

</script>

<style scoped lang="less">
.chat-list {
  padding: 20px 12px;
}
</style>
