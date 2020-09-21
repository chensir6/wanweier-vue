<template>
    <div class="section-one">
      <div class="section-one-header">
        <div class="one-header-d1">
          <strong>热门旅游景点</strong>
          <span>湖北有多大，我们将会陪你走多远</span>
        </div>
        <div class="position">
          <ul><li>地理位置</li></ul>
          <div class="more1">
            <ul>
              <li><a href="#1">更多</a></li>
              <li><a href="#1">地理位置</a></li>
              <li><a href="#1">人文景点</a></li>
              <li><a href="#1">最热景点</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="one1">
        <span>全部：</span>
        <ul>
          <li v-for="(item, index) in citiesinfo[0].scities" :key="index" @click="getCinfoPage(item)"><a href="#1">{{ item }}</a></li>
        </ul>
      </div>

      <div class="section-one-nav">
        <div class="section-one-left" @click="page<2?page=1:page--">
          <img src="../assets/images/zuobtn.png" alt />
        </div>
        <ul>
          <li v-for="(item, index) in cinfoPages[(this.page-1)]" :key="index">
            <a href=""><img :src="item.info.url" alt="" class="img" :title="item.info.title"></a>
            <div class="introduce">
              <div class="detail">
                <span class="local">{{ item.info.name }}</span>
                <div class="rank">
                  <span class="container">{{ item.info.label1 }}</span>
                  <span>{{ item.info.label2 }}</span>
                </div>
              </div>
              <p>{{ item.info.detail }}</p>
            </div>
          </li>
        </ul>
        <div class="section-one-right" @click="page>pages-1?page=pages:page++">
          <img src="../assets/images/youbtn.png" alt />
        </div>
        <el-pagination background layout="prev, pager, next" :total="10*pages"></el-pagination>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SectionOne',
  props: ['citiesinfo'],
  data () {
    return {
      cinfoPages: [],
      page: 1,
      pages: 1
    }
  },
  methods: {
    getCinfoPage (area) {
      this.cinfoPages = []
      this.page = 1
      var sinfo = this.citiesinfo[0].sinfo
      var cinfo = sinfo.filter(function (item) {
        return item.area === area
      })
      this.pages = Math.ceil(cinfo.length / 6)
      for (var i = 0; i < this.pages; i++) {
        this.cinfoPages.push(cinfo.slice(6 * i, 6 * (i + 1)))
      }
    }
  },
  mounted () {
    this.getCinfoPage(this.citiesinfo[0].scities[0])
  }
}
</script>

<style scoped lang="scss">
img { width: 100px; }
.section-one { width: 70%; margin: 60px auto; min-width: 1000px; }
.section-one-header { width: 100%; height: 48px; border-bottom: 1px solid #666; display: flex; }
.one-header-d1 { display: flex; align-items: flex-end; }
.one-header-d1 strong { font-size: 30px; color: #4FB2D9; margin: 0 0 4px; }
.one-header-d1 span { font-size: 13px; height: 17px; margin: 0 0 6px 40px; }
.position { display: flex; justify-content: flex-end; align-items: center; width: 500px; height: 30px; align-self: flex-end; flex: 1 1 auto; overflow: hidden; }
.position ul li { display: inline; margin: 0 10px; }
.position .more1 { text-align: center; align-self: flex-start; }
.position .more1 ul:hover .more1 { display: visible; }
.position .more1 ul li { display: block; margin-top: 5px; }
.position ul li a { margin-left: 5px; color: #4FB2D9; }
.one1 { height: 44px; margin: 10px 0; color: #666; font-size: 15px; display: flex; }
.one1 span { width: 60px; }
.one1 li { display: inline; }
.one1 a { font-size: 15px; color: #666; margin-right: 10px; }
.section-one-nav { width: 100%; position: relative;  }
.section-one-left { position: absolute; left: -60px; top: 35%; opacity: 0.2; z-index: 20; width: 50px; }
.section-one-right { position: absolute; right: -50px; top: 35%; opacity: 0.2; z-index: 20; width: 50px; transform: rotate(180deg); }
.section-one-nav ul { width: 100%; height: 800px; display: flex; flex-wrap: wrap; justify-content: space-around; }
.section-one-nav ul li { width: 320px; height: 390px; padding: 5px 5px; overflow: hidden; }
.section-one-nav ul li:hover .introduce { transform: translateY(-140px); background: rgba(102, 102, 102, 0.6); color: #fff; }
.section-one-nav ul li:hover .rank { display: none; }
.section-one-nav ul li:hover { background: rgba(102, 102, 102, 0.6); }
.section-one-nav ul li a { display: block; width: 100%; }
.section-one-nav ul li a .img { width: 320px; height: 300px; border-radius: 5px; }
.introduce {  transition: 0.5s ease-out; }
.introduce .detail { position: relative; }
.introduce .detail .local { height: 60px; line-height: 60px; font-size: 22px; font-family: '楷体'; display: block; margin-left: 32px; }
.rank { position: absolute; bottom: 5px; right: 0; width: 150px; font-size: 14px; }
.rank span { display: block; margin-left: 20px; }
.introduce p { text-indent: 2em; font-size: 14px; color: #fff; }
</style>
