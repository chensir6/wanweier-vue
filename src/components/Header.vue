<template>
  <div class="header" ref="header">
    <div class="header-bg">
      <div class="header-left">
        <div>
          <a href="/">
            <img id="img1" src="../assets/images/common/1.png" alt />
          </a>
        </div>
        <a href="/">
          <span>
            玩味儿
            <p>www.a1a1.cn</p>
          </span>
        </a>
      </div>
      <div class="header-new">
        <div class="date">{{ date }}</div>
        <div class="new">
          <span>热点：</span>
          <el-carousel
            height="24px"
            direction="vertical"
            indicator-position="none"
          >
            <el-carousel-item
              v-for="(item, index) in citiesinfo[0].smsg"
              :key="index"
            >
              <a href="/wuhan/info1">{{ item }}</a>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="header-right">
        <div class="person" v-if="isLogin">
          <a href="/person">个人中心</a>
        </div>
        <div class="login" v-else>
          <a href="/login" target>登录</a>
          <a href="/register" target>注册</a>
        </div>
        <div id="more">
          <div class="title2">
            <a href="javascript:;">更多</a>
          </div>
          <div class="rows"></div>
        </div>
        <!-- <div class="most_content">
          <ul>
            <li><a href="javascript:;">问题反馈</a></li>
            <li><a href="javascript:;">服务中心</a></li>
            <li><a href="/logout">注销</a></li>
          </ul>
        </div> -->
      </div>
    </div>
    <div
      :class="['header-nav', flag ? 'fix' : '']"
      ref="headerNav"
      :style="headerNavStyleObj"
    >
      <div class="nav-menu">
        <router-link
          :to="item.url"
          @click.native="setTab($event)"
          v-for="(item, index) in navMenu"
          :key="index"
        >
          {{ item.value }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['citiesinfo'],
  data() {
    return {
      navMenu: [
        { url: '/homex', value: '首页' },
        { url: '/dingZhi', value: '玩味儿定制' },
        { url: '/meishi', value: '玩味儿美食' },
        { url: '/qushi', value: '玩味儿趣事' },
        { url: '/jianjie', value: '玩味儿简介' },
        { url: '/us', value: '联系我们' }
      ],
      headerNavStyleObj: {
        width: '100%'
      },
      isLogin: false,
      date: '',
      flag: false,
      scrollTop: 0
    }
  },
  methods: {
    getMyDate() {
      var myDate = new Date()
      var y = myDate.getFullYear()
      var m = myDate.getMonth() + 1
      m = m > 9 ? m : '0' + m
      var d = myDate.getDate()
      d = d > 9 ? d : '0' + d
      var z = myDate.getDay() - 1
      var arr = ['一', '二', '三', '四', '五', '六', '天']
      this.date = y + '-' + m + '-' + d + ' ' + '星期' + arr[z]
    },
    setTab(e) {
      e.target.classList.add('on')
    },
    scrollToTop() {
      const that = this
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 145) {
        that.flag = true
        this.headerNavStyleObj.width = this.$refs.header.offsetWidth + 'px'
      } else {
        that.flag = false
      }
    },
    setWidth() {
      this.headerNavStyleObj.width = this.$refs.header.offsetWidth + 'px'
    }
  },
  mounted() {
    this.getMyDate()
    const that = this
    window.addEventListener('scroll', that.scrollToTop)
    window.addEventListener('resize', that.setWidth)
  },
  destroyed() {
    const that = this
    window.removeEventListener('scroll', that.scrollToTop)
    window.removeEventListener('resize', that.setWidth)
  }
}
</script>

<style scoped lang="scss">
.header {
  width: 80%;
  min-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  color: #fff;
  a {
    color: white;
  }
  .header-bg {
    height: 145px;
    background: url(../assets/images/common/背景.png) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a:hover {
      color: #4fb2d9;
    }
    .header-left {
      width: 250px;
      height: 145px;
      display: flex;
      margin-left: 5%;
      align-items: center;
      flex: 1 1 auto;
      #img1 {
        width: 110px;
      }
      a {
        width: 120px;
        height: 67px;
        margin-left: 20px;
      }
      span {
        font-size: 40px;
        font-family: '楷体';
        p {
          font-size: 16px;
          font-family: 'microsoft yahei';
          margin: 0;
        }
      }
    }
    .header-new {
      width: 280px;
      height: 80px;
      .date {
        display: flex;
      }
      .new {
        display: flex;
        align-items: center;
        height: 40px;
      }
      /deep/ .el-carousel__container {
        width: 200px;
        color: #fff;
      }
    }
    .header-right {
      width: 130px;
      height: 30px;
      margin-right: 20px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      align-self: flex-end;
      .login a {
        margin-right: 5px;
      }
    }
  }
  .header-nav {
    background-color: #4fb2d9;
    .nav-menu {
      width: 1000px;
      height: 50px;
      display: flex;
      font-size: 1em;
      margin: 0 auto;
      line-height: 50px;
      a {
        width: 100px;
        margin: 0 5px;
        color: white;
        flex: 1 1 auto;
        text-align: center;
      }
      a:hover {
        background: #e4393c;
      }
    }
  }
}
.on {
  background: #e4393c;
}
.fix {
  position: fixed;
  top: 0;
  z-index: 30;
  margin: 0 auto;
}
</style>
