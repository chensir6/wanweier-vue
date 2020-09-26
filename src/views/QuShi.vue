<template>
  <div>
    <Header :citiesinfo="citiesinfo" />
    <div class="container">
      <div class="header2">
        <h2>
          玩味论谈
          <span>（分享你的玩味心经）</span>
        </h2>
        <div class="title1">
          <span>旅游与美食的交流圣地，每一个人的内心境地!</span>
          <a href="html/check.html">我要发表</a>
        </div>
      </div>
      <div class="wave"></div>
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

<style scoped lang="scss">
.container {
  width: 80%;
  margin: 0 auto;
}
.header2 {
  height: 150px;
  margin-top: 20px;
  background: rgb(235, 235, 235);
}
.header2 h2 {
  color: #4fb2d9;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.header2 h2 span {
  color: #ccc;
  font-size: 18px;
}
.header2 .title1 {
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
}
.header2 .title1 a {
  margin-left: 100px;
  color: #666;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  line-height: 30px;
  text-align: center;
  background: skyblue;
}
.wave {
  width: 100%;
  height: 8px;
  background-size: 16px 16px;
  background-repeat: repeat-x;
  background-image: linear-gradient(
      135deg,
      transparent 45%,
      #ccc 55%,
      transparent 60%
    ),
    linear-gradient(45deg, transparent 45%, #ccc 55%, transparent 60%);
}
</style>
