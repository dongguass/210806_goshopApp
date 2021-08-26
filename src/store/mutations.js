/*直接更新state的多个方法的对象,一定要注意mutation必须是同步函数
* 所以在mutation中只涉及修改state的数据*/

import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USER_INFO, RESET_USER_INFO} from "./mutation-types";

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
  }
}
