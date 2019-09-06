<script>
export default {
  name: 'HomeContainer'
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
      </mt-swipe>
      <h1>
        HomeContainer
      </h1>
    </div>
</template>
