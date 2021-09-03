/*直接更新state的多个方法的对象,一定要注意mutation必须是同步函数
* 所以在mutation中只涉及修改state的数据*/

import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USER_INFO, RESET_USER_INFO, RECEIVE_INFO, RECEIVE_RATINGS, RECEIVE_GOODS,INCREMENT_FOOD_COUNT,DECREMENT_FOOD_COUNT,CLEAR_CAR_FOODS} from "./mutation-types";
import Vue from "vue";
export default {
  [RECEIVE_ADDRESS](state, {address}){
    state.address = address;
  },

  [RECEIVE_CATEGORYS](state, {categorys}){
    state.categorys = categorys;
  },

  [RECEIVE_SHOPS](state,{shopList}){
    state.shops = shopList;
  },

  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo = userInfo;
  },

  [RESET_USER_INFO](state){
    state.userInfo = {};
  },

  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },

  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },

  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },

  [INCREMENT_FOOD_COUNT](state,{food}){
    if(!food.count){
      // food.count = 1; //新增属性没有数据绑定
      //使用vue.set方法
      Vue.set(food,'count',1);
      //将food添加到carFoods中 修改state状态
      state.carFoods.push(food);
    }else{
      food.count++;
    }
  },

  [DECREMENT_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count--;
      if(food.count===0){
        //将food从carFoods列表中移除
        state.carFoods.splice(state.carFoods.indexOf(food),1);
      }
    }
  },

  [CLEAR_CAR_FOODS](state){
    //清楚右侧选购栏的选购商品的count
    state.carFoods.forEach(food=> food.count=0);
    //清楚购物车数组里的数据
    state.carFoods = [];
  }

}
