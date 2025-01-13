<template>
  <div class="page-container h-full">
    <span class="text-sm text-orange-600">homePage</span>

    <van-button type="primary" @click="test">你好</van-button>
  </div>
</template>

<script setup lang="ts">
import { showConfirmDialog, showToast } from 'vant'

function test() {
  showConfirmDialog({
    title: '获取授权',
    message: '本次操作将获取你的微信昵称和头像,用于海报生成.',
  })
    .then(() => {
      showToast({
        message: 'Success',
        position: 'top',
      })
    })
    .catch(() => {
      showToast({
        message: '获取失败',
        position: 'top',
      })
    })
}
</script>

<style scoped lang="less"></style>
