<template>
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1']">
                <el-submenu index="1">
                    <template #title><i class="el-icon-message"></i>1 项目信息</template>
                    <el-menu-item-group>
                        <template #title><router-link to="/">1.1 项目简介</router-link></template>
                        <!--<el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>-->
                    </el-menu-item-group>
                    <el-menu-item-group title="分组二">
                        <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
                    </el-menu-item-group>
                    <!--<el-submenu index="1-4">
                        <template #title>选项4</template>
                        <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                    </el-submenu>-->
                </el-submenu>
                <el-submenu index="2">
                    <template #title><i class="el-icon-menu"></i>2 功能富集分析</template>
                    <el-menu-item-group>
                        <template #title>2.1 GO富集分析</template>
                        <!--<el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>-->
                    </el-menu-item-group>
                    <!--<el-menu-item-group title="分组2">
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-menu-item-group>-->
                    <el-submenu index="2-4">
                        <template #title>选项4</template>
                        <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="3">
                    <template #title><i class="el-icon-setting"></i>3 互作网络分析</template>
                    <el-menu-item-group>
                        <template #title>3.1 蛋白互作网络表</template>
                        <template #title2>3.2 蛋白互作网络图</template>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="3-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="3-4">
                        <template #title>选项4</template>
                        <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
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

            <el-main>
                <el-table :data="tableData">
                    <el-table-column prop="date" label="日期" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script>
    import {defineComponent} from 'vue'
    export default defineComponent({
        name: 'About',
        setup(){

            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }
            return {
                tableData: Array(20).fill(item)
            }
        }
    })
</script>

<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }



    .el-aside {
        color: #ddd;
    }
</style>
