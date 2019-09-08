<script>

import mui from '../../lib/mui/js/mui.min.js'

export default {
  name: 'PhotosList',
  data () {
    return {
    }
  },
  created () {
  },
  // 当组件的DOM结构渲染好并放到页面中后，会执行这个钩子函数，如果要操作DOM元素，一般在 mountd 中执行
  mounted () {
    // 初始化组件控件
    // flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
    })
  },
  methods: {}
}
</script>

<style scoped>
  *{
    touch-action: pan-y;
  }
</style>

<template>
    <div>
<!--      顶部滑动条-->
      <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll">
            <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
              推荐
            </a>
            <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
              热点
            </a>
            <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
              北京
            </a>
            <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
              社会
            </a>
            <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
              娱乐
            </a>
            <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
              科技
            </a>
          </div>
        </div>

      </div>
    </div>
</template>
