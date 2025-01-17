<template>
  <div class="w-full h-full flex flex-col">
    <ProfileHeader />
    <div class="fill-space w-full bg-slate-100" :style="{ height: '32px' }"></div>

    <div class="user-settings bg-slate-100 space-y-3">
      <van-cell-group>
        <van-cell is-link icon="gem-o" title="会员" label="余额: 205.00"></van-cell>
        <van-cell is-link icon="star-o" title="我的收藏"></van-cell>
        <van-cell is-link icon="records-o" title="历史记录"></van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell is-link icon="setting-o" title="设置"></van-cell>
        <van-cell is-link icon="completed-o" title="用户协议"></van-cell>
        <van-cell is-link icon="description-o" title="隐私政策"></van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileHeader from './ProfileHeader.vue';
</script>

<style scoped lang="less">
.user-settings {
  padding: 20px 0px;
}
</style>
