<script lang="tsx">
import { defineComponent, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Empty } from 'vant'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Redirect',
  setup() {
    const route = useRoute()
    const router = useRouter()

    onBeforeMount(() => {
      const { params, query } = route
      const { path } = params

      router.replace({
        path: '/' + (Array.isArray(path) ? path.join('/') : path),
        query,
      })
    })

    return () => <Empty />
  },
})
</script>

<style scoped lang="less"></style>
