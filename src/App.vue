<template>
  <div id="app" class="app-container">
<!--    顶部-->
    <mt-header fixed title="Fcant开发总部"></mt-header>
<!--    内容-->

<!--    底部-->

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.app-container{
  padding-top: 40px;
}
</style>
