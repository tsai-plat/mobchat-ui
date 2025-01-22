<template>
  <div class="w-full h-full flex flex-col">
    <ProfileHeader class="h" />
    <div class="fill-space w-full flex-grow-0 flex-shrink-0 bg-slate-100" :style="{ height: '40px' }"></div>

    <div class="user-settings bg-slate-100 space-y-3 overflow-y-auto">
      <van-cell-group>
        <van-cell is-link icon="gem-o" title="会员" label="余额: 205.00"></van-cell>
        <van-cell is-link icon="star-o" title="我的收藏"></van-cell>
        <van-cell icon="orders-o" title="历史记录">
          <template #label>
            <div class="sub-cells">
              <van-cell is-link icon="font-o" title="内容创作" />
              <van-cell is-link icon="photo-o" title="图片" />
              <van-cell is-link icon="music-o" title="音频" />
              <van-cell is-link icon="video-o" title="视频" />
            </div>
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell is-link icon="setting-o" title="设置"></van-cell>
        <van-cell is-link icon="completed-o" title="用户协议"></van-cell>
        <van-cell is-link icon="description-o" title="隐私政策"></van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell is-link icon="apps-o" title="备案信息" value="1.0.0">
        </van-cell>
        <div class="about w-full block text-left font-extralight pl-9 text-slate-600 pb-3">

          <label for="version" class="text-[0.75em]">
            {{ appinfo.company }}
          </label>

          <div class="item space-y-1" v-for="(it, idx) in appinfo.approvals" :key="idx">
            <span class="text-[0.75em]">{{ it.no }}</span>
          </div>
        </div>
      </van-cell-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApp } from '@/hooks';
import ProfileHeader from './ProfileHeader.vue';

const { appinfo } = useApp()
</script>

<style scoped lang="less">
.user-settings {
  width: 100%;
  flex: 1 1 auto;
  padding: 20px 2px 40px 0px;
}

.sub-cells {
  .van-cell {
    --van-cell-vertical-padding: 10px;
    --van-cell-horizontal-padding: 0px;
  }
}
</style>
