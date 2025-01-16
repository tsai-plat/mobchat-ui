<template>
  <div class="w-full flex justify-center items-start text-sm py-3">
    <van-checkbox v-model="checked" icon-size="16px" checked-color="#00FF00">
      <span :class="textClass">
        {{ $t('common.agreementTip') }}
      </span>
    </van-checkbox>

    <span class="a-out-link">{{ $t('common.userAgreement') }}</span>
    <span class="a-out-link">{{ $t('common.privayPolicy') }}</span>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

interface Props {
  textClass?: string | string[]
  defChecked?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  textClass: 'text-white'

})

const checked = ref<boolean>(false)

defineExpose({
  checked: checked,
})

onBeforeMount(() => {
  checked.value = !!props?.defChecked
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
