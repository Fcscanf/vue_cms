# vue_cms

> CMS Vue.js project

## Build Setup

``` bash
# install dependencies
$ cnpm install

# serve with hot reload at localhost:8080
$ cnpm run dev

# build for production with minification
$ cnpm run build

# build for production and view the bundle analyzer report
$ cnpm run build --report

# run unit tests
$ cnpm run unit

# run e2e tests
$ cnpm run e2e

# run all tests
$ cnpm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 项目开发笔记
## 1、首页设计开发
1. Header头部使用MintUI中的Header组件
2. 底部Tabbar区域使用MUI的Tabbar.html
3. 使用MUI其他样式图标时要导入相应的样式文件
4. 内容区域通过router-view路由管理内容
5. 首页轮播图使用MIntUI的Swipe, SwipeItem组件
6. 使用vue-resource导入轮播图数据(图片资源加载)
``` bash
$ cnpm i vue-resource -S
```
---
## 2、新闻资讯列表
1. 绘制新闻资讯界面使用MUI中的media-list.html
2. 为项目安装时间插件
```bash
cnpm i moment -S
```
---
## 3、新闻资讯详情
1. 实现新闻资讯列表点击查看新闻详情
- 把列表的每一项改为路由链接，同时在跳转时添加唯一的ID标识符
- 创建新闻详情组件页面 NewsInfo.vue
- 在路由模块，将新闻的路由地址和组件对应
---
## 4、评论组件的设计使用
1. 评论组件的设计使用
+ 在一个组件中使用另一个组件的步骤：
    1. 在当前组件导入要引用的组件`import comment from './comment.vue'`
    2. 在父组件使用`components`属性将刚才导入的comment组件注册为自己的子组件
    3. 注册子组件时将注册的名称在使用的地方引入即可
---
## 5、图片分享页头部滚动栏设计
1. 滚动栏采用MUI的设计模板(tab-top-webview-main.html)
- 导入滑动条内容要将类mui-fullscreen去掉，否则会占满全屏
- 滑动条滑动由JS操作，需要引入MUI的JS相关组件
  + 1.导入mui.min.js组件
  + 2.使用官方提供的scroll初始化
```javascript
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
```
- 关于导入的mui.min.js与webpack的严格模式冲突报错`Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them`
的解决方案
  + 禁用webpack的严格模式
    - 参考[Github中的remove-strict](https://github.com/genify/babel-plugin-transform-remove-strict-mode)
      1. 安装remove-strict插件  
      `$ cnpm install babel-plugin-transform-remove-strict-mode -D`
      2. 在项目的.babelrc文件的plugins删除  
      ` "transform-runtime"`
      3. 在项目的.babelrc文件的plugins添加  
      `"transform-remove-strict-mode"`
      4. 在.eslintignore文件配置忽略严格扫描的文件目录`/src/*`
  + 滑动时出现报错警告的解决
    - 报错如下
    `mui.min.js?5dec:8 [Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive`
    - 原因是Chrome为了提高滑动流畅度
    - 解决方式是在组件添加样式如下
```css
*{
  touch-action: pan-y;
}
```
---
## 6.图片列表加载使用懒加载技术
- 使用MintUI提供的`lazy-load`
