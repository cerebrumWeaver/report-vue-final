<template>
   <!-- <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
        <img src="../assets/png/8.png"/>
    </el-button>-->
    <img src="../assets/png/8.png" @mousemove="drawer = true" alt="" />

    <el-drawer v-model="drawer" title="I am the title" :with-header="false" size="162px, 162px">
        <span><img src="../assets/png/wx2.png" alt=""/>扫一扫，关注我</span>
    </el-drawer>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      return {
        drawer: ref(false),
      }
    },
  })
</script>
