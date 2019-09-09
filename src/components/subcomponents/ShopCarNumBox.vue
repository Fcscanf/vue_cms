<script>
import mui from '../../lib/mui/js/mui.min'

export default {
  name: 'ShopCarNumBox',
  data () {
    return {
        goodsList: []
    }
  },
  methods: {
      getGoodsList() {
          // 获取store中的所以商品ID并拼接出一个逗号分隔的字符串
          var idArr = [];
          this.$store.state.car.forEach(item => idArr.push(item.id));
          // 如果购物车没有商品，则直接返回，不需要请求数据
          if (idArr.length <= 0) {
              return;
          }
          // 获取购物车商品列表
          this.$http.get('api/goods/getshopcarlist/' + idArr.join(','))
              .then(result => {
                  if (result.body.status === 0) {
                      this.goodsList = result.body;
                  }
              });
      }
  },
  mounted() {
      mui('.mui-numbox').numbox()
  }
}
</script>

<style scoped>

</style>

<template>
    <div class="mui-numbox" data-numbox-min="1">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1" ref="numbox">
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
