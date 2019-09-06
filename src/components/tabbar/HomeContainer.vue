<script>
import { Toast } from 'mint-ui'
export default {
  name: 'HomeContainer',
  data () {
    return {
      // 定义保存后台取到图片数据的存放数组
      photo: []
    }
  },
  created () {
    this.getPhoto()
  },
  methods: {
    getPhoto () {
      // 获取图片的方法
      this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
        console.log(result.body)
        if (result.body.status === 0) {
          Toast('图片加载成功！')
          this.photo = result.body.message
        } else {
          Toast('图片加载失败！')
        }
      })
    }
  }
}
</script>

<style scoped>
.mint-swipe {
  height: 400px;
}
.mint-swipe-item:nth-child(1) {
  background-color: #2ac845;
}
.mint-swipe-item:nth-child(2) {
  background-color: orange;
}
.mint-swipe-item:nth-child(3) {
  background-color: deepskyblue;
}

.mint-swipe img{
  width: 100%;
  height: 100%;
}

/*使用scss的写法*/
/*.mint-swipe-item {*/
/*  &:nth-child(1){*/
/*  background-color: #2ac845;*/
/*  }*/
/*  &:nth-child(1){*/
/*   background-color: orange;*/
/*  }*/
/*  &:nth-child(1){*/
/*   background-color: deepskyblue;*/
/*  }*/
/*}*/

</style>

<template>
<!--  头部的轮播图-->
    <div>
      <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
<!--
使用vue遍历photo中的图片数据
 <mt-swipe-item :key="item" v-for="item in photo">
    <img :src="item.img" alt=""/>
  </mt-swipe-item>
-->
      </mt-swipe>

<!--   六宫格功能区   -->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4">
          <a href="#">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">Home</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4">
          <a href="#">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">Email</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4">
          <a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">Chat</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4">
          <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">location</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4">
          <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">Search</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4">
          <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">Phone</div>
          </a>
        </li>
      </ul>
    </div>
</template>
