<template>
  <div class="msite">
    <!--首页头部-->
    <headerTop :title="address.name">
      <router-link class="header_search" slot="search" to="/searchPage">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="login" :to="userInfo._id?'/userInfo':'/loginPage'">
        <span class="header_login_text">{{userInfo.phone||userInfo.name||'登录|注册'}}</span>
      </router-link>
    </headerTop>
    <!--首页导航-->
    <nav class="msite_nav border-1px">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(item, index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl + item.image_url">
              </div>
              <span>{{item.title}}</span>
            </a>
          </div>

        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list border-1px">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <shopList></shopList>
    </div>
  </div>
</template>

<script>
  import headerTop from "../../components/headerTop/headerTop";
  import Swiper from 'swiper';
  import 'swiper/swiper-bundle.min.css';
  import shopList from "../../components/shopList/shopList";
  import {mapState} from "vuex";

  export default {
    data(){
      return {
        baseImageUrl: "https://fuss10.elemecdn.com"
      }
    },
    mounted() {
      this.$store.dispatch('getCategorys');
      this.$store.dispatch('getShopList');

    },
    name: "homePage",
    components: {
      headerTop,
      shopList
    },
    computed: {
      ...mapState(['address', 'categorys', 'userInfo']),
      //根据categorys一维数组生成二维数组
      categorysArr(){
        const {categorys} = this;
        const arr = [];
        let minArr = [];
        categorys.forEach(c =>{
          if(minArr.length ===8){
            minArr = [];
          }
          if(minArr.length ===0){
            arr.push(minArr)
          }
          minArr.push(c);
        });
        return arr;
      }
    },

    watch: {
      //categorys数组中数值发生变化时调用该函数,但是在异步更新界面之前所以会与
      //swiper轮播图冲突
      categorys (value){
        //API 界面更新就立即创建Swiper对象
        this.$nextTick(()=>{
          //  创建一个Swiper实例对象
          new Swiper('.swiper-container',{
            loop: true, //可以循环轮播
            //如果需要分页器
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
  .msite
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0 10px
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
