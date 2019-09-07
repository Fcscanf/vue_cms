<script>
import {Toast} from 'mint-ui'
export default {
  name: 'NewsList',
  data () {
    return {
      newsList: []
    }
  },
  created () {
    this.getNewsList()
  },
  methods: {
    getNewsList () {
      this.$http.get('api/getnewslist').then(result => {
        if (result.body.status === 0) {
          Toast('获取数据成功')
          this.newsList = result.body.message
        } else {
          Toast('获取数据失败')
        }
      })
    }
  }
}
</script>

<style scoped>
.mui-ellipsis-p{
  font-size: 12px;
  color: deepskyblue;
  display: inline;
  justify-content: left;
}
</style>

<template>
    <div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media">
          <router-link to="/home/newsInfo/">
            <img class="mui-media-object mui-pull-left" src="https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1562114802935-504aca79-85ec-479f-a23e-b5a68e3899ad.jpeg?x-oss-process=image/resize,m_fill,w_64,h_64/format,png">
            <div class="mui-media-body">
              幸福
              <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
              <span class='mui-ellipsis-p'>发表时间:2019.9.7 12:00</span>
              <span class='mui-ellipsis-p'>点击次数:0次</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
</template>
