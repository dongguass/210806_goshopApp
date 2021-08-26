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
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
