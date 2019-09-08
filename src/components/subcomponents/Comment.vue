<script>
import {Toast} from 'mint-ui'

export default {
  name: 'Comment',
  data () {
    return {
      pageIndex: 1,
      comments: [],
      msg: ''
    }
  },
  created () {
    this.getMoments()
  },
  methods: {
    getMoments () {
      this.$http.get('/api/getcmments').then(result => {
        if (result.body.status === 0) {
          // this.comments = result.body.message
          // 评论数据加载更多时进行数据追加
          this.comments = this.comments.concat(result.body.message)
        } else {
          Toast('获取评论失败')
        }
      })
    },
    getMore () {
      this.pageIndex++
      this.getMoments()
    },
    postComment () {
      if (this.msg.trim().length === 0) {
        return Toast('评论内容不能为空')
      }
      var cmt = {
        user_name: 'Fcant',
        add_time: Date.now(),
        content: this.msg.trim()
      }
      this.comments.unshift(cmt)
      this.msg = ''
    }
  }
}
</script>

<style scoped>
.h3{
  font-size: 18px;
  color: brown;
}
textarea{
  font-size: 14px;
  height: 85px;
  margin: 0;
}
.cmt-list{
  margin: 5px 0;
}
.cmt-item{
  font-size: 13px;
}
.cmt-title{
  line-height: 30px;
  background-color: #8f8f94;
}
.cmt-body{
  line-height: 35px;
  text-indent: 2em;
}
</style>

<template>
    <div class="cmt-container">
      <h3>发表内容</h3>
      <hr>
      <textarea placeholder="请输入要评论的内容" maxlength="120" v-model="msg"></textarea>

      <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
<!--      评论内容区域-->
      <div class="cmt-list">
        <div class="cmt-item">
          <div class="cmt-title">
            第一楼&nbsp;&nbsp;匿名用户；发表时间2019.9.18 18:89
          </div>
          <div class="cmt-body">
            你好
          </div>
        </div>
      </div>
      <div class="cmt-list" v-for="(item, i) in comments" :key="item.add_time">
        <div class="cmt-item">
          <div class="cmt-title">
            第{{i+1}}楼&nbsp;&nbsp;{{item.user_name}}；发表时间{{item.add_time | dateFormat}}
          </div>
          <div class="cmt-body">
            {{item.content}}
          </div>
        </div>
      </div>

      <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>
