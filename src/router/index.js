import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '../components/tabbar/HomeContainer'
import MemberContainer from '../components/tabbar/MemberContainer'
import SearchContainer from '../components/tabbar/SearchContainer'
import ShopCarContainer from '../components/tabbar/ShopCarContainer'
import NewsList from '../components/news/NewsList'
import NewsInfo from '../components/news/NewsInfo'
import PhotosList from '../components/photos/PhotosList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    },
    {
      path: '/home/newsList',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/home/newsInfo',
      name: 'NewsInfo',
      component: NewsInfo
    },
    {
      path: '/home/photosList',
      name: 'PhotosList',
      component: PhotosList
    }
  ],
  linkActiveClass: 'mui-active'
})
