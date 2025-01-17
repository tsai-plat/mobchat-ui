<template>
  <div class="profile-header">
    <div class="inner-box">
      <div class="avatar p-0">
        <img class="bg-white p-1" src="https://ucarecdn.com/b0487290-f4ab-428b-8271-cbed3a5c7baa/lotolab.png" />
      </div>
      <div class="right-info flex flex-col justify-between items-stretch">
        <div class="label pb-2">
          <label for="nickname" class="profile-nickname text-[1.15em]">
            未登录
          </label>
        </div>

        <div class="uno-row text-sm flex justify-between items-center">
          <div class="l-wrapper">
            <span>用户编号：</span>
            <span>xsU268jxv</span>
          </div>
          <div class="r-wrapper flex space-x-1 items-center justify-end">
            <loto-icon icon="ant-design:qrcode-outlined" :style="{ fontSize: '2.35em' }" />
            <loto-icon icon="tabler:chevron-right" :style="{ fontSize: '2.15em' }" />
          </div>
        </div>
      </div>
    </div>
    <div class="vip-card">
      <div class="vip-inner-box w-full">
        <div class="slogan-line flex justify-between items-center bg-[#5833de] bg-opacity-30">
          <label for="vip" class="slogan flex items-center">
            <loto-icon icon="ri:vip-line" class="text-[1.65em] mr-1" />
            <gradient-text gradient="linear-gradient(to right, #f83600 0%, #f9d423 100%)" size="1.15em">
              超级VIP权益
            </gradient-text>
          </label>
          <van-button round size="mini" color="linear-gradient(to right, #f83600 0%, #f9d423 100%)">
            <span class="px-3 tracking-[0.2em]">立即开通</span>
          </van-button>
        </div>
        <div class="quan-yi text-[0.75em] space-x-2 flex justify-evenly bg-[#5833de] bg-opacity-68">
          <span>文本生成无限量</span>
          <span>绘图创作3000张/年</span>
          <span>视频创作100小时/年</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.profile-header {
  position: relative;
  width: 100%;
  min-height: 168px;
  color: white;
  background: url(../../assets//images/head-bg.jpg) no-repeat;
  background-size: 100% 100%;

  .inner-box {
    display: flex;
    align-items: stretch;
    padding: 24px 24px 12px 16px;

    .avatar {
      flex: 0 0 100px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }

    .right-info {
      flex: 1 1 auto;
      padding: 0px 0px 20px 0px;
    }
  }

  .avatar {
    @avatar-size: 4.25em;

    img {
      width: @avatar-size;
      height: @avatar-size;
      border-radius: (@avatar-size / 2);
    }
  }

  .vip-card {
    position: absolute;
    bottom: -52px;
    left: 0;
    width: 100%;
    padding: 0px 16px 0px 16px;
    @border-raduis: 12px;

    .vip-inner-box {
      padding: 12px 0px;

      .slogan-line {
        padding: 12px 8px 12px 8px;
        border-top-left-radius: @border-raduis;
        border-top-right-radius: @border-raduis;
      }

      .quan-yi {
        padding: 12px 8px 12px 8px;
        border-bottom-right-radius: @border-raduis;
        border-bottom-left-radius: @border-raduis;
      }
    }
  }
}
</style>
