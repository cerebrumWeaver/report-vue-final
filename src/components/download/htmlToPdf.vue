<template>
    <div class="app-container">
        <div class="mask">
            <div v-if="!isAddPage" class="tips">
                <i class="el-icon-loading"/>
                附件正在生成中......
            </div>
            <div v-else class="tips">
                <i class="el-icon-loading"/>
                附件正在生成第<span class="pdfProgress">{{ pdfPage }}</span>页，共<span class="pdfTotal">{{ pdfProgress }}</span>页......
            </div>
        </div>

        <!-- 页眉和页码 -->
        <div class="hideDiv">
            <div id="title">
                <p> 我是页眉 </p>
            </div>
            <div id="footer">
                第<span class="pdfProgress">{{ pdfPage }}</span>页
            </div>
        </div>

        <div id="pdfDom">
            <div id="cover">
                <div class="coverContent">
                    <h1 style="font-size: 22px;">XXX股份有限公司</h1>
                    <h2 style="font-size: 22px;">《张三报告》</h2>
                </div>
            </div>
            <div class="content">
                <div class="casepoint">
                    {{ pdfContent.content }}
                </div>
                <div class="casepoint">
                    {{ pdfContent.content }}
                </div>
                <div class="casepoint">
                    {{ pdfContent.content }}
                </div>

            </div>
        </div>

    </div>
