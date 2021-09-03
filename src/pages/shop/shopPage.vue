<template>
    <div>
      <shopHeader></shopHeader>
      <div class="tab">
        <div class="tab-item">
          <router-link to="/shopDetail/goods">点餐</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/shopDetail/comment">评价</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/shopDetail/info">商家</router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    import shopHeader from "../../components/shopheader/shopHeader";
    export default {
        name: "shopPage",
      components:{
          shopHeader
      },

      mounted() {
          this.$store.dispatch('getShopInfo')
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
  .tab
    height 40px
    line-height 40px
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        &.router-link-active
          color #02a774
</style>
