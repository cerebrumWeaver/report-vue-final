<template>
    <el-select v-model="selectValue"
               placeholder="选择文件下载"
               size="large"
    >
        <el-option
                v-for="item in downloadPaths"
                :key="item"
                :label="item"
                :value="item"
        >
        </el-option>
    </el-select>
    <el-button type="info" plain  v-if="selectValue!=''">
    <a :href=selectValue download>Download</a>
    </el-button>

</template>

<script lang="ts">
  // import { defineComponent, ref, computed } from "vue";
  import { defineComponent, ref} from "vue";
  // import {useStore} from "vuex"
  import datasets from "../../assets/json/datasets.json";


  export default defineComponent({
    data(){
      return{
        isEmpty:false,
      }
    },
    setup() {
      // let store = useStore()
      // let list = computed(()=> {
      //   return store.state.url
      // })
      const filePaths = datasets["1"]["1_3"].result_download
      const downloadPaths = []
      for(let i=0; i < filePaths.length; i++){
        // downloadPaths.push(require('@/assets/upload/download/' + filePaths[i]))
        downloadPaths.push(filePaths[i])
      }
      return {
        // options: ref([
        //   {
        //     value: "CleanBases.pdf",
        //     label: "CleanBases.pdf"
        //   },
        //   {
        //     value: "CleanBases.png",
        //     label: "CleanBases.png"
        //   },
        //   {
        //     value: "Option3",
        //     label: "Option3"
        //   },
        //   {
        //     value: "Option4",
        //     label: "Option4"
        //   },
        //   {
        //     value: "Option5",
        //     label: "Option5"
        //   }
        // ]),
        // list,
        selectValue: ref(""),
        filePaths,
        downloadPaths
      };
    },
    methods: {
      methods2: function() {

      }
    }
  });
</script>
