<template>
  <div class="chatbot-layout w-full h-full overflow-hidden transition-all relative px-2">
    <header class="chatbot-navhead flex items-center fixed left-0 top-0 right-0 z-50 bg-white" :style="{
      height: `${navHeaderHeight}px`,
      borderBottom: '0.01em solid #ebedee',
    }">
      <ChatbotNavbar />
    </header>
    <main class="chatbot-main flex flex-col max-h-full overflow-hidden" :style="{
      marginTop: `${navHeaderHeight}px`,
      height: `calc(100% - ${navHeaderHeight}px)`
    }">
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.fullPath" />
      </router-view>
    </main>


  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/hooks';
import ChatbotNavbar from './chatbar/ChatbotNavbar.vue';
const { navHeaderHeight } = useTheme()

</script>

<style scoped lang="less">
#app {
  overflow: hidden;
  height: 100%;
}

.chatbot-layout {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);

  header.chatbot-navhead {
    flex: 0 0 50px;
  }

  main.chatbot-main {
    flex: 1 1 auto;

    div {
      height: 100%;
      border: 1px solid linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    }
  }
}
</style>
