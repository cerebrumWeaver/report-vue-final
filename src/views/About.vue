<template>
    <el-container style="height: 100%; border: 1px solid #eee" ref="homePage">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu efault-active="0"
                     class="el-menu-vertical-demo"
                     unique-opened
                     :collapse="isCollapse"
                     @open="handleOpen"
                     @close="handleClose"
                     model="vertical"
            >
                <el-submenu index="1">
                    <template #title><i class="el-icon-message"></i>1 项目信息</template>
                    <el-menu-item index="3-1"><a href="#page-1">1.1 项目简介</a></el-menu-item>
                    <el-menu-item index="3-2">1.2 分析方案</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template #title>
                        <i class="el-icon-message"></i>2 功能富集分析
                    </template>
                    <el-submenu index="2-1">
                        <template #title>2.1 GO富集分析</template>
                        <el-menu-item index="2-1-1">2.1.1 GO富集分析表</el-menu-item>
                        <el-menu-item index="2-1-2">2.1.1 GO富集分析柱状图</el-menu-item>
                        <el-menu-item index="2-1-3">2.1.1 GO富集分析气泡图</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="3">

                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <!--<el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <el-icon style="margin-right: 15px"><setting /></el-icon>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>View</el-dropdown-item>
                            <el-dropdown-item>Add</el-dropdown-item>
                            <el-dropdown-item>Delete</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <span>Tom</span>
            </el-header>-->

            <el-main>
                <div>
                <scroll-container>
                    <scroll-page id="page-1">
                        <div class="contentOne">
                            <div class="contA"><p>cellranger的细胞过滤是根据基因表达量进行自动识别，会有部分非正常细胞残留，
                                所以在进行亚群分类之前，我们首先使用Seurat对非正常细胞进行进一步过滤。
                                我们进行过滤的指标主要为以下三个</p></div>
                            <div class="contB" id="contB" ><content1></content1></div>
                        </div>
                    </scroll-page>

                    <scroll-page id="page-2">
                        <div class="contentOne">
                            <div class="contA">料车管理</div>
                            <div class="contB">料车管理</div>
                        </div>
                    </scroll-page>
                    <scroll-page id="page-3">
                        <div class="contentOne">
                            <div class="contA">细胞分化相关分析一直是研究人员广泛关注的问题，其与胚胎发育、组织修复、
                                疾病发生等多个研究领域紧密相关。单细胞转录组的特征是获得了大量细胞的转录本“快照”，
                                记录了样本中所有细胞的转录本，其中包含了多功能性较强的干细胞、
                                过渡阶段的中间细胞和发育成熟的功能细胞，这为细胞分化相关分析提供了基础。

                                拟时分析通过分析关键基因的表达模式，将所有细胞按照发育时间的先后排布在拟时间轴上，
                                模拟发育过程中的细胞分化过程。通过对细胞轨迹的分析，
                                我们可以挖掘出细胞分化过程中经历的细胞类型变化、伴随发育过程变化的动态变化基因、
                                祖细胞不同的分化命运等与生命发育息息相关的信息。</div>
                            <div class="contB">角色管理</div>
                        </div>
                    </scroll-page>
                    <scroll-page id="page-4">
                        <div class="contentOne">
                            <div class="contA">BOM信息</div>
                            <div class="contB">BOM信息</div>
                            <div class="contC">BOM信息</div>
                        </div>
                    </scroll-page>
                    <scroll-page id="page-5">
                        <div class="contentOne">
                            <div class="contA">消息中心</div>
                            <div class="contB">消息中心</div>
                            <div class="contC">消息中心</div>
                        </div>
                    </scroll-page>
                    <scroll-page id="page-6">
                        <div class="contentOne">
                            <div class="contA">订单管理</div>
                            <div class="contB">订单管理</div>
                            <div class="contC">订单管理</div>
                        </div>
                    </scroll-page>
                    <scroll-page id="page-7">
                        <div class="contentOne"></div>
                    </scroll-page>
                </scroll-container>
                </div>
            </el-main>
            <el-footer class="homeFooter">Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  /*import { /!*Message,*!/ Menu, /!*Setting*!/ } from '@element-plus/icons'*/
  import content1 from './01.vue'


  export default defineComponent({
    components: {
      content1,
    },
    data() {
      return {
        clientHeight:'',
      }
    },
    setup() {
      const isCollapse = ref(false)
      const handleOpen = (key, keyPath) => {
        console.log(key, keyPath)
      }
      const handleClose = (key, keyPath) => {
        console.log(key, keyPath)
      }

      return {
        /*tableData,*/
        isCollapse,
        handleOpen,
        handleClose,
      }
    },
    watch: {
      // 如果 `clientHeight` 发生改变，这个函数就会运行
      clientHeight: function () {
        this.changeFixed(this.clientHeight)
      }
    },
    methods: {
      changeFixed(clientHeight){ //动态修改样式
        // console.log(clientHeight);
        this.$refs.homePage.$el.style.height = clientHeight-20+'px';
      },
    },
    mounted() {
      // 获取浏览器可视区域高度
      this.clientHeight =   `${document.documentElement.clientHeight}`
      //console.log(self.clientHeight);
      window.onresize = function temp() {
        this.clientHeight = `${document.documentElement.clientHeight}`;
      };
    }
  })
</script>

<style>
    .el-header {
        background-color: #b3c0d1;
        color: var(--el-text-color-primary);
        line-height: 60px;
    }

    .scroll-container {
        display: block;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }

    .scroll-page {
        display: flex;
        /* align-items: center;
        justify-content: center; */
        height: 50%;
        width: 100%;
    }

    .homeFooter {
        background-color: #409eff;
    }

    .el-aside {
        color: var(--el-text-color-primary);
    }

    .contentOne {
        display: block;
        /* height: 250px; */
    }

    #page-1 {
         /*width: 180px;
         height: 180px;
         background-color: green;
         margin-top: 20px;*/
        height: 100px; background: #BBE8F2; top: 0 ; left: 0 ; width: 100%;text-align: left;
    }
</style>