</template>
<script>
  import html2Canvas from 'html2canvas'
  import jsPDF from 'jspdf'

  export default{
    name: 'SeePdf',
    data() {
      return {
        pdfProgress: 1,
        pdfPage: 1,
        pdfTotal: null,
        type: '01', // 01预览 02下载
        taskno: '',
        pdfContent: { content: '我是内容' },
        isDownloaded: false, // 是否生成PDF
        isOver: false, // 是否生成完毕
        a4Width: 595.28,
        a4Height: 841.89,
        pdf: null,
        canvas: [],
        a4HeightRef: 0,
        position: 0,
        leftHeight: 0,
        pageFooter: null,
        canvasFooter: null,
        pageTitle: null,
        canvasTitle: null,
        canvasTitleH: null,
        canvasbreakHeight: 0,
        canvasIndex: 0,
        pageData: null,
        isAddPage: false
      }
    },
    watch: {
      isOver: function(newVal) {
        if (newVal) {
          setTimeout(function() {
            window.close()
          }, 300)
        }
      }
    },
    mounted() {
      if (!this.isDownloaded) {
        this.getPdfFun()
      }
    },
    // 内容从后台接口获取时，在updated生命周期中调用生成PDF方法
    // updated() {
    //   if (!this.isDownloaded) {
    //     this.getPdfFun()
    //   }
    // },
    methods: {
      getPdfFun() {
        // 初始化PDF
        this.pdf = new jsPDF('x', 'pt', 'a4')
        this.pdf.page = 1
        this.pdf.setDisplayMode('fullwidth', 'continuous', 'FullScreen')
        this.isDownloaded = true
        if (this.type === '01') {
          this.getPdf('pdf名字', true)
        } else if (this.type === '02') {
          this.getPdf('pdf名字', false)
        }
      },
      async getPdf(title, show) {
        // 生成页眉图片
        this.canvasTitle = await html2Canvas(document.getElementById('title'))
        this.pageTitle = this.canvasTitle.toDataURL('image/jpeg', 1.0)

        // 生成首页图片
        const canvasCover = await html2Canvas(document.querySelector('#cover'), {
          allowTaint: true,
          scale: 2
        })

        // 生成首页PDF
        this.pdf.addImage(canvasCover.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, this.a4Width, this.a4Width / canvasCover.width * canvasCover.height)

        // 生成内容 6个案件点的图片
        const doms = document.getElementsByClassName('casepoint')
        for (let i = 0; i < doms.length; i++) {
          if (doms[i]) {
            const canvas = await html2Canvas(doms[i], {
              allowTaint: true,
              scale: 2
            })
            this.canvas.push(canvas)
          }
        }

        this.canvas1 = document.createElement('canvas')
        // 一页pdf显示html页面生成的canvas高度; -300为了每页PDF头部和底部留有空位
        this.a4HeightRef = Math.floor(this.canvas[0].width / this.a4Width * this.a4Height) - 200
        this.position = 0
        this.addPage()
        for (let canvasIndex = 0; canvasIndex < this.canvas.length; canvasIndex++) {
          this.position = 0
          // 未生成pdf的html页面高度
          this.leftHeight = this.canvas[canvasIndex].height
          console.log('canvasIndex  html页面高度', canvasIndex, this.leftHeight)
          // this.pageData = await this.canvas[i].toDataURL('image/jpeg', 1.0)
          this.createImpl(this.canvas[canvasIndex])
        }
        const that = this
        // 根据生成的页数，给每一页PDF加上页码
        this.isAddPage = true
        for (let page = 0; page <= this.pdfProgress; page++) {
          this.canvasFooter = await html2Canvas(document.getElementById('footer'))
          this.pageFooter = this.canvasFooter.toDataURL('image/jpeg', 1.0)

          this.pdf.setPage(page)

          // 添加页眉
          this.pdf.addImage(this.pageTitle, 'JPEG', 0, 0, this.a4Width, (this.a4Width / this.canvasTitle.width * this.canvasTitle.height).toFixed(2) / 1)
          // 添加页码
          this.pdf.addImage(this.pageFooter, 'JPEG', 0, this.a4Height - 30, this.a4Width, (this.a4Width / this.canvasFooter.width * this.canvasFooter.height).toFixed(2) / 1)

          if (this.pdfPage < this.pdfProgress) {
            this.pdfPage++
          }
        }
        // 所有内容都生成完毕
        if (!show) {
          that.pdf.save(title + '.pdf')
          that.isOver = true
        } else {
          // 在新窗口查看 pdf文件
          window.open(that.pdf.output('bloburl'))
          that.isOver = true
        }
      },
      async createImpl(canvas) {
        console.log('这页PDF剩余的高度', this.a4LeftHeight)
        console.log('canvas剩余的高度', this.leftHeight)
        console.log('canvas开始截取的位置高度', this.position)
        if (this.leftHeight > 0) {
          if (this.leftHeight > this.a4LeftHeight) {
            var checkCount = 0
            var i = this.position + this.a4LeftHeight
            console.log('i  position', i, this.position)
            // 从定好的高度页面，底部开始循环遍历canvas的每个点，找到可以截断的地方
            for (i; i >= this.position; i--) {
              var count = 0
              var isWrite = true
              for (var j = 0; j < canvas.width; j++) {
                var c = canvas.getContext('2d').getImageData(j, i, 1, 1).data
                // 如果该单位的颜色不是白色c[0]  c[1]  c[2] 分别代表r g b 255
                if (c[0] != 0xff || c[1] != 0xff || c[2] != 0xff) {
                  count++
                }
                // 如果这行有连续20个单位都不是白色，退出当前循环
                if (count > 20) {
                  isWrite = false
                  break
                }
              }
              // 如果有连续10行都是白色的，canvas在这里可以截断了
              if (isWrite) {
                checkCount++
                if (checkCount >= 20) {
                  break
                }
              } else {
                checkCount = 0
              }
            }
            console.log('i', i)
            this.height = i - this.position
            if (this.height <= 0) { // 没找到截断点,新增一页PDF
              // PDF剩余可用高度
              this.a4LeftHeight = (this.a4HeightRef - 150).toFixed(2) / 1
              // 先添加一张PDF
              this.pdf.addPage()
              this.pdfProgress = this.pdfProgress + 1
              console.log('新增一页PDF  this.pdfProgress', this.pdfProgress)
              // 添加页眉
              this.pdf.addImage(this.pageTitle, 'JPEG', 0, 0, this.a4Width, (this.a4Width / this.canvasTitle.width * this.canvasTitle.height).toFixed(2) / 1)

              this.height = this.leftHeight
              this.createImpl(canvas)
              return
            }
          } else {
            this.height = this.leftHeight
          }
          this.canvas1.width = canvas.width
          this.canvas1.height = this.height

          var ctx = this.canvas1.getContext('2d')
          ctx.drawImage(canvas, 0, this.position, canvas.width, this.height, 0, 0, canvas.width, this.height)
          console.log('canvas截断的位置', this.position, this.height)
          console.log('PDF生成的位置', this.a4HeightRef - this.a4LeftHeight, this.height)
          this.pdf.addImage(this.canvas1.toDataURL('image/jpeg', 1.0), 'JPEG', 0, this.a4Width / this.canvas1.width * (this.a4HeightRef - this.a4LeftHeight), this.a4Width, this.a4Width / this.canvas1.width * this.height)

          this.leftHeight -= this.height
          this.position += this.height
          this.a4LeftHeight -= this.height + 50

          if (this.leftHeight > 0) { // 第i个canvas还未截取完毕
            await this.createImpl(canvas)
          }
        }
      },
      async addPage() {
        // PDF页面剩余的高度
        this.a4LeftHeight = (this.a4HeightRef - 150).toFixed(2) / 1
        // 先添加一张PDF
        this.pdf.addPage()
        this.pdfProgress = this.pdfProgress + 1
        console.log('新增一页PDF  this.pdfProgress', this.pdfProgress)
      }
    }
  }
</script>
<style scoped>
    .mask{
        position: fixed;
        left:0;
        top:0;
        width:100%;
        height:100%;
        color:#409eff;
        z-index: 9999;
        background-color:#ffffff;
    }
    .casepoint{
        padding: 0 50px;
    }
    .mask .tips{
        position: absolute;
        top: 45%;
        width:100%;
        font-size:18px;
        text-align: center;
    }
    .title3{
        font-size: 16px;
    }
    #title {
        width:800px;
        text-align: center;
        padding:10px 60px 0;
        color:#808080;
    }
    #title p{
        font-size: 14px;
        padding-bottom: 5px;
        border-bottom: 1px solid #c4c7ce;
    }
    #footer {
        font-size: 12px;
        color:#c4c7ce;
        width:800px;
        text-align: center;
    }
    #pdfDom {
        width:800px;
        letter-spacing: 2px;
    }
    #cover{
        display:flex;
        height: 1020px;
    }
    #cover .coverContent{
        margin: auto;
        text-align:center;
    }
    p{
        font-size: 14px;
    }

</style>

