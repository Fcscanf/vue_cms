import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '../components/tabbar/HomeContainer'
import MemberContainer from '../components/tabbar/MemberContainer'
import SearchContainer from '../components/tabbar/SearchContainer'
import ShopCarContainer from '../components/tabbar/ShopCarContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeContainer',
      component: HomeContainer
    },
    {
      path: '/home',
      name: 'HomeContainer',
      component: HomeContainer
    },
    {
      path: '/member',
      name: 'MemberContainer',
      component: MemberContainer
    },
    {
      path: '/shopCar',
      name: 'ShopcarContainer',
      component: ShopCarContainer
    },
    {
      path: '/search',
      name: 'SearchContainer',
      component: SearchContainer
    }
  ],
  linkActiveClass: 'mui-active'
})
