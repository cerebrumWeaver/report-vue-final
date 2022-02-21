<template>
    <div class="demo-image__lazy">
        <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
    </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      const urls = ref([
        require('@/assets/1.4/T_C.PCA.png'),
      ])

      return {
        urls,
      }
    },
  })
</script>

<style lang="scss" scoped>
    .demo-image__lazy {
        height: 400px;
        overflow-y: auto;

        .el-image {
            display: block;
            min-height: 200px;
            margin-bottom: 10px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
</style>
