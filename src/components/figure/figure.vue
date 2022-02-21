<template>
  <el-scrollbar class="demo-image__lazy" style="margin: 20px;">
<!--    <div class="el-image-father">-->
      <el-image v-for="(url, index) in urls" :key="index"  :src="require('@/assets/content_img/' + url)" lazy :preview-src-list="srcList" fit="scale-down" >
      </el-image>
<!--    </div>-->
  </el-scrollbar>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import datasets from "../../assets/json/datasets.json";

  export default defineComponent({
    props: {
      first: {
        type: String,
        // required: true,
        // default: "1"
      },
      second: {
        type: String,
        // required: true,
        // default: "14"
      },
      third: {
        type: String,
        default: null
      }
    },
    setup(props) {
      // const fileNames = datasets["1"]["1.4"].urls
      let fileNames = null
      props.third == null ? fileNames = datasets[props.first][props.second].urls : fileNames = datasets[props.first][props.second][props.third].urls
      // const fileNames = datasets[props.first][props.second].urls
      const urls = ref(fileNames)
      const srcList = []
      for(let i = 0; i<fileNames.length; i++){
        srcList.push(require('@/assets/content_img/' + fileNames[i]))
      }
      return {
        showViewer: false,
        urls,
        srcList,
      }
    },
  })
</script>
<style scoped lang="scss">
    .demo-image__lazy{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 300px;
      overflow-y: auto;

    }
    .demo-image__lazy .el-image{
        display: block;
        min-height: 200px;
        margin-bottom: 10px;
      width: 300px;
      //height: 300px;
    }
    .demo-image__lazy .el-image:last-child{
        margin-bottom: 0;
    }
</style>