<template>
  <div class="section-two">
    <div class="section-two-header">
      <div class="two-header-d1">
        <strong>旅游精选美食</strong>
        <span>让我们来尝遍湖北的美食与小吃</span>
      </div>
      <div class="more-content">
        <ul>
          <li
            v-for="(item, index) in citiesinfo[0].scities"
            :key="index"
            @click="getFoods(item)"
          >
            <a
              href="#1"
              :class="{ active: currentIndex1 === index }"
              @click="currentIndex1 = index"
              >{{ item }}</a
            >
          </li>
        </ul>
        <div class="more2">
          <a href="#1">更多</a>
        </div>
      </div>
    </div>
    <div class="one2">
      <span>全部：</span>
      <ul>
        <li v-for="(item, index) in cinfoFoods" :key="index">
          <a
            href="#1"
            :class="{ active: currentIndex2 === index }"
            @click="currentIndex2 = index"
            >{{ item.name }}</a
          >
        </li>
      </ul>
    </div>
    <div class="section-two-nav">
      <!-- <div class="nav-left"> -->
      <el-carousel
        class="nav-left"
        :interval="2000"
        arrow="always"
        height="618px"
        indicator-position="none"
      >
        <el-carousel-item
          class="left"
          v-for="(item, index) in citiesinfo[0].sfood1"
          :key="index"
        >
          <img :src="item.url" alt width="100%" height="620px" />
          <a href="/meishi">
            <h1>优惠选购</h1>
            店里等你
          </a>
          <p>
            <span>{{ item.area }}特色</span>
          </p>
        </el-carousel-item>
      </el-carousel>
      <div class="right">
        <div class="right-d1" v-for="(item, index) in foodSpots" :key="index">
          <div class="dd1" :class="{ hide: currentIndex3 !== index }" v-for="(item1, index) in item" :key="index">
            <img
              :src="item1.url"
              alt
              :title="item1.name"
              width="100%"
              height="200px"
            />
          </div>
          <ul>
            <li v-for="(item1, index) in item" :key="index">
              <a href="#1" @mouseover="currentIndex3 = index">
                {{ item1.name }}
              </a>
            </li>
          </ul>
          <p>
            <span>{{ item[0].spot }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionTwo',
  props: ['citiesinfo'],
  data() {
    return {
      currentIndex1: 0,
      currentIndex2: 0,
      currentIndex3: 0,
      cinfoFoods: [],
      cname: '',
      foodSpots: []
    }
  },
  methods: {
    getFoods(area) {
      this.cname = area
      this.cinfoFoods = []
      var sfood2 = this.citiesinfo[0].sfood2
      this.cinfoFoods = sfood2.filter(function (item) {
        return item.area === area
      })

      var cinfoFoods = this.cinfoFoods
      this.foodSpots = []
      var getArrs = function (arr, attr) {
        var attrValue = arr.map(item => {
          return item[attr]
        })
        var attrValueList = []
        for (var i = 0; i < attrValue.length; i++) {
          if (attrValue.indexOf(attrValue[i]) === i) {
            attrValueList.push(attrValue[i])
          }
        }
        var newAttr = []
        var newAttrs = []
        for (var n = 0; n < attrValueList.length; n++) {
          newAttr = []
          newAttr = arr.filter(function (item) {
            return item[attr] === attrValueList[n]
          })
          newAttrs.push(newAttr)
        }
        return newAttrs
      }
      this.foodSpots = getArrs(cinfoFoods, 'spot')
    }
  },
  beforeMount() {
    this.getFoods(this.citiesinfo[0].scities[0])
  }
}
</script>

<style scoped lang="scss">
.hide {
  display: none;
}
.active {
  border-bottom: 2px solid #f00;
}
.section-two {
  width: 70%;
  margin: 50px auto;
  overflow: hidden;
  min-width: 1000px;
}
.section-two-header {
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #666;
  display: flex;
}
.two-header-d1 {
  display: flex;
  align-items: flex-end;
}
.two-header-d1 strong {
  font-size: 30px;
  color: #4fb2d9;
  margin: 0 0 4px;
}
.two-header-d1 span {
  font-size: 13px;
  height: 17px;
  margin: 0 0 6px 40px;
}
.more-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 30px;
  padding-left: 20px;
  align-self: flex-end;
  flex: 1 1 auto;
}
.more-content ul li {
  display: inline;
  margin: 0 5px;
  font-size: 13px;
}
.more-content ul li a {
  color: #666;
}
.more-content .more2 a {
  color: #4fb2d9;
}
.one2 {
  display: flex;
  margin: 10px 0;
}
.one2 span {
  width: 60px;
  height: 30px;
}
.one2 ul li {
  display: inline;
  margin: 0 10px 20px;
  font-size: 15px;
}
.one2 a {
  color: #666;
}
.section-two-nav {
  width: 100%;
  height: 620px;
  display: flex;
}
.section-two-nav .nav-left {
  width: 338px;
  position: relative;
}
.section-two-nav .nav-left .left {
  width: 100%;
  border: 1px solid #4fb2d9;
  display: flex;
}
.section-two-nav .left a {
  position: absolute;
  width: 100%;
  top: 30%;
  text-align: center;
  color: #fff;
  font-size: 34px;
}
.left a h1 {
  font-size: 68px;
  margin: 0 0 30px;
}
.section-two-nav .left p {
  position: absolute;
  right: 0;
  bottom: 0;
  color: #fff;
  background: #00b4c5;
  height: 26px;
}
.section-two-nav .right {
  width: 658px;
  flex: 1 1 auto;
  display: flex;
  justify-content: space-around;
  align-content: space-between;
}
.right-d1 {
  width: 308px;
  height: 303px;
  border: 1px solid #4fb2d9;
  position: relative;
}
.right-d1 .dd1 {
  position: absolute;
}
.right-d1 ul {
  margin: 5px 0 0 5px;
  position: absolute;
  top: 202px;
}
.right-d1 ul li {
  margin-bottom: 5px;
}
.right-d1 a {
  color: #077c9b;
}
.right-d1 p {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 26px;
  line-height: 26px;
  background: #00b4c5;
  color: #fff;
}
</style>
