<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-minus-circle" v-if="food.count" @click.stop="updatafoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-jiahao" @click.stop="updatafoodCount(true)"></div>
  </div>

</template>

<script>
    export default {
        name: "carControl",
      props:{
          food:Object
      },
      methods:{
        updatafoodCount(isAdd){
          //因为更新食品添加的数量会设计goods（存储在state中）所以要使用vuex管理
          this.$store.dispatch('updatafoodCount',{isAdd,food: this.food});
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .icon-minus-circle
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
      &.move-enter-active, &.move-leave-active
        transition all .3s
      &.move-enter, &.move-leave-to
        opacity 0
        transform translateX(15px) rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-jiahao
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green
</style>
