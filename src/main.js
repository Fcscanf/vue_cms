// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// 全部导入MintUI的组件
import MintUI from 'mint-ui'
// 按需导入MintUI的组件
// import {Header, Swipe, SwipeItem, Button, Lazyload} from 'mint-ui'
import 'mint-ui/lib/style.css'
// 导入时间插件
import moment from 'moment'
// 导入vue-resource
import VueResource from 'vue-resource'
import Vuex from 'vuex'
Vue.use(Vuex)

// 启动时从本地localStorage读取保存的购物车数据
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
  // this.$store.state.***
  state: {
    // 定义购物车数组存储商品对象
    car: []
  },
  // this.$store.commit('方法的名称', '按需传递唯一的参数')
  mutations: {
    addToCar(state, goodsinfo){
      // 点击加入购物车，把商品信息保存到store的car中
      // 1.如果购物车有商品，只需要更新数量
      // 2.如果没有，直接将商品push到car中

      // 假设购物车没有对应的商品
      var flag = false

      state.car.some(item => {
        if (item.id == goodsinfo.id){
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })

      // 如果遍历没有商品，则将商品添加到car数组中
      if (!flag) {
        state.car.push(goodsinfo)
      }

      // 使用本地的localStorage对购物车数据进行持久化存储
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsInfo(state, goodsinfo) {
      // 修改购物车中的商品数量
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count = parseInt(goodsinfo.count)
          return true;
        }
      })
      // 修改后的数据作更新保存
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  // this.$store.getters.***
  getters: {
    // 相当于计算属性，也相当于filters
    getAllCount(state) {
      var c = 0;
      state.car.forEach(item => {
        c += item.count;
      });
      return c;
    },
    getGoodsCount(state) {
      var o = {};
      state.car.forEach(item => {
        o[item.id] = item.count
      });
      return o;
    }
  }
})
// 安装vue-resource
Vue.use(VueResource)
// 安装时间插件
Vue.use(moment)
Vue.use(MintUI)
// 安装MintUI的懒加载组件
// Vue.use(Lazyload)
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
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
  // 挂载store状态管理对象
  store,
  components: { App },
  template: '<App/>'
})
