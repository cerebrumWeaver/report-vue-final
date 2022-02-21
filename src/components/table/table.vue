<template>
    <el-table :data="tableDatasets" border stripe>
        <el-table-column prop="Sample" label="Sample" width="180" sortable />
        <el-table-column prop="TotalCleanRead" label="Total Clean Read" width="180" sortable />
        <el-table-column prop="MappingRate" label="Mapping Rate" sortable />
    </el-table>
</template>

<script lang="ts">
    // import {useStore} from "vuex"
    // import {defineComponent,  computed} from "vue"
    import {defineComponent} from "vue"
    import datasets from "../../assets/json/datasets.json";
  export default defineComponent({
    data() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-08',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-06',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-07',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
        ],
      }
    },
    setup(){
      const tableDatas = datasets["1"]["1_2"].table_content
      const tableDatasets = []
      for(let i = 0; i < tableDatas.length; i++){
        tableDatasets.push(tableDatas[i])
      }
      /*let store = useStore()
      let table = computed(() => {
        return store.state.table01
      })*/
      return {
        // table,
        tableDatas,
        tableDatasets
      }

    }
  })
</script>
