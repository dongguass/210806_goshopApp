/*间接更新state的包含多个方法的对象
* 通过mutation*/
import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USER_INFO, RESET_USER_INFO, RECEIVE_GOODS, RECEIVE_INFO, RECEIVE_RATINGS, INCREMENT_FOOD_COUNT, DECREMENT_FOOD_COUNT,CLEAR_CAR_FOODS} from "./mutation-types";
/*引入接口函数*/
import {reqAddress, reqCategorys, reqShops, reqUser, reqLoginOut, reqShopGoods, reqShopInfo, reqShopRatings} from "../api"

export default {
  /*异步获取地址,这里的参数其实是context，只不过是用结构赋值将context
  *的commit和state属性取出来 */
  async getAddress({commit, state}){
    const geoHash = state.latitude + ',' +state.longitude;
    const result = await reqAddress(geoHash);
    //提交一个mutation对象
    if(result.code ===1){
      const address = result.data;
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  //异步获取食品列表
  async getCategorys({commit}){
    const result = await reqCategorys();
    //提交一个mutation对象
    if(result.code ===1){
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  //异步获取商家列表
  async getShopList({commit, state}){
    const {latitude, longitude} = state;
    const result = await reqShops(latitude, longitude);
    //提交一个mutation对象
    if(result.code ===1){
      const shopList = result.data;
      commit(RECEIVE_SHOPS, {shopList})
    }
  },

  //同步收集用户信息
  getUserInfo({commit}, userInfo){
    commit(RECEIVE_USER_INFO, {userInfo})
  },

  //异步获取用户信息
  async getUserInfoAsync({commit}){
    const result = await reqUser();
    if(result.code === 1){
      const userInfo = result.data;
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },

  //异步登出
  async loginOut({commit}){
    const result = await reqLoginOut();
    if(result.code===1){
      commit(RESET_USER_INFO)
    }
  },


  // 异步获取商家信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo();
    if(result.code===1) {
      const info = result.data;
      info.score = 3.5;
      commit(RECEIVE_INFO, {info});
    }
  },

// 异步获取商家评价列表
  async getShopRatings({commit}) {
    const result = await reqShopRatings();
    if(result.code===1) {
      const ratings = result.data;
      commit(RECEIVE_RATINGS, {ratings});

    }
  },

// 异步获取商家商品列表
  async getShopGoods({commit},callback) {
    const result = await reqShopGoods();
    if(result.code===1) {
      const goods = result.data;
      commit(RECEIVE_GOODS, {goods});
      // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
      callback();
    }
  },
  //同步更新food中的count值
  updatafoodCount({commit},{isAdd,food}){
    if (isAdd){
      commit(INCREMENT_FOOD_COUNT,{food})
    }else{
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  },

  //清空购物车 删除stateCarfoods数据
  clearCarFoods({commit}){
    commit(CLEAR_CAR_FOODS)
  }



}
