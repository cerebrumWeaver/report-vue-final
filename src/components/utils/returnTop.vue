<template>
    <div id="backtop">
        <img
                src="@/assets/temp/top.png"
                alt="置顶"
                @click="backtop"
                v-show="totop"
                class="backtop"
        />
    </div>
</template>

<script>
  export default {
    data() {
      return {
        totop: false,
        img: require('../../assets/02.png')
      };
    },
    components: {},
    // 监听滚动事件,利用VUE写一个在控制台打印当前的scrollTop。首先，在 mounted 钩子中给window添加一个滚动滚动监听事件：
    mounted() {
      console.log(1);
      window.addEventListener("scroll", this.scrolltotop);
    },//离开该页面需要移除这个监听的事件
    unmounted() {
      window.removeEventListener("scroll", this.scrolltotop);
    },
    methods: {
      //监听回到顶部按钮距浏览器顶部的距离，滚动的距离如果大于浏览器高度时，设置 toTop 为true,否则就是false
      scrolltotop() {
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        if (scrollTop > 400) {
          this.totop = true;
        } else {
          this.totop = false;
        }
      },
      //回到顶部 点击回到顶部按钮，让距离逐渐减少，形成上划的效果
      backtop() {
        let back = setInterval(() => {
          if (
            document.body.scrollTop ||
            document.documentElement.scrollTop
          ) {
            document.body.scrollTop -= 100;
            document.documentElement.scrollTop -= 100;
          } else {
            clearInterval(back);
          }
        });
      }
    }
  };
</script>

<style lang="less" scoped>
    .backtop {
        position: fixed;
        width: 30px;
        height: 30px;
        bottom: 75px;
        right: 12px;
        z-index: 100;
        opacity: 0.6;
    }
</style>
