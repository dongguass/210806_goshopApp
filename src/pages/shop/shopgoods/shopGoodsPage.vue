<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <!--给每个li绑定current类有点麻烦，需要交互，滑动右侧菜单切换current，点击左侧菜单切换current
          需要设计一个计算属性-->
          <li class="menu-item" :class="{current: index===isCurrent}" v-for="(menuItem,index) in goods" :key="index" @click="clickMoveMenu(index)">
            <span class="text bottom-border-1px">
              <img class="icon" v-if="menuItem.icon" :src="goods[index].icon">
              {{goods[index].name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul>
          <li class="food-list-hook" v-for="(titleItem,index) in goods" :key="index">
            <h1 class="title">{{titleItem.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px" v-for="(item,index) in titleItem.foods" :key="index"
              @click="showFoodDetail(item)">
                <div class="icon">
                  <img width="57" height="57"
                       :src="item.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{item.name}}</h2>
                  <p class="description">{{item.description}}</p>
                  <div class="extra">
                    <span class="count">{{item.sellCount}}</span>
                    <span>好评率{{item.rating}}%</span></div>
                  <div class="price">
                    <span class="now">￥{{item.price}}</span>
                    <span class="old" v-if="item.oldPrice">￥{{item.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <carControl :food="item"></carControl>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <shopCar></shopCar>
    </div>
    <food :food="food" ref="foodDetail"></food>

  </div>

</template>

<script>
  import shopCar from "../../../components/shopCar/shopCar";
  import Bscroll from 'better-scroll';
  import food from "../../../components/food/food";
  import {mapState} from 'vuex';
  import carControl from "../../../components/carControl/carControl";
    export default {
        name: "shopGoodsPage",
      data(){
          return {
            scrollY: 0, //右侧滑动的距离
            tops: [], //所有右侧分类li的top的组成数组
            food: {}, //要显示的食物对象
          }
      },
      components:{
          carControl,
        food,
        shopCar
      },
      mounted() {
          this.$store.dispatch('getShopGoods',()=>{
            this.$nextTick(()=>{
              this._initScroll();
              this._initTops();
            })
          })
      },
      computed:{
          ...mapState(['goods']),

        //计算得到当前分类的下标
        isCurrent(){
            //得到条件数据 tops scrollY
          const {scrollY, tops}= this;
          //计算得到滑动到第几个li
          const index = tops.findIndex((top,index)=>{
            return scrollY>=top && scrollY< tops[index+1];
          });

          return index;
        }
      },

      methods:{
          //初始化滚动
          _initScroll(){
            //列表显示后执行,使用better-scroll这个滚动库！具体可以查看文档
            new Bscroll('.menu-wrapper',{
              click: true,
            })
            this.foodsScroll = new Bscroll('.foods-wrapper',{
              probeType: 2, //手指离开后不会触发
              click: true
            })

            //右侧列表绑定scroll监听
            this.foodsScroll.on('scroll',({x,y})=>{
              this.scrollY = Math.abs(y) // 收集滑动距离
            })

            //绑定滚动结束监听
            this.foodsScroll.on('scrollEnd',({x,y})=>{
              this.scrollY = Math.abs(y)
            })
          },
        //计算所有分类的li
        _initTops(){
            //初始化tops,这个数组记录了每个分类在页面的高度
          //方便滑动到指定的高度，就切换currnt
          const tops = [];
          let top = 0;
          tops.push(top);
          const lis = document.getElementsByClassName('food-list-hook')
          Array.from(lis,(li)=>{
            top += li.clientHeight;
            tops.push(top);
          });
          this.tops = tops;
        },

        clickMoveMenu(index){
            //注意要加负号，因为存在数组里的是绝对值
           const y = this.tops[index];
           //立即更新scrollY（让点击分类项成为当前分类项)
           this.scrollY = y;
           this.foodsScroll.scrollTo(0,-y,300)
        },

        //点击更新要显示的食物对象（food
        showFoodDetail(item){
            //更新food值
          this.food = item;
          // 显示food组件
          this.$refs.foodDetail.toggleShow();
        }

      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/mixins.styl"
  .goods
    display: flex
    position: absolute
    top: 275px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .description, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .description
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px


</style>
