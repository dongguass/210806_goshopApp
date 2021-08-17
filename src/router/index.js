/*路由器对象模块*/

import Vue from "vue";
import VueRouter from "vue-router";
import homePage from "../pages/home-page/homePage";
import personalPage from "../pages/personal-page/personalPage";
import searchPage from "../pages/search-page/searchPage";
import shopList from "../pages/shop-list/shopList";
import login from "../pages/login/login";
//使用路由插件
Vue.use(VueRouter);


export default new VueRouter({
  routes:[
    {
      path:'/homePage',
      component:homePage,
      //路由器元数据，在组件中可以通过$route.meta得到相关数据
      meta: {
        showFooter: true
      }
    },
    {
      path:'/searchPage',
      component:searchPage,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/shopList',
      component:shopList,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/personalPage',
      component:personalPage,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/loginPage',
      component: login
    },
    //重定向指向首页
    {
      path:'/',
      redirect:'/homePage'
    }
  ]
})
