<template>
  <div class="w-full flex justify-center items-start text-sm text-white py-3">
    <van-checkbox v-model="checked" icon-size="16px" checked-color="#00FF00">
      <span class="text-white">
        {{ $t('common.agreementTip') }}
      </span>
    </van-checkbox>

    <span class="a-out-link">{{ $t('common.userAgreement') }}</span>
    <span class="a-out-link">{{ $t('common.privayPolicy') }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref<boolean>(false)

defineExpose({
  checked: checked,
})
</script>

<style scoped lang="less">
span.a-out-link {
  font-weight: lighter;
  color: @link-red;

  &:hover {
    color: @link-red-hover;
  }
}
</style>
