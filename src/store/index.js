/*
* vuex 最核心的管理对象 store*/

import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutation from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutation,
  actions,
  getters
})
