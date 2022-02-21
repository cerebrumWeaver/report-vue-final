<!--:” 是指令 “v-bind”的缩写，“@”是指令“v-on”的缩写；-->
<template>
    <!--    <div id="home">-->
    <el-container>
        <el-aside width="280px" style="background-color: var(--el-menu-background-color);" v-show="toggle">
            <el-scrollbar>
            <el-menu efault-active="0"
                     class="el-menu-vertical-demo"
                     :collapse="isCollapse"
            >
                <el-submenu-item index="1">
                    <el-submenu index="1">
                        <template #title><i class="el-icon-menu"></i>1 项目信息</template>
                        <a @click='goAnchor("page-11")'><el-menu-item index="1-1">1.1 项目简介</el-menu-item></a>
                       <a @click='goAnchor("page-12")'><el-menu-item index="1-2">1.2 分析方案</el-menu-item></a>
                       <a @click='goAnchor("page-13")'><el-menu-item index="1-3">1.3 差异表达分析</el-menu-item></a>
                        <el-menu-item index="1-4"><a @click='goAnchor("page-14")'>1.4 PCA主成分分析图（Figure）</a>
                        </el-menu-item>
                        <el-menu-item index="1-5"><a @click='goAnchor("page-15")'>1.5 PCA主成分分析表（Table）</a>
                        </el-menu-item>
                        <el-menu-item index="1-6"><a @click='goAnchor("page-16")'>1.6 火山图（Figure）</a></el-menu-item>
                        <el-menu-item index="1-7"><a @click='goAnchor("page-17")'>1.7 热 图（Figure）</a></el-menu-item>
                    </el-submenu>
                </el-submenu-item>

                <el-submenu-item index="2">
                    <el-submenu index="2">
                        <template #title>
                            <i class="el-icon-menu"></i>2 功能富集分析
                        </template>
                        <el-submenu index="2-1">
                            <template #title><i class="el-icon-menu"></i>2.1 GO富集分析</template>
                            <el-menu-item index="2-1-1"><a @click='goAnchor("page-211")'>2.1.1 GO富集分析表</a>
                            </el-menu-item>
                            <el-menu-item index="2-1-2"><a @click='goAnchor("page-212")'>2.1.2 GO富集分析柱状图</a>
                            </el-menu-item>
                            <el-menu-item index="2-1-3"><a @click='goAnchor("page-213")'>2.1.3 GO富集分析气泡图</a>
                            </el-menu-item>
                            <el-menu-item index="2-1-4"><a @click='goAnchor("page-214")'>2.1.4 GO富集分析网络图</a>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="2-2">
                            <template #title><i class="el-icon-menu"></i>2.2 KEGG富集分析</template>
                            <el-menu-item index="2-2-1"><a @click='goAnchor("page-221")'>2.2.1 KEGG富集分析表</a>
                            </el-menu-item>
                            <el-menu-item index="2-2-2"><a @click='goAnchor("page-222")'>2.2.2 KEGG富集分析柱状图</a>
                            </el-menu-item>
                            <el-menu-item index="2-2-3"><a @click='goAnchor("page-223")'>2.2.3 KEGG富集分析气泡图</a>
                            </el-menu-item>
                            <el-menu-item index="2-2-4"><a @click='goAnchor("page-224")'>2.2.4 KEGG富集分析网络图</a>
                            </el-menu-item>
                            <el-menu-item index="2-2-5"><a @click='goAnchor("page-225")'>2.2.5 KEGG富集分析通路图</a>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="2-3">
                            <template #title><i class="el-icon-menu"></i>2.3 GSEA富集分析</template>
                            <el-menu-item index="2-3-1"><a @click='goAnchor("page-231")'>2.3.1 GSEA富集分析表</a>
                            </el-menu-item>
                            <el-menu-item index="2-3-2"><a @click='goAnchor("page-232")'>2.3.2 GSEA富集分析图</a>
                            </el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-submenu-item>

                <el-submenu-item index="3">
                    <el-submenu index="3">
                        <template #title><i class="el-icon-menu"></i>3 互作网络分析</template>
                        <el-menu-item index="3-1"><a @click='goAnchor("page-31")'>3.1 蛋白互作网络表</a></el-menu-item>
                        <el-menu-item index="3-2"><a @click='goAnchor("page-32")'>3.2 蛋白互作网络图</a></el-menu-item>
                    </el-submenu>
                </el-submenu-item>

                <el-submenu-item index="4">
                    <el-submenu index="4">
                        <template #title><i class="el-icon-menu"></i>4 附录</template>
                        <el-menu-item index="4-1"><a @click='goAnchor("page-41")'>4.1 参考文献</a></el-menu-item>
                        <el-menu-item index="4-2"><a @click='goAnchor("page-42")'>4.2 软件与方法说明</a></el-menu-item>
                        <el-menu-item index="4-3"><a @click='goAnchor("page-43")'>4.3 结果目录</a></el-menu-item>
                    </el-submenu>
                </el-submenu-item>
            </el-menu>
            <br>
            <br>
            <br>
            <br>
            <el-footer>
                网址：<a href="http://www.helixlife.cn" style="text-decoration: none; color: blue">www.helixlife.cn</a><br><br>
                邮箱：jiejue@helixlife.com.cn<br><br>
                电话：021-60718191<br><br>
                微信：
                <wc></wc>
            </el-footer>
            </el-scrollbar>
        </el-aside>

        <!--        ======================================================================================================================================================-->

        <el-container style="height: 100%; margin: 0; padding: 0">
            <el-main style="padding: 2px; margin: 0;">
                <div class="page-component__scroll" style="height: 100%">
                    <el-scrollbar class="scrollbar" id="demo" >
                        <scroll-container>
                            <scroll-page id="page-11" class="s-page">
                                <!--                            <h2><b>1 项目信息</b></h2>-->
                                <h2><b>{{ title_1 }}</b></h2>
                                <h3>{{ title_1_1 }}</h3>
                                <div class="contentOne">
                                    <div class="contA"><p v-for="(item, index) in info_1_1" :key="index"> {{ item }} </p></div>
                                    <div class="contB">
                                    </div>
                                </div>
                            </scroll-page>

                            <scroll-page id="page-12" class="s-page">
                                <h3> {{ title_1_2 }} </h3>
                                <div class="contentOne">
                                    <div class="contA" v-for="(item, index) in info_1_2" :key="index">{{ item }}</div>
                                    <br/>
                                    <div class="contB"><h5>{{ table_title_1_2 }}</h5>
                                        <table01></table01>
                                    </div>
                                    <p class="description" v-for="(item, index) in table_description_1_2" :key="index">
                                        {{ item }}
                                    </p>
                                    <p class="result" v-for="(item, index) in result_1_2" :key="index">
                                        {{ item }}
                                    </p>
                                </div>
                            </scroll-page>

                            <scroll-page id="page-13" class="s-page">
                                <h3>{{ title_1_3 }}</h3>
                                <div class="contentOne">
                                    <div class="contA" v-for="(item, index) in info_1_3" :key="index">{{ item }}</div>
                                    <br/>
                                    <div class="contB"><h5>{{ table_title_1_3 }}</h5>
                                        <table01></table01>
                                    </div>
                                    <p class="description" v-for="(item, index) in table_description_1_3" :key="index">
                                        {{ item }}
                                    </p>
                                    <p class="result" v-for="(item, index) in result_1_3" :key="index">
                                        {{ item }}
                                    </p>
                                    <select01></select01>
                                </div>
                            </scroll-page>

                            <scroll-page id="page-14" class="s-page">
                                <h3>{{ title_1_4 }}</h3>
                                <div class="contentOne">
                                    <div class="contA" v-for="(item, index) in info_1_4" :key="index">{{ item }}</div>
                                    <br/>
                                    <div class="contB">
                                        <figure-alone :first="'1'" :second="'1_4'"></figure-alone>
                                        <h5>{{ figure_title_1_4 }}</h5>
                                    </div>
                                    <p class="description" v-for="(item, index) in figure_description_1_4" :key="index">
                                        {{ item }}
                                    </p>
                                    <p class="result" v-for="(item, index) in result_1_4" :key="index">
                                        {{ item }}
                                    </p>
                                    <select01></select01>
                                </div>
                            </scroll-page>

                            <scroll-page id="page-15" class="s-page">
                                <h3>{{ title_1_5 }}</h3>
                                <div class="contentOne">
                                    <div class="contA" v-for="(item, index) in info_1_4" :key="index">{{ item }}</div>
                                    <br/>
                                    <div class="contB"><h5>{{ table_title_1_5 }}</h5>
                                        <table01></table01>
                                    </div>
                                    <p class="description" v-for="(item, index) in table_description_1_5" :key="index">
                                        {{ item }}
                                    </p>
                                    <p class="result" v-for="(item, index) in result_1_5" :key="index">
                                        {{ item }}
                                    </p>
                                    <select01></select01>
                                </div>
                            </scroll-page>

                            <scroll-page id="page-16" class="s-page">
                                <h3>{{ title_1_6 }}</h3>
                                <div class="contentOne">
                                    <div class="contA" v-for="(item, index) in info_1_6" :key="index">{{ item }}</div>
                                    <br/>
                                    <div class="contB">
                                        <figure-alone :first="'1'" :second="'1_6'"></figure-alone>
                                        <h5>{{ figure_title_1_6 }}</h5>
                                    </div>
                                    <p class="description" v-for="(item, index) in figure_description_1_6" :key="index">
                                        {{ item }}
                                    </p>
                                    <p class="result" v-for="(item, index) in result_1_6" :key="index">
                                        {{ item }}
                                    </p>
                                    <select01></select01>
                                </div>
                            </scroll-page>

                            <scroll-page id="page-17" class="s-page">
                                <h3>{{ title_1_7 }}</h3>
                                <div class="contentOne">
                                    <div class="contA" v-for="(item, index) in info_1_7" :key="index">{{ item }}</div>
                                    <br/>
                                    <div class="contB">
                                        <figure-alone :first="'1'" :second="'1_7'"></figure-alone>
                                        <h5>{{ figure_title_1_7 }}</h5>
                                    </div>
                                    <br/>
                                    <p class="description" v-for="(item, index) in figure_description_1_7" :key="index">
                                        {{ item }}
                                    </p>
                                    <p class="result" v-for="(item, index) in result_1_7" :key="index">
                                        {{ item }}
                                    </p>
                                    <select01></select01>
                                </div>
                            </scroll-page>

                            <scroll-page id="page-211" class="s-page">
                                <h2><b>{{ title_2 }}</b></h2>
                                <h3>{{ title_2_1 }}</h3>
                                <div class="contentOne">
                                    <div class="contA"><p v-for="(item, index) in info_2_1" :key="index"> {{ item }} </p></div>
                                    <div class="contB">
                                    </div>
                                </div>
                                <h4>2.1.1 GO富集分析表（Table）</h4>

                            </scroll-page>

                            <scroll-page id="page-212" class="s-page">
                                <h4>{{ title_2_1_2 }}</h4>
                                <div class="contentOne">
                                    <div class="contA"><p v-for="(item, index) in info_2_1_2" :key="index"> {{ item }} </p></div>
                                    <br/>
                                    <div class="contB">
                                        <figure-alone :first="'2'" :second="'2_1'" :third="'2_1_2'"></figure-alone>
                                        <h5>{{ figure_title_2_1_2 }}</h5>
                                    </div>
                                    <br/>
                                    <p class="description" v-for="(item, index) in figure_description_2_1_2" :key="index">
                                        {{ item }}
                                    </p>
                                    <p class="result" v-for="(item, index) in result_2_1_2" :key="index">
                                        {{ item }}
                                    </p>
                                    <select01></select01>
                                </div>
                            </scroll-page>

                            <scroll-page id="page-213" class="s-page">
                                <h4>{{ title_2_1_3 }}</h4>
                                <div class="contentOne">
                                    <div class="contA"><p v-for="(item, index) in info_2_1_3" :key="index"> {{ item }} </p></div>
                                    <br/>
                                    <div class="contB">
                                        <figure-alone :first="'2'" :second="'2_1'" :third="'2_1_3'"></figure-alone>
                                        <h5>{{ figure_title_2_1_3 }}</h5>
                                    </div>
                                    <br/>
                                    <p class="description" v-for="(item, index) in figure_description_2_1_3" :key="index">
                                        {{ item }}
                                    </p>
                                    <p class="result" v-for="(item, index) in result_2_1_3" :key="index">
                                        {{ item }}
                                    </p>
                                    <select01></select01>
                                </div>
                            </scroll-page>

                            <scroll-page id="page-214" class="s-page">
                                <h4>{{ title_2_1_4 }}</h4>
                                <div class="contentOne">
                                    <div class="contA"><p v-for="(item, index) in info_2_1_4" :key="index"> {{ item }} </p></div>
                                    <br/>
                                    <div class="contB">
                                        <figure-alone :first="'2'" :second="'2_1'" :third="'2_1_4'"></figure-alone>
                                        <h5>{{ figure_title_2_1_4 }}</h5>
                                    </div>
                                    <br/>
                                    <p class="description" v-for="(item, index) in figure_description_2_1_4" :key="index">
                                        {{ item }}
                                    </p>
                                    <p class="result" v-for="(item, index) in result_2_1_4" :key="index">
                                        {{ item }}
                                    </p>
                                    <select01></select01>
                                </div>
                            </scroll-page>

                            <scroll-page id="page-221" class="s-page">
                                <h3>{{ title_2_2 }}</h3>
                                <p v-for="(item, index) in info_2_2" :key="index"> {{ item }} </p>
                                <h3>{{ title_2_2_1 }}</h3>
                                <div class="contentOne">
                                    <div class="contA"><p v-for="(item, index) in info_2_2_1" :key="index">{{ item }}</p></div>
                                    <br/>
                                    <div class="contB"><h5>{{ table_title_2_2_1 }}</h5>
                                        <table01></table01>
                                    </div>
                                    <p class="description" v-for="(item, index) in table_description_2_2_1" :key="index">
                                        {{ item }}
                                    </p>
                                    <p class="result" v-for="(item, index) in result_2_2_1" :key="index">
                                        {{ item }}
                                    </p>
                                </div>
                            </scroll-page>

                            <scroll-page id="page-222" class="s-page">
                                <h4>{{ title_2_2_2 }}</h4>
                                <div class="contentOne">
                                    <div class="contA"><p v-for="(item, index) in info_2_2_2" :key="index">{{ item }}</p></div>
                                    <br/>
                                    <div class="contB">
                                        <figure-alone :first="'2'" :second="'2_2'" :third="'2_2_2'"></figure-alone>
                                        <h5>{{ figure_title_2_2_2 }}</h5>
                                    </div>
                                    <p class="description" v-for="(item, index) in figure_description_2_2_2" :key="index">
                                        {{ item }}
                                    </p>
                                    <p class="result" v-for="(item, index) in result_2_2_2" :key="index">
                                        {{ item }}
                                    </p>
                                    <select01></select01>
                                </div>
                            </scroll-page>

                            <scroll-page id="page-223" class="s-page">
                                <h4>{{ title_2_2_3 }}</h4>
                                <div class="contentOne">
                                    <div class="contA"><p v-for="(item, index) in info_2_2_3" :key="index">{{ item }}</p></div>
                                    <br/>
                                    <div class="contB">
                                        <figure-alone :first="'2'" :second="'2_2'" :third="'2_2_3'"></figure-alone>
                                        <h5>{{ figure_title_2_2_3 }}</h5>
                                    </div>
                                    <p class="description" v-for="(item, index) in figure_description_2_2_3" :key="index">
                                        {{ item }}
                                    </p>
                                    <p class="result" v-for="(item, index) in result_2_2_3" :key="index">
                                        {{ item }}
                                    </p>
                                    <select01></select01>
                                </div>
                            </scroll-page>

                            <scroll-page id="page-224" class="s-page">
                                <h4>{{ title_2_2_4 }}</h4>
                                <div class="contentOne">
                                    <div class="contA"><p v-for="(item, index) in info_2_2_4" :key="index">{{ item }}</p></div>
                                    <br/>
                                    <div class="contB">
                                        <figure-alone :first="'2'" :second="'2_2'" :third="'2_2_4'"></figure-alone>
                                        <h5>{{ figure_title_2_2_4 }}</h5>
                                    </div>
                                    <p class="description" v-for="(item, index) in figure_description_2_2_4" :key="index">
                                        {{ item }}
                                    </p>
                                    <p class="result" v-for="(item, index) in result_2_2_4" :key="index">
                                        {{ item }}
                                    </p>
                                    <select01></select01>
                                </div>
                            </scroll-page>

                            <scroll-page id="page-225" class="s-page">
                                <h4>{{ title_2_2_5 }}</h4>
                                <div class="contentOne">
                                    <div class="contA"><p v-for="(item, index) in info_2_2_5" :key="index">{{ item }}</p></div>
                                    <br/>
                                    <div class="contB">
                                        <figure-alone :first="'2'" :second="'2_2'" :third="'2_2_5'"></figure-alone>
                                        <h5 style="clear: both">{{ figure_title_2_2_5 }}</h5>
                                    </div>
                                    <p class="description" v-for="(item, index) in figure_description_2_2_5" :key="index">
                                        {{ item }}
                                    </p>
                                    <p class="result" v-for="(item, index) in result_2_2_5" :key="index">
                                        {{ item }}
                                    </p>
                                    <select01></select01>
                                </div>
                            </scroll-page>

                            <scroll-page id="page-231" class="s-page">
                                <h3>{{ title_2_3 }}</h3>
                                <p v-for="(item, index) in info_2_2" :key="index"> {{ item }} </p>
                                <h3>{{ title_2_3_1 }}</h3>
                                <div class="contentOne">
                                    <div class="contA"><p v-for="(item, index) in info_2_3_1" :key="index">{{ item }}</p></div>
                                    <br/>
                                    <div class="contB"><h5>{{ table_title_2_3_1 }}</h5>
                                        <table01></table01>
                                    </div>
                                    <p class="description" v-for="(item, index) in table_description_2_3_1" :key="index">
                                        {{ item }}
                                    </p>
                                    <p class="result" v-for="(item, index) in result_2_3_1" :key="index">
                                        {{ item }}
                                    </p>
                                    <select01></select01>
                                </div>
                            </scroll-page>

                            <scroll-page id="page-232" class="s-page">
                                <h4>{{ title_2_3_2 }}</h4>
                                <div class="contentOne">
                                    <div class="contA"><p v-for="(item, index) in info_2_3_2" :key="index">{{ item }}</p></div>
                                    <br/>
                                    <div class="contB">
                                        <figure-alone :first="'2'" :second="'2_3'" :third="'2_3_2'"></figure-alone>
                                        <h5>{{ figure_title_2_3_2 }}</h5>
                                    </div>
                                    <p class="description" v-for="(item, index) in figure_description_2_3_2" :key="index">
                                        {{ item }}
                                    </p>
                                    <p class="result" v-for="(item, index) in result_2_3_2" :key="index">
                                        {{ item }}
                                    </p>
                                    <select01></select01>
                                </div>
                            </scroll-page>

                            <scroll-page id="page-31" class="s-page">
                                <h3>{{ title_3 }}</h3>
                                <p v-for="(item, index) in info_3" :key="index"> {{ item }} </p>
                                <h3>{{ title_3_1 }}</h3>
                                <div class="contentOne">
                                    <div class="contA"><p v-for="(item, index) in info_3_1" :key="index">{{ item }}</p></div>
                                    <br/>
                                    <div class="contB"><h5>{{ table_title_3_1 }}</h5>
                                        <table01></table01>
                                    </div>
                                    <p class="description" v-for="(item, index) in table_description_3_1" :key="index">
                                        {{ item }}
                                    </p>
                                    <p class="result" v-for="(item, index) in result_3_1" :key="index">
                                        {{ item }}
                                    </p>
                                    <select01></select01>
                                </div>
                            </scroll-page>

                            <scroll-page id="page-32" class="s-page">
                                <h4>{{ title_3_2 }}</h4>
                                <div class="contentOne">
                                    <div class="contA"><p v-for="(item, index) in info_3_2" :key="index">{{ item }}</p></div>
                                    <br/>
                                    <div class="contB">
                                        <figure-alone :first="'3'" :second="'3_2'"></figure-alone>
                                        <h5>{{ figure_title_3_2 }}</h5>
                                    </div>
                                    <p class="description" v-for="(item, index) in figure_description_3_2" :key="index">
                                        {{ item }}
                                    </p>
                                    <p class="result" v-for="(item, index) in result_3_2" :key="index">
                                        {{ item }}
                                    </p>
                                    <select01></select01>
                                </div>
                            </scroll-page>

                            <scroll-page id="page-41" class="s-page">
                                <h2><b>{{ title_4 }}</b></h2>
                                <h4>{{ title_4_1 }}</h4>
                                <div class="contentOne">
                                    <div class="contA"><p v-for="(item, index) in info_4_1" :key="index">{{ item }}</p></div>
                                </div>
                            </scroll-page>

                            <scroll-page id="page-42" class="s-page">
                                <h4>{{ title_4_2 }}</h4>
                                <div class="contentOne">
                                    <div class="contA"><p v-for="(item, index) in info_4_2" :key="index">{{ item }}</p></div>
                                    <br/>
                                    <div class="contB">
                                        <p>转录组分析的各种软件说明及分析方法的中英文版介绍下载链接：</p>
                                        <h6>软件说明及分析方法下载链接：</h6>
                                        <div>
                                            <select01></select01>
                                        </div>
                                    </div>
                                    <div class="contB">
                                        <p>结题报告文件打开方式说明下载链接：</p>
                                        <h6>文件打开方式指南下载链接：</h6>
                                        <div>
                                            <select01></select01>
                                        </div>
                                    </div>
                                    <div class="contB">
                                        <p>结题文件解读帮助文档下载链接：</p>
                                        <h6>结题文件解读帮助文档下载链接：</h6>
                                        <div>
                                            <select01></select01>
                                        </div>
                                    </div>
                                </div>
                            </scroll-page>

                        </scroll-container>
                    </el-scrollbar>
                    <el-backtop
                            target=".page-component__scroll .el-scrollbar__wrap"
                            :bottom="100"
                            :visibility-height="50"
                    ></el-backtop>
                </div>

            </el-main>
            <el-footer style="padding: 0px" class="homeFooter">
                <el-switch style="border: 0px" active-text="展开" inactive-text="隐藏" v-model="toggle"/>
                <span></span>
                <el-button type="primary" style="float: right;" id="pdf" size="mini" @click=Pdf()>导出PDF</el-button>
            </el-footer>
        </el-container>
    </el-container>

    <!--    </div>-->
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import table01 from "../components/table/table";
  import select01 from "../components/download/select";
  import figureAlone from "../components/figure/figure.vue";
  import datasets from "../assets/json/datasets.json";
  import wc from "../components/weChat";


  export default defineComponent({
    props: {},
    components: {
      table01,
      select01,
      figureAlone,
      wc
    },
    data() {
      return {
        clientHeight: "",
        toggle: true,
        show: "",
        urls_1_4: datasets["1"]["1_4"].urls,
        //----------------------1.1---------------------------
        title_1: datasets["1"].title,
        title_1_1: datasets["1"]["1_1"].title,
        info_1_1: datasets["1"]["1_1"].info,
        //----------------------1.2---------------------------
        title_1_2: datasets["1"]["1_2"].title,
        info_1_2: datasets["1"]["1_2"].info,
        table_title_1_2: datasets["1"]["1_2"].table_title,
        table_content_1_2: datasets["1"]["1_2"].table_content,
        table_description_1_2: datasets["1"]["1_2"].table_descriptions,
        result_1_2: datasets["1"]["1_2"].result,
        result_download_1_2: datasets["1"]["1_2"].result_download,
        result2_1_2: datasets["1"]["1_2"].result2,
        result_download2_1_2: datasets["1"]["1_2"].result_download2,
        //----------------------1.3---------------------------
        title_1_3: datasets["1"]["1_3"].title,
        info_1_3: datasets["1"]["1_3"].info,
        table_title_1_3: datasets["1"]["1_3"].table_title,
        table_content_1_3: datasets["1"]["1_3"].table_content,
        table_description_1_3: datasets["1"]["1_3"].table_descriptions,
        result_1_3: datasets["1"]["1_3"].result,
        result_download_1_3: datasets["1"]["1_3"].result_download,
        result2_1_3: datasets["1"]["1_3"].result2,
        result_download2_1_3: datasets["1"]["1_3"].result_download2,
        //----------------------1.4---------------------------
        title_1_4: datasets["1"]["1_4"].title,
        info_1_4: datasets["1"]["1_4"].info,
        figure_title_1_4: datasets["1"]["1_4"].figure_title,
        figure_content_1_4: datasets["1"]["1_4"].figure_content,
        figure_description_1_4: datasets["1"]["1_4"].figure_descriptions,
        result_1_4: datasets["1"]["1_4"].result,
        result_download_1_4: datasets["1"]["1_4"].result_download,
        result2_1_4: datasets["1"]["1_4"].result2,
        result_download2_1_4: datasets["1"]["1_4"].result_download2,
        //----------------------1.5---------------------------
        title_1_5: datasets["1"]["1_5"].title,
        info_1_5: datasets["1"]["1_5"].info,
        table_title_1_5: datasets["1"]["1_5"].table_title,
        table_content_1_5: datasets["1"]["1_5"].table_content,
        table_description_1_5: datasets["1"]["1_5"].table_descriptions,
        result_1_5: datasets["1"]["1_5"].result,
        result_download_1_5: datasets["1"]["1_5"].result_download,
        result2_1_5: datasets["1"]["1_5"].result2,
        result_download2_1_5: datasets["1"]["1_5"].result_download2,
        //----------------------1.6---------------------------
        title_1_6: datasets["1"]["1_6"].title,
        info_1_6: datasets["1"]["1_6"].info,
        figure_title_1_6: datasets["1"]["1_6"].figure_title,
        figure_content_1_6: datasets["1"]["1_6"].figure_content,
        figure_description_1_6: datasets["1"]["1_6"].figure_descriptions,
        result_1_6: datasets["1"]["1_6"].result,
        result_download_1_6: datasets["1"]["1_6"].result_download,
        result2_1_6: datasets["1"]["1_6"].result2,
        result_download2_1_6: datasets["1"]["1_6"].result_download2,
        //----------------------1.7---------------------------
        title_1_7: datasets["1"]["1_7"].title,
        info_1_7: datasets["1"]["1_7"].info,
        figure_title_1_7: datasets["1"]["1_7"].figure_title,
        figure_content_1_7: datasets["1"]["1_7"].figure_content,
        figure_description_1_7: datasets["1"]["1_7"].figure_descriptions,
        result_1_7: datasets["1"]["1_7"].result,
        result_download_1_7: datasets["1"]["1_7"].result_download,
        result2_1_7: datasets["1"]["1_7"].result2,
        result_download2_1_7: datasets["1"]["1_7"].result_download2,
        //----------------------2.1---------------------------
        title_2: datasets["2"].title,
        title_2_1: datasets["2"]["2_1"].title,
        info_2_1: datasets["2"]["2_1"].info,
        //----------------------2.1.2---------------------------
        title_2_1_2: datasets["2"]["2_1"]["2_1_2"].title,
        info_2_1_2: datasets["2"]["2_1"]["2_1_2"].info,
        figure_title_2_1_2: datasets["2"]["2_1"]["2_1_2"].figure_title,
        figure_content_2_1_2: datasets["2"]["2_1"]["2_1_2"].figure_content,
        figure_description_2_1_2: datasets["2"]["2_1"]["2_1_2"].figure_descriptions,
        result_2_1_2: datasets["2"]["2_1"]["2_1_2"].result,
        result_download_2_1_2: datasets["2"]["2_1"]["2_1_2"].result_download,
        result2_2_1_2: datasets["2"]["2_1"]["2_1_2"].result2,
        result_download2_2_1_2: datasets["2"]["2_1"]["2_1_2"].result_download2,
        //----------------------2.1.3---------------------------
        title_2_1_3: datasets["2"]["2_1"]["2_1_3"].title,
        info_2_1_3: datasets["2"]["2_1"]["2_1_3"].info,
        figure_title_2_1_3: datasets["2"]["2_1"]["2_1_3"].figure_title,
        figure_content_2_1_3: datasets["2"]["2_1"]["2_1_3"].figure_content,
        figure_description_2_1_3: datasets["2"]["2_1"]["2_1_3"].figure_descriptions,
        result_2_1_3: datasets["2"]["2_1"]["2_1_3"].result,
        result_download_2_1_3: datasets["2"]["2_1"]["2_1_3"].result_download,
        result2_2_1_3: datasets["2"]["2_1"]["2_1_3"].result2,
        result_download2_2_1_3: datasets["2"]["2_1"]["2_1_3"].result_download2,
        //----------------------2.1.4---------------------------
        title_2_1_4: datasets["2"]["2_1"]["2_1_4"].title,
        info_2_1_4: datasets["2"]["2_1"]["2_1_4"].info,
        figure_title_2_1_4: datasets["2"]["2_1"]["2_1_4"].figure_title,
        figure_content_2_1_4: datasets["2"]["2_1"]["2_1_4"].figure_content,
        figure_description_2_1_4: datasets["2"]["2_1"]["2_1_4"].figure_descriptions,
        result_2_1_4: datasets["2"]["2_1"]["2_1_4"].result,
        result_download_2_1_4: datasets["2"]["2_1"]["2_1_4"].result_download,
        result2_2_1_4: datasets["2"]["2_1"]["2_1_4"].result2,
        result_download2_2_1_4: datasets["2"]["2_1"]["2_1_4"].result_download2,
        //----------------------2.2---------------------------
        title_2_2: datasets["2"]["2_2"].title,
        info_2_2: datasets["2"]["2_2"].info,
        title_2_2_1: datasets["2"]["2_2"]["2_2_1"].title,
        info_2_2_1: datasets["2"]["2_2"]["2_2_1"].info,
        table_title_2_2_1: datasets["2"]["2_2"]["2_2_1"].table_title,
        table_content_2_2_1: datasets["2"]["2_2"]["2_2_1"].table_content,
        table_description_2_2_1: datasets["2"]["2_2"]["2_2_1"].table_descriptions,
        result_2_2_1: datasets["2"]["2_2"]["2_2_1"].result,
        result_download_2_2_1: datasets["2"]["2_2"]["2_2_1"].result_download,
        result2_2_2_1: datasets["2"]["2_2"]["2_2_1"].result2,
        result_download2_2_2_1: datasets["2"]["2_2"]["2_2_1"].result_download2,
        //----------------------2.2.2---------------------------
        title_2_2_2: datasets["2"]["2_2"]["2_2_2"].title,
        info_2_2_2: datasets["2"]["2_2"]["2_2_2"].info,
        figure_title_2_2_2: datasets["2"]["2_2"]["2_2_2"].figure_title,
        figure_content_2_2_2: datasets["2"]["2_2"]["2_2_2"].figure_content,
        figure_description_2_2_2: datasets["2"]["2_2"]["2_2_2"].figure_descriptions,
        result_2_2_2: datasets["2"]["2_2"]["2_2_2"].result,
        result_download_2_2_2: datasets["2"]["2_2"]["2_2_2"].result_download,
        result2_2_2_2: datasets["2"]["2_2"]["2_2_2"].result2,
        result_download2_2_2_2: datasets["2"]["2_2"]["2_2_2"].result_download2,
        //----------------------2.2.3---------------------------
        title_2_2_3: datasets["2"]["2_2"]["2_2_3"].title,
        info_2_2_3: datasets["2"]["2_2"]["2_2_3"].info,
        figure_title_2_2_3: datasets["2"]["2_2"]["2_2_3"].figure_title,
        figure_content_2_2_3: datasets["2"]["2_2"]["2_2_3"].figure_content,
        figure_description_2_2_3: datasets["2"]["2_2"]["2_2_3"].figure_descriptions,
        result_2_2_3: datasets["2"]["2_2"]["2_2_3"].result,
        result_download_2_2_3: datasets["2"]["2_2"]["2_2_3"].result_download,
        result2_2_2_3: datasets["2"]["2_2"]["2_2_3"].result2,
        result_download2_2_2_3: datasets["2"]["2_2"]["2_2_3"].result_download2,
        //----------------------2.2.4---------------------------
        title_2_2_4: datasets["2"]["2_2"]["2_2_4"].title,
        info_2_2_4: datasets["2"]["2_2"]["2_2_4"].info,
        figure_title_2_2_4: datasets["2"]["2_2"]["2_2_4"].figure_title,
        figure_content_2_2_4: datasets["2"]["2_2"]["2_2_4"].figure_content,
        figure_description_2_2_4: datasets["2"]["2_2"]["2_2_4"].figure_descriptions,
        result_2_2_4: datasets["2"]["2_2"]["2_2_4"].result,
        result_download_2_2_4: datasets["2"]["2_2"]["2_2_4"].result_download,
        result2_2_2_4: datasets["2"]["2_2"]["2_2_4"].result2,
        result_download2_2_2_4: datasets["2"]["2_2"]["2_2_4"].result_download2,
        //----------------------2.2.5---------------------------
        title_2_2_5: datasets["2"]["2_2"]["2_2_5"].title,
        info_2_2_5: datasets["2"]["2_2"]["2_2_5"].info,
        figure_title_2_2_5: datasets["2"]["2_2"]["2_2_5"].figure_title,
        figure_content_2_2_5: datasets["2"]["2_2"]["2_2_5"].figure_content,
        figure_description_2_2_5: datasets["2"]["2_2"]["2_2_5"].figure_descriptions,
        result_2_2_5: datasets["2"]["2_2"]["2_2_5"].result,
        result_download_2_2_5: datasets["2"]["2_2"]["2_2_5"].result_download,
        result2_2_2_5: datasets["2"]["2_2"]["2_2_5"].result2,
        result_download2_2_2_5: datasets["2"]["2_2"]["2_2_5"].result_download2,
        //----------------------2.3---------------------------
        title_2_3: datasets["2"]["2_3"].title,
        info_2_3: datasets["2"]["2_3"].info,
        title_2_3_1: datasets["2"]["2_3"]["2_3_1"].title,
        info_2_3_1: datasets["2"]["2_3"]["2_3_1"].info,
        table_title_2_3_1: datasets["2"]["2_3"]["2_3_1"].table_title,
        table_content_2_3_1: datasets["2"]["2_3"]["2_3_1"].table_content,
        table_description_2_3_1: datasets["2"]["2_3"]["2_3_1"].table_descriptions,
        result_2_3_1: datasets["2"]["2_3"]["2_3_1"].result,
        result_download_2_3_1: datasets["2"]["2_3"]["2_3_1"].result_download,
        result2_2_3_1: datasets["2"]["2_3"]["2_3_1"].result2,
        result_download2_2_3_1: datasets["2"]["2_3"]["2_3_1"].result_download2,
        //----------------------2.3.2---------------------------
        title_2_3_2: datasets["2"]["2_3"]["2_3_2"].title,
        info_2_3_2: datasets["2"]["2_3"]["2_3_2"].info,
        figure_title_2_3_2: datasets["2"]["2_3"]["2_3_2"].figure_title,
        figure_content_2_3_2: datasets["2"]["2_3"]["2_3_2"].figure_content,
        figure_description_2_3_2: datasets["2"]["2_3"]["2_3_2"].figure_descriptions,
        result_2_3_2: datasets["2"]["2_3"]["2_3_2"].result,
        result_download_2_3_2: datasets["2"]["2_3"]["2_3_2"].result_download,
        result2_2_3_2: datasets["2"]["2_3"]["2_3_2"].result2,
        result_download2_2_3_2: datasets["2"]["2_3"]["2_3_2"].result_download2,
        //----------------------3.1---------------------------
        title_3: datasets["3"].title,
        info_3: datasets["3"].info,
        title_3_1: datasets["3"]["3_1"].title,
        info_3_1: datasets["3"]["3_1"].info,
        table_title_3_1: datasets["3"]["3_1"].table_title,
        table_content_3_1: datasets["3"]["3_1"].table_content,
        table_description_3_1: datasets["3"]["3_1"].table_descriptions,
        result_3_1: datasets["3"]["3_1"].result,
        result_download_3_1: datasets["3"]["3_1"].result_download,
        result3_1: datasets["3"]["3_1"].result2,
        result_download3_1: datasets["3"]["3_1"].result_download2,
        //----------------------3.2---------------------------
        title_3_2: datasets["3"]["3_2"].title,
        info_3_2: datasets["3"]["3_2"].info,
        figure_title_3_2: datasets["3"]["3_2"].figure_title,
        figure_content_3_2: datasets["3"]["3_2"].figure_content,
        figure_description_3_2: datasets["3"]["3_2"].figure_descriptions,
        result_3_2: datasets["3"]["3_2"].result,
        result_download_3_2: datasets["3"]["3_2"].result_download,
        result3_2: datasets["3"]["3_2"].result2,
        result_download3_2: datasets["3"]["3_2"].result_download2,
        //----------------------4.1---------------------------
        title_4: datasets["4"].title,
        title_4_1: datasets["4"]["4_1"].title,
        info_4_1: datasets["4"]["4_1"].info,
        title_4_2: datasets["4"]["4_2"].title,
        info_4_2: datasets["4"]["4_2"].info

      };
    },
    setup() {
      const isshow = ref("");
      const isCollapse = ref(false);
      const handleOpen = (key, keyPath) => {
        console.log(key, keyPath);
      };
      const handleClose = (key, keyPath) => {
        console.log(key, keyPath);
      };
      const handleSelect = (key, keyPath) => {
        console.log(key, keyPath);
      };

      const goAnchor = (selector) => {
        document.getElementById(selector).scrollIntoView();
      };

      const Pdf = () => {
        // this.show= "none"


        window.addEventListener("beforeprint", () => {
          // document.body.innerHTML = document.querySelector('.noprint').innerHTML;
          isshow.value = "none";
        });

        // 这里我们是对局部打印做的演示
// 首先获取局部html，也就是打印的区域
        const printHTML = document.querySelector("#demo").innerHTML;
// 将打印的区域赋值，进行打印
        window.document.body.innerHTML = printHTML;
        window.print(); // 调用window打印方法
        window.location.reload(); // 打印完成后重新加载页面


        window.addEventListener("afterprint", () => {
          // document.body.innerHTML = document.querySelector('.noprint').innerHTML;
          isshow.value = "";
        });

      };


      return {
        isCollapse,
        handleOpen,
        handleClose,
        handleSelect,
        goAnchor,
        Pdf
      };
    }
  });
</script>

<style scoped lang="scss">

    .el-header {
        background-color: #b3c0d1;
        color: var(--el-text-color-primary);
        line-height: 60px;
    }


    .scroll-page {
        display: flex;
        /* align-items: center;
        justify-content: center; */
        height: 50%;
        width: 100%;
    }

    .homeFooter {
        background-color: rgba(24, 33, 25, 0.09);
        height: 30px;
    }


    .el-aside {
        color: var(--el-text-color-primary);
    }

    .contentOne {
        display: block;
        /* height: 250px; */
    }

    .s-page {
        /*width: 180px;
        height: 180px;
        background-color: green;
        margin-top: 20px;*/
        height: 100px;
        /*background: #BBE8F2;*/
        top: 0;
        left: 0;
        width: 100%;
        text-align: left;
    }

    h5 {
        text-align: center;
    }

    .noprint {
        /*display: none;*/
    }

    p, .contA {
        text-indent: 2em;
        line-height: 200%;
    }
    .scrollbar {
        //height: calc(100vh - 60px);
    }
    .el-scrollbar__wrap {
        overflow-x: hidden;
    }
</style>
