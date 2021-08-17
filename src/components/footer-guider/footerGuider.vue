<template>
  <footer class="footer_guider border-1px">
    <a href="javascript:" class="guideItem" :class="{on:'/homePage'===$route.path}" @click="goTo('/homePage')">
      <span class="item_icon">
        <i class="iconfont icon-u"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:" class="guideItem" :class="{on:'/searchPage'===$route.path}" @click="goTo('/searchPage')">
      <span class="item_icon">
        <i class="iconfont icon-sousuo"></i>
      </span>

      <span>搜索</span>
    </a>
    <a href="javascript:" class="guideItem" :class="{on:'/shopList'===$route.path}" @click="goTo('/shopList')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>

      <span>订单</span>
    </a>
    <a href="javascript:" class="guideItem" :class="{on:'/personalPage'===$route.path}" @click="goTo('/personalPage')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </a>
  </footer>
</template>

<script>
    export default {
        name: "footerGuider",
      methods:{
          goTo(path){
            this.$router.push(path);
          }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
  .footer_guider
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guideItem
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
