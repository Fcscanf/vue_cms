<script>
// 导入评论子组件
import comment from '../subcomponents/Comment.vue'

export default {
  name: 'NewsInfo',
  data () {
    return {
      // 将路由请求的参数挂载到数据上，方便调用
      id: this.$route.params.id,
      // 定义新闻信息接收对象
      newInfo: {}
    }
  },
  methods: {},
  components: {
    'comment-box': comment
  }
}
</script>

<style scoped>
.newsInfo-container{
  padding: 0 4px;
}
.title{
  font-size: 16px;
  text-align: center;
  margin: 15px;
  color: red;
}
.subtitle{
  font-size: 13px;
  color: deepskyblue;
  display: flex;
}
.content{
  font-size: 12px;
}
</style>

<template>
    <div class="newsInfo-container">
<!--      标题-->
      <h1 class="title">新闻标题</h1>
      <p class="subtitle">
        <span>发表时间:2019.9.19 12:00</span>
        <span>点击：0次</span>
      </p>
      <hr>
<!--      内容区-->
      <div class="content">
        <p>今天你吃饭了没</p>
      </div>
<!--      评论区-->
      <comment-box></comment-box>
    </div>
</template>
