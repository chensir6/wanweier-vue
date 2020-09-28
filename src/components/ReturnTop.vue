<template>
  <div id="return-top" @click="backTop" v-show="backFlag">
    <img src="../assets/images/common/02.png" alt title="回到顶部" />
  </div>
</template>

<script>
export default {
  name: 'ReturnTop',
  data() {
    return {
      backFlag: false,
      scrollTop: 0
    }
  },
  methods: {
    // 返回顶部
    backTop() {
      const timer = setInterval(function () {
        var top = document.body.scrollTop || document.documentElement.scrollTop
        var speed = top / 4
        if (document.body.scrollTop !== 0) {
          document.body.scrollTop -= speed
        } else {
          document.documentElement.scrollTop -= speed
        }
        if (top === 0) {
          clearInterval(timer)
        }
      }, 30)
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      that.scrollTop = scrollTop
      // 判断滚动超出一定距离后在让返回顶部按钮出现
      if (that.scrollTop > 0) {
        that.backFlag = true
      } else {
        that.backFlag = false
      }
    }
  },
  mounted() {
    const that = this
    window.addEventListener('scroll', that.scrollToTop)
  },
  destroyed() {
    const that = this
    window.removeEventListener('scroll', that.scrollToTop)
  }
}
</script>

<style scoped lang="scss">
#return-top {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 10%;
  bottom: 10%;
  z-index: 10;
  opacity: 0.2;
}
#return-top:hover {
  opacity: 1;
}
</style>
