<template>
  <div>
    <router-view></router-view>
    <footerGuider v-show="$route.meta.showFooter"></footerGuider>
  </div>
</template>

<script>
  //引入底部导航组件
  import footerGuider from "./components/footer-guider/footerGuider";
    export default {
      name: "App",
      components:{
          footerGuider
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    position relative
</style>
