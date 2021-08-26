<template>
  <div class="star" :class="'star-' +size">
    <span class="star-item" v-for="(item ,index) in starArr" :class="item" :key="index"></span>
  </div>
</template>

<script>
  const CLASS_ON = 'on';
  const CLASS_OFF = 'off';
  const CLASS_HALF = 'half';
    export default {

        name: "star",
      props: {
        score: Number,
        size: Number
      },

      computed: {
          starArr(){
            const {score} =this;
            const scs = [];
            //向scs数组中添加class on
            const scoreInt = Math.floor(score); //获取分数的整数部分
            for(let i=0; i<scoreInt;i++){
              scs.push(CLASS_ON);
            }
            //向scs中添加0/1个half
            if(score*10 - scoreInt*10>=5){
              scs.push(CLASS_HALF)
            }
            //向scs中添加n个off
            while(scs.length<5){
              scs.push(CLASS_OFF)
            }
            return scs;
          }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('../../../static/images/stars/star48_on')
        &.half
          bg-image('../../../static/images/stars/star48_half')
        &.off
          bg-image('../../../static/images/stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('../../../static/images/stars/star36_on')
        &.half
          bg-image('../../../static/images/stars/star36_half')
        &.off
          bg-image('../../../static/images/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('../../../static/images/stars/star24_on')
        &.half
          bg-image('../../../static/images/stars/star24_half')
        &.off
          bg-image('../../../static/images/stars/star24_off')
</style>
