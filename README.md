<这个外卖项目的目的是练习并且熟悉Vue的基本语法，熟练使用Vuex进行状态管理，熟练使用Vue-router>


#对项目中配置文件进行简单说明
1. config文件夹中的 index.js文件可以指定后台服务的端口号和静态资源文件夹路径
2. src文件夹中，main.js是应用入口
3. static 存放静态资源
4. 生成环境/打包发布 通过npm run build 命令执行，这时会打包生成dist文件夹
5. components中存放的是非路由组件，pages是路由组件，router是路由器文件夹，store vuex相关模块文件夹，filter自定义过滤器模块文件夹。

#解决点击响应延时0.3s的问题以及移动端meat元数据
<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
    <script>
      if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
          FastClick.attach(document.body);
        }, false);
      }
      if(!window.Promise) {
        document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
      }
    </script>

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />

#关于路由器
我们配置好路由器之后，在main.js中注册路由器，就可以在任何组件内，通过this.$router 访问路由器，也可以通过 this.$route 访问当前路由。

#components组件文件夹
##footer-guider
这个组件是用来显示,App的底部切换界面按钮的，给每个a标签都绑定
一个动态class类on，实现点击切换样式，并且绑定点击事件实现路由跳转。
##headerTop
公共头部样式，并使用具名插槽。
##shopList
外卖页的商家列表。在计算属性中，使用...mapState(['shops'])获取Vuex状态。
然后使用v-for遍历shops，异步显示商家信息等。
##star
该组件是通过商家信息中的评分来显示对应的星数，算法逻辑如代码所示。







