# goshop

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

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

#组件文件夹components
##
