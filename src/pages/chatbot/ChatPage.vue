<template>
  <div class="chatbot-page-container h-full flex flex-col p-0 m-0 relative items-stretch">
    <div class="message-container">
      <div class="chat-message-list overflow-y-auto ">
        <div class="list-item h-40 ">
          <span>sdsdf</span>
        </div>
        <div class="list-item h-40"><span>sdsdf</span></div>
        <div class="list-item h-40"><span>sdsdf</span></div>
        <div class="list-item h-40"><span>sdsdf</span></div>
        <div class="list-item h-40"><span>sdsdf</span></div>
        <div class="list-item h-40"><span>sdsdf</span></div>
        <div class="list-item h-40"><span>sdsdf</span></div>
        <div class="list-item h-40"><span>sdsdf</span></div>
        <div class="list-item h-40"><span>sdsdf</span></div>
        <div class="list-item "><span>sdsdf</span></div>
      </div>
    </div>
    <footer class="chatbot-footer fixed left-0 bottom-0 right-0 bg-transparent">
      <div class="chatbot-sender-container bg-white rounded-lg py-0 px-2">
        <SendBox />
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { SendBox } from './components'
</script>

<style scoped lang="less">
.chatbot-page-container {

  .message-container {
    flex: 1 1 auto;
    height: calc(100% - 50px);
    margin-bottom: 50px;

    .chatbot-message-list {
      height: 1200x;
    }
  }

  .chat-sender-container {
    width: 100%;
    height: 50px;
    flex: 0 0 50px;
  }

  footer.chatbot-footer {
    min-height: 50px;
    padding: 10px 12px 16px 12px;
  }
}
</style>
