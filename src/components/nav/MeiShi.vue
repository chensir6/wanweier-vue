<template>
  <div>
    <div class="container">
      <div class="m1">
        <p class="p1">客户的满意是我们最大的追求</p>
        <div class="mm1">
          <div class="nav2">
            <img src="../assets/images/common/i_S.png" alt />
            <p>选择玩味儿旅行，您不仅能享受到游览长江沿岸风景的美妙体验，还能品尝地道的当地美食、巡游人文景观。</p>
          </div>
          <div class="nav2">
            <img src="../assets/images/common/i_Y.png" alt />
            <p>选择玩味儿，我们相信假期应该是彻底的放松。</p>
          </div>
          <div class="nav2">
            <img src="../assets/images/common/i_V.png" alt />
            <p>对于玩味儿的服务人员而言， 我们重要的工作就是让您感受到舒适和照顾。</p>
          </div>
        </div>
      </div>

      <div class="m2">
        <p class="p1">旅行当地最热美食小吃店铺</p>
        <div class="mm2" v-for="(item, index) in citiesinfo[0].sshop" :key="index">
          <div class="d1">
            <h1>{{ item.name }}</h1>
            <div class="shop">
              <img :src="item.shopurl" alt />
            </div>
          </div>
          <div class="d2">
            <span>店铺推荐美食：<a href>{{ item.food }}</a></span>
            <div class="food">
              <img :src="item.foodurl" alt />
            </div>
          </div>
          <div class="d3">
            <h3>店铺简介</h3>
            <p>{{ item.detail }}</p>
          </div>
          <div class="d4">
            <div class="hot">
              <img src="../assets/images/hubei/shops/hot.png" alt width="60px" height="35px" />
            </div>
            <div class="info">
              <div class="score">
                <img src="../assets/images/common/评分.png" alt width="30px" height="30px" />
                <ul>
                  <li v-for="(item, index) in item.good" :key="index">
                    <img src="../assets/images/common/i_收藏后.png" alt width="20px" height="20px" />
                  </li>
                  <li v-for="(item, index) in (5 - item.good)" :key="index + 30">
                    <img src="../assets/images/common/i_收藏.png" alt width="20px" height="20px" />
                  </li>
                </ul>
              </div>
              <p>营业时间：{{ item.opentime }}</p>
              <p>人均：{{ item.price }}/位</p>
            </div>
            <button class="btn">进 店</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  methods: {},
  beforeMount() {
    this.citiesinfo = JSON.parse(sessionStorage.getItem('citiesinfo'))
  }
}
</script>
<style scoped lang='scss'>
.container {
  width: 80%;
  min-width: 1100px;
  margin: 0 auto;
  overflow: hidden;
}
.m1 {
  width: 100%;
  height: 360px;
}
.container .p1 {
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
.mm2 {
  height: 280px;
  margin-top: 20px;
  background: #8FC6FF;
  display: flex;
  color: #fff;
}
.mm2 a {
  color: #fff;
}
.d1 {
  width: 279px;
  border-right: 1px solid #fff;
  background: #4FB2D9;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
}
.d1 .shop {
  width: 270px;
  height: 170px;
}
.d1 .shop img {
  width: 100%;
  height: 100%;
  border-radius: 80px;
}
.d1 h1 {
  font-size: 32px;
  font-family: '楷体';
}
.d2 {
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
}
.d2 .food {
  width: 256px;
  height: 166px;
  border: 2px solid #fff;
  transition: 0.5s ease;
}
.d2 .food:hover {
  width: 296px;
  height: 206px;
}
.d2 .food img {
  width: 100%;
  height: 100%;
}
.d3 {
  width: 260px;
  display: flex;
  flex: 7 7 auto;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
  padding: 0 20px;
}
.d3 p {
  font-size: 20px;
  font-family: '楷体';
  text-indent: 32px;
}
.d4 {
  width: 220px;
  color: #666;
  display: flex;
  flex: 3 3 auto;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
}
.d4 .hot {
  position: absolute;
  right: 0;
}
.info {
  width: 100%;
  height: 150px;
}
.info .score {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.info p {
  margin-top: 10px;
}
.info .score ul {
  margin-left: 20px;
}
.info .score ul li {
  display: inline-block;
}
.d4 .btn {
  position: absolute;
  width: 60px;
  height: 30px;
  right: 20px;
  bottom: 20px;
  background: #B6E9E7;
}
</style>
