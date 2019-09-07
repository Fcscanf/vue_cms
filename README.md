# vue_cms

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

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 项目开发笔记
1. Header头部使用MintUI中的Header组件
2. 底部Tabbar区域使用MUI的Tabbar.html
3. 使用MUI其他样式图标时要导入相应的样式文件
4. 内容区域通过router-view路由管理内容
5. 首页轮播图使用MIntUI的Swipe, SwipeItem组件
6. 使用vue-resource导入轮播图数据(图片资源加载)
``` bash
cnpm i vue-resource -S
```
7. 绘制新闻资讯界面使用MUI中的media-list.html
8. 为项目安装时间插件
```bash
cnpm i moment -S
```
9. 实现新闻资讯列表点击查看新闻详情
- 把列表的每一项改为路由链接，同时在跳转时添加唯一的ID标识符
- 创建新闻详情组件页面 NewsInfo.vue
- 在路由模块，将新闻的路由地址和组件对应
10. 评论组件的设计使用
+ 在一个组件中使用另一个组件的步骤：
    1. 在当前组件导入要引用的组件`import comment from './comment.vue'`
    2. 在父组件使用`components`属性将刚才导入的comment组件注册为自己的子组件
    3. 注册子组件时将注册的名称在使用的地方引入即可
