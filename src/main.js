// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入MUI
import './lib/mui/css/mui.min.css'
// 按需导入MintUI的组件
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.component(Header.name, Header)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
