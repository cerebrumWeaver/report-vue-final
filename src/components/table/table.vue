<template>
  <el-table :data="tableDatasets" stripe max-height="400" style="">
      <el-table-column prop="Sample" label="Sample" sortable  />
      <el-table-column
        prop="TotalCleanRead"
        label="Total Clean Read"
        sortable
      />
      <el-table-column prop="MappingRate" label="Mapping Rate" sortable  />
    </el-table>
</template>

<script lang="ts">
// import {useStore} from "vuex"
// import {defineComponent,  computed} from "vue"
import { defineComponent } from "vue";
import datasets from "../../assets/json/datasets.json";
export default defineComponent({
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-08",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-06",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-07",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
    };
  },
  setup() {
    const tableDatas = datasets["1"]["1_2"].table_content;
    const tableDatasets = [];
    for (let i = 0; i < tableDatas.length; i++) {
      tableDatasets.push(tableDatas[i]);
    }
    /*let store = useStore()
    let table = computed(() => {
      return store.state.table01
    })*/
    return {
      // table,
      tableDatas,
      tableDatasets,
    };
  },
});
</script>
<style>
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 6px; /*滚动条宽度*/
  height: 8px; /*滚动条高度*/
  background-color: white;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 0px white;
  background-color: rgb(193, 193, 193); /*滚动条的背景颜色*/
  border-radius: 30px;
}
</style>

