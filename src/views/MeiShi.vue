<template>
  <div>
    <Header :citiesinfo="citiesinfo" />
    <div class="container">
      <div class="m1">
        <p class="p1">客户的满意是我们最大的追求</p>
        <div class="mm1">
          <div class="nav2">
            <img src="../assets/images/common/S.png" alt />
            <p>选择玩味儿旅行，您不仅能享受到游览长江沿岸风景的美妙体验，还能品尝地道的当地美食、巡游人文景观。</p>
          </div>
          <div class="nav2">
            <img src="../assets/images/common/Y.png" alt />
            <p>选择玩味儿，我们相信假期应该是彻底的放松。</p>
          </div>
          <div class="nav2">
            <img src="../assets/images/common/V.png" alt />
            <p>对于玩味儿的服务人员而言， 我们重要的工作就是让您感受到舒适和照顾。</p>
          </div>
        </div>
      </div>

      <div class="m2">
        <p class="p1">旅行当地最热美食小吃店铺</p>
        <div class="mm2">
          <div class="left">
            <h1>武汉蔡林记</h1>
            <div class="shop">
              <img src="../assets/images/hubei/shops/蔡林记.jpg" alt />
            </div>
          </div>
          <div class="right">
            <div id="right_left">
              <span>店铺推荐美食：</span>
              <a href>热干面</a>
              <img class="on" src="../assets/images/hubei/foods/热干面.jpg" alt />
            </div>
            <div class="right_right">
              <h3>店铺简介</h3>
              <p>蔡林记是一家经营热干面系列小吃为特色，近百年的老字号小吃面馆。其热干面，晶洁爽口，味道鲜美，深受广大市民的赞赏，享有武汉名小吃的美誉。而今，热干面已遍及江城，历久不衰，武汉人吃早餐，更是离不开这一种具特色的面食。</p>
            </div>
          </div>
          <div class="appraise">
            <ul>
              <li v-for="(item, index) in 5" :key="index">
                <img src="../assets/images/common/评分.png" alt />
              </li>
            </ul>
            <p style="margin-top:20px">
              营业时间：
              <br />
              <span>周一~周日&nbsp;&nbsp;8:00-22:00</span>
            </p>
            <p style="margin-top:10px">人均：15/位</p>
          </div>
          <div class="logo">
            <img src="../assets/images/hubei/shops/hot.png" alt />
          </div>
          <button>进 店</button>
        </div>
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
  name: 'MeiShi',
  components: {
    Header,
    Footer,
    ReturnTop
  },
  data() {
    return {
      citiesinfo: []
    }
  },
  methods() {},
  beforeMount() {
    this.citiesinfo = JSON.parse(sessionStorage.getItem('citiesinfo'))
  }
}
</script>
<style scoped lang='scss'>
.container {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}
.m1 {
  width: 100%;
  height: 360px;
}
.m1 .p1 {
  height: 80px;
  font-size: 26px;
  color: #4FB2D9;
  line-height: 80px;
  text-align: center;
  background: #F2F3ED;
}
.mm1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 280px;
}
.nav2 {
  width: 330px;
  height: 240px;
  border: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
}
.nav2 img {
  width: 165px;
  height: 120px;
}
.nav2 p {
  width: 280px;
}
.m2 {
  width: 100%;
}
</style>
