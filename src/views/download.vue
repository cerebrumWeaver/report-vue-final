<template>
    <div class="contain">
        <div class="tableArea">
            <el-table v-loading="loading" :data="tableData" stripe>
                <!-- <template slot="empty" v-slot="scope">
                  <p>sadssadssadsadsdsadsa</p>
                </template> -->
                <el-table-column type="index" label="序号" width="100"></el-table-column>
                <el-table-column prop="fileOrgName" label="名称" min-width="180">
                    <template v-slot="scope">
                        触发下载函数
                        <div @click="downloadHandler(scope.row)">
                            <p style="color:#4880ff;cursor: pointer;">{{ scope.row.fileOrgName }}</p>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="createTime" label="数据日期" min-width="180">
                    <template v-slot="scope">
                        <div>
                            {{ scope.createTime1 }}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="remainDay" label="数据表类型" min-width="180">
                </el-table-column>
                <el-table-column prop="updateTime" label="上传时间" min-width="180">
                    <template v-slot="scope">
                        <div>
                            <!--{{ scope.row.updateTime | updateformat() }}-->
                            {{ scope.updateTime1 }}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="createUserName" label="上传人" min-width="180"></el-table-column>
            </el-table>

            <pagination :size="page.pageSize" :current="page.current" :total="page.total" @currentChange="handleCurrentChange" @sizeChange="handleSizeChange" />
        </div>
        <tips :dialogVisible="tipsVisible" @on-cancel="tipsVisible = false" @on-ok="enterCover"></tips>
    </div>
</template>
<script>
  import moment from 'moment';
  import tips from '../../components/tips';

  export default {
    props: {
        createTime: {
          type: Date,
          required: true
        },
      updateTime: {
        type: Date,
        required: true
      }
    },
    /*filters: {
      createformat(val) {
        return moment(val).format('YYYY/MM/DD');
      },
      updateformat(val) {
        return moment(val).format('MM/DD HH:mm');
      },
    },*/
    components: {
      tips,
    },
    data() {
      return {
        fileList: [],
        tableData: [],
        fileAgain: null,
        loading: false,
        tipsVisible: false,
        page: {
          total: 1,
          current: 1,
          pageSize: 5,
        },
      };
    },
    created() {
      this.readExcel();
    },
    methods: {
      // 下载当前表单，使用方式和get和post、put等接口请求方式一样
      downloadHandler(val) {
        this.$api.download(`/file/downloadFile?fileId=${val.id}`).then((res) => {
          console.log(res);
        });
      },
    },
    computed: {
      createTime1() {
        return moment(this.createTime).format('MM/DD HH:mm')
      },
      updateTime1() {
        return moment(this.updateTime).format('MM/DD HH:mm')
      },

    },
  };
</script>


