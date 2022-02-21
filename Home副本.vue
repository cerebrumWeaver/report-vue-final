<template>
    <el-container >
        <el-header class="homeHeader">
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <span>王小虎</span>
        </el-header>

        <el-container>
            <el-aside width="300px">
                <el-menu default-active="0"
                         class="el-menu-vertical-demo"
                         unique-opened
                         :collapse="isCollapse"
                         @open="handleOpen"
                         @close="handleClose">
                    <el-submenu index="1">
                        <template #title><i class="el-icon-message"></i>1 项目信息</template>
                        <el-menu-item>
                            <el-menu-item index="1-1"><a href="#page-1">1.1 项目简介</a>></el-menu-item>
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template #title><i class="el-icon-menu"></i>2 功能富集分析</template>
                        <el-menu-item-group index="2-1">
                            <template #title>2.1 GO富集分析
                                <el-menu-item index="2-1-1">2.1.1 GO富集分析表</el-menu-item>
                                <el-menu-item index="2-1-2">2.1.2 GO富集分析柱状图</el-menu-item>
                            </template>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template #title><i class="el-icon-menu"></i>3 互作网络分析</template>
                        <el-menu-item>
                            <el-menu-item index="3-1">3.1 蛋白互作网络表</el-menu-item>
                            <el-menu-item index="3-2">3.1 蛋白互作网络表</el-menu-item>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-main>
                <div>
                <scroll-container>
                    <scroll-page id="page-1">
                        <div class="contentOne">
                            <div class="contA"><p>申请领料申请领料申请领料申请领料申请领料申请领料申请领料申请领料申请领料
                                申请领料申请领料申请领料申请领料申请领料申请领料申请领料申请领料申请领料申请领料申请领料
                                申请领料申请领料申请领料申请领料申请领料申请领料申请领料申请领料</p></div>
                            <div class="contB" id="contB" >申请领料</div>
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
                            <div class="contA">角色管理</div>
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

<script>
  import { defineComponent } from "vue";

  import {findJson} from '../js/01.js'
  export default defineComponent({
    name: "About",
    setup() {

      const item = {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      };
      return {
        tableData: Array(20).fill(item)
      };
    },
    methods:{
      methods1:function(){
       return  findJson();
      }
    }

  });
</script>

<style scoped>
    /*.el-header {*/
    /*    background-color: #B3C0D1;*/
    /*    color: #333;*/
    /*    line-height: 60px;*/
    /*}*/

    .homeHeader {
        background-color: #409eff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 15px;
        box-sizing: border-box;
    }

    .homeFooter {
        background-color: #409eff;
    }


   /* .el-aside {
        color: #BBE8F2;
    }*/

    scroll-container {
        display: block;
        width: 80%;
        height: 570px;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }

    scroll-page {
        display: flex;
        /* align-items: center;
        justify-content: center; */
        height: 50%;
        width: 100%;
    }

    a {
        display: block;
        text-decoration: none;
    }

    .contentOne {
        display: block;
        /* height: 250px; */
    }
    #page-1 {
       /* width: 180px;
        height: 180px;
        background-color: green;
        margin-top: 20px;*/
        height: 100px; background: #BBE8F2;top: 0 ; left: 0 ; width: 100%;text-align: left;
    }
</style>
