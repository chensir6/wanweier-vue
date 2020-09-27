<template>
  <div class="dingzhi">
    <Header :citiesinfo="citiesinfo" />
    <div class="container">
      <div class="fenlei">
        <div class="item">
          <img src="../assets/images/common/s1-3.png" />
          <img src="../assets/images/common/s1-4.png" />
          <p>1.填写出游需求</p>
        </div>
        <div class="item">
          <img src="../assets/images/common/s1-1.png" />
          <img src="../assets/images/common/s1-4.png" />
          <p>2.制定行程</p>
        </div>
        <div class="item">
          <img src="../assets/images/common/s1-2.png" />
          <img src="../assets/images/common/s1-4.png" />
          <p>3.签约付款</p>
        </div>
        <div class="item1" style="width: 100px">
          <img src="../assets/images/common/s1-2.png" />
          <p>4.快乐出游</p>
        </div>
      </div>
      <div class="xianguan">当季旅游 &nbsp; · &nbsp;HOT SEASON TOUR</div>
      <div class="tra-ul">
        <ul>
          <li>
            <a href="#1">
              <img src="../assets/images/wanwei/三峡.jpg" alt />
            </a>
            <span>三峡大坝</span>
          </li>
          <li>
            <a href="#1">
              <img src="../assets/images/wanwei/神农架.jpg" alt />
            </a>
            <span>神农架</span>
          </li>
          <li>
            <a href="#1">
              <img src="../assets/images/wanwei/土司.jpg" alt />
            </a>
            <span>土司城</span>
          </li>
        </ul>
      </div>

      <div class="head1">
        <div class="head1-left">
          <img src="../assets/images/common/1111.png" alt />
        </div>
        <div class="head1-right">
          <h2>来一次说走就走的旅行</h2>
          <span
            >旅行是一个过程，一次发现,
            是一个自我发现的过程。真正的旅行让我们直面自我。</span
          >
        </div>
      </div>
      <div class="nav2">
        <ul>
          <li v-for="(item, index) in citiesinfo[0].scities" :key="index">
            <a href="#1" @click="getTicket(item)">{{ item }}</a>
          </li>
        </ul>
      </div>
      <div class="chose">
        <div class="ticket">
          <div
            class="ticket1"
            v-for="(item, index) in tickets[page - 1]"
            :key="index"
          >
            <div class="left">
              <img :src="item.url" alt />
              <span>{{ item.name }}</span>
            </div>
            <div class="right">
              <p>地址：{{ item.position }}</p>
              <p>开放时间：{{ item.opentime }}</p>
              <p>票价：{{ item.price }}元/人</p>
              <a href="#1">订票热线</a>
            </div>
          </div>
        </div>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="10 * pages"
        ></el-pagination>
      </div>

      <div class="project">
        <div class="text-center">
          <h2>
            团游推荐·
            <span style="font-size: 25px; font-family: '宋体'; color: #4fb2d9"
              >Tourism</span
            >
          </h2>
          <p>旅行，自由。没有繁琐的计划，没有沉重的负担，只有最纯粹的态度。</p>
        </div>
        <div class="row">
          <div class="d1">
            <a href="#1">
              <img src="../assets/images/wanwei/归元寺.jpg" alt />
              <h3>武汉黄鹤楼+江汉路+东湖3日跟团游</h3>
              <span>￥980.00</span>
            </a>
          </div>
          <div class="d1">
            <a href="#1">
              <img src="../assets/images/wanwei/江汉路步行街.jpg" alt />
              <h3>襄阳古隆中5日跟团游</h3>
              <span>￥1499.00</span>
            </a>
          </div>
          <div class="d1">
            <a href="#1">
              <img src="../assets/images/wanwei/省博.jpg" alt />
              <h3>恩施土司城+大峡谷6日跟团游</h3>
              <span>￥2040.00</span>
            </a>
          </div>
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
  name: 'DingZhi',
  data() {
    return {
      citiesinfo: [],
      page: 1,
      pages: 1,
      tickets: []
    }
  },
  components: {
    Header,
    Footer,
    ReturnTop
  },
  methods: {
    getTicket(area) {
      this.tickets = []
      this.page = 1
      var cinfo = this.citiesinfo[0].sinfo.filter(function (item) {
        return item.area === area
      })
      this.pages = Math.ceil(cinfo.length / 4)
      for (var i = 0; i < this.pages; i++) {
        this.tickets.push(cinfo.slice(4 * i, 4 * (i + 1)))
      }
    }
  },
  beforeMount() {
    this.citiesinfo = JSON.parse(sessionStorage.getItem('citiesinfo'))
    this.getTicket(this.citiesinfo[0].scities[0])
  }
}
</script>
<style scoped lang="scss">
.container {
  width: 80%;
  min-width: 1100px;
  margin: 0 auto;
  overflow: hidden;
  .fenlei {
    height: 150px;
    margin: 60px auto;
    display: flex;
    justify-content: space-around;
    .item {
      height: 150px;
      img {
        width: auto;
        height: 120px;
      }
      p {
        margin-left: 15px;
      }
    }
  }
  .xianguan {
    height: 36px;
    line-height: 36px;
    text-align: center;
    background: #f2f3ed;
  }
  .tra-ul {
    height: 290px;
    ul {
      display: flex;
      justify-content: space-around;
      li {
        width: 300px;
        height: 250px;
        margin: 20px 10px 0 10px;
        flex: 1 1 auto;
        overflow: hidden;
        img {
          width: 100%;
          min-width: 300px;
          height: 200px;
          transition: 0.5s ease-out;
          &:hover {
            transform: scale(1.2, 1.2);
          }
        }
        span {
          line-height: 60px;
          text-align: center;
          display: block;
        }
      }
    }
  }
  .head1 {
    height: 180px;
    background: #f4f4f4;
    display: flex;
    .head1-left {
      width: 25%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex: 1 1 auto;
      img {
        width: 140px;
        height: 140px;
      }
    }
    .head1-right {
      width: 75%;
      height: 180px;
      padding-left: 50px;
      flex: 7 7 auto;
      h2 {
        margin: 50px 0 20px;
        color: #4fb2d9;
      }
    }
  }
  .nav2 {
    height: 40px;
    margin-top: 20px;
    display: flex;
    ul {
      display: flex;
      align-self: flex-end;
      margin-left: 15px;
      li {
        a {
          margin-right: 10px;
          color: #666;
          width: 80px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          border: 1px solid #ccc;
          border-radius: 10px;
          display: block;
        }
      }
    }
  }
  .chose {
    width: 100%;
    .ticket {
      height: 500px;
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      .ticket1 {
        width: 518px;
        height: 220px;
        margin: 10px 15px;
        border: 1px solid red;
        display: flex;
        flex: 1 1 auto;
        .left {
          width: 305px;
          position: relative;
          img {
            width: 305px;
            height: 220px;
          }
          span {
            position: absolute;
            bottom: 10px;
            right: 20px;
            color: white;
          }
        }
        .right {
          width: 213px;
          height: 220px;
          position: relative;
          flex: 1 1 auto;
          p {
            font-size: 14px;
            margin: 20px 0 0 20px;
          }
          a {
            position: absolute;
            bottom: 10px;
            right: 20px;
            display: block;
            padding: 5px 10px;
            background: #f00;
            color: #fff;
          }
        }
      }
    }
  }
  .project {
    width: 100%;
    height: 400px;
    background: #f4f4f4;
    .text-center {
      width: 700px;
      height: 150px;
      margin: 0 auto;
      h2 {
        color: rgb(79, 178, 217);
        font-size: 40px;
        padding: 30px 0 20px;
        text-align: center;
      }
      p {
        font-size: 20px;
        color: #666;
      }
    }
    .row {
      display: flex;
      align-items: center;
      .d1 {
        width: 320px;
        height: 220px;
        position: relative;
        margin: 0 10px;
        flex: 1 1 auto;
        font-size: 13px;
        img {
          width: 100%;
          height: 220px;
        }
        h3 {
          color: white;
          position: absolute;
          left: 10px;
          bottom: 30px;
        }
        span {
          color: white;
          position: absolute;
          left: 10px;
          bottom: 10px;
        }
      }
    }
  }
}
</style>
