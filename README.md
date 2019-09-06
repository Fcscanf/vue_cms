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
