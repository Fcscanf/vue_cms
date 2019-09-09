// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// 按需导入MintUI的组件
import {Header, Swipe, SwipeItem, Button, Lazyload} from 'mint-ui'
import 'mint-ui/lib/style.css'
// 导入时间插件
import moment from 'moment'
// 导入vue-resource
import VueResource from 'vue-resource'
// 安装vue-resource
Vue.use(VueResource)
// 安装时间插件
Vue.use(moment)
// 安装MintUI的懒加载组件
Vue.use(Lazyload)
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
// 配置全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})
// 全局设置post请求的数据格式
Vue.http.options.emulateJSON = true
// 设置vue-resource请求的根路径
Vue.http.options.root = 'http://vue.studyit.io'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
