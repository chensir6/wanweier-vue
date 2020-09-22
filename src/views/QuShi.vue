<template>
  <div>
    <Header :citiesinfo="citiesinfo" />
    <div class="header2">
      <h2>
        玩味论谈
        <span>（分享你的玩味心经）</span>
      </h2>
      <div class="title1">
        <span>旅游与美食的交流圣地，每一个人的内心境地!</span>
        <a href="html/check.html">
          <button>我要发表</button>
        </a>
      </div>
    </div>
    <div class="wave"></div>
    <!-- 发帖子 -->
    <div class="body1">
      <div class="content4">
        <div id="list"></div>
        <ul class="list">数据加载中，请稍后...</ul>
        <div class="more">
          <a href="javascript:;" onclick="loadding.loadMore();">点击加载更多</a>
        </div>
      </div>

      <div class="body_right">
        <div class="body_right_header">
          <h2>论谈热议</h2>
        </div>
        <ul>
          <li>
            <a href style="color:#4FB2D9;margin-left:10px">
              <span style="font-size:18px;padding-right:10px">1.</span>asdadadads大大大大大是adad
            </a>
          </li>
          <li>
            <a href style="color:#4FB2D9;margin-left:10px">
              <span style="font-size:18px;padding-right:10px">2.</span>asdadada
            </a>
          </li>
          <li>
            <a href style="color:#4FB2D9;margin-left:10px">
              <span style="font-size:18px;padding-right:10px">3.</span>adasdasdasda
            </a>
          </li>
          <li>
            <a href>dsadadasdsadas</a>
          </li>
          <li>
            <a href>smile很帅</a>
          </li>
          <li>
            <a href>我发现了一个诡异的事情</a>
          </li>
          <li>
            <a href>就是smlie很帅</a>
          </li>
          <li>
            <a href>哟西</a>
          </li>
          <li>
            <a href>圣诞节按季度卡看到阿萨达萨达</a>
          </li>
          <li>
            <a href>是大大大是打算的撒大大</a>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
    <ReturnTop />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ReturnTop from '@/components/ReturnTop.vue'
export default {
  name: 'QuShi',
  components: {
    Header,
    Footer,
    ReturnTop
  },
  data () {
    return {
      citiesinfo: []
    }
  },
  methods () {},
  beforeMount () {
    this.citiesinfo = JSON.parse(sessionStorage.getItem('citiesinfo'))
  }
}
</script>

<style scoped lang="scss">
</style>
