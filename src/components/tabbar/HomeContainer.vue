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
      <h1>
        HomeContainer
      </h1>
    </div>
</template>
