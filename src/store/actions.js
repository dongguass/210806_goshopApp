/*间接更新state的包含多个方法的对象
* 通过mutation*/
import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USER_INFO, RESET_USER_INFO} from "./mutation-types";
/*引入接口函数*/
import {reqAddress, reqCategorys, reqShops, reqUser, reqLoginOut} from "../api"

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
  }

}
