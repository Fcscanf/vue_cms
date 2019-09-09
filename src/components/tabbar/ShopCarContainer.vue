<script>

  import ShopCarNumBox from "../subcomponents/ShopCarNumBox";

export default {
  name: 'ShopCarContainer',
  components:{
      ShopCarNumBox
  }
}
</script>

<style scoped>
.shopcar-container{
  background-color: white;
}
img{
  width: 60px;
  height: 60px;
}
h1{
  font-size: 14px;
}
.price{
  color: red;
  font-weight: bold;
}
.mui-card-content-inner{
  display: flex;
  align-items: center;
}
.pay{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.red{
  color: red;
  font-weight: bold;
  font-size: 16px;
}
.info{
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
</style>

<template>
    <div class="shopcar-container">
<!--      商品列表区域-->
      <div class="goods-list">
        <div class="mui-card">
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <mt-switch></mt-switch>
              <img src="../../img/shop_photo/shop1.jpg">
              <div class="info">
                <h1>小米(Mi)小米Note 16G双网通版</h1>
                <p>
                  <span class="price">￥2199</span>
                  <ShopCarNumBox></ShopCarNumBox>
                  <a href="">删除</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--      结算区域-->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner pay">
            <div class="left">
              <p>总计(不含运费)</p>
              <p>已勾选商品 <span class="red">0</span> 件，总价 $0</p>
            </div>
            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
</template>
