<template>
  <div class="section-two">
    <div class="section-two-header">
      <div class="two-header-d1">
        <strong>旅游精选美食</strong>
        <span>让我们来尝遍湖北的美食与小吃</span>
      </div>
      <div class="more-content">
        <ul><li v-for="(item, index) in citiesinfo[0].scities" :key="index" @click="getFoodNames(item)"><a href="#1">{{ item }}</a></li></ul>
        <div class="more2">
          <a href="#1">更多</a>
        </div>
      </div>
    </div>
    <div class="one2">
      <span>全部：</span>
      <ul><li v-for="(item, index) in cinfoFoods" :key="index"><a href="#1">{{ item.name }}</a></li></ul>
    </div>
    <div class="section-two-nav">
      <div class="left">
        <img src="../assets/images/武汉本地美食/老通城三鲜豆皮.png" alt width="100%" height="620px"/>
        <a href="/meishi"><h1>优惠选购</h1>店里等你</a>
        <p><span>武汉特色</span></p>
      </div>
      <div class="right">
        <div class="right-d1">
          <div>
            <img src="../assets/images/hubeinative/QQ图片20190402103948.jpg" alt title="桂花酒" width="100%" height="200px"/>
          </div>
          <ul>
            <li><a href="#1">桂花酒</a></li>
            <li><a href="#1">崇阳小麻花</a></li>
            <li><a href="#1">贺胜桥土鸡汤</a></li>
          </ul>
          <p><span>咸宁九宫山周边</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionTwo',
  props: ['citiesinfo'],
  data () {
    return {
      cinfoFoods: []
    }
  },
  methods: {
    getFoodNames (area) {
      this.cinfoFoods = []
      var sfood = this.citiesinfo[0].sfood
      this.cinfoFoods = sfood.filter(function (item) {
        return item.area === area
      })
    }
  },
  mounted () {
    this.getFoodNames(this.citiesinfo[0].scities[0])
  }
}
</script>

<style scoped lang="scss">
.section-two { width: 70%; margin: 50px auto; overflow: hidden; min-width: 1000px; }
.section-two-header { width: 100%; height: 48px; border-bottom: 1px solid #666; display: flex; }
.two-header-d1 { display: flex; align-items: flex-end; }
.two-header-d1 strong { font-size: 30px; color: #4FB2D9; margin: 0 0 4px; }
.two-header-d1 span { font-size: 13px; height: 17px; margin: 0 0 6px 40px; }
.more-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 30px;
  padding-left: 20px;
  align-self: flex-end;
  flex: 1 1 auto
}
.more-content ul li { display: inline; margin: 0 5px; font-size: 13px; }
.more-content ul li a { color: #666}
.more-content .more2 a { color:#4FB2D9 }
.one2 { display: flex; margin: 10px 0; }
.one2 span { width: 60px; height: 30px; }
.one2 ul li { display: inline; margin: 0 10px 20px; font-size: 15px; }
.one2 a { color: #666; }
.section-two-nav { width: 100%; height: 620px; display: flex; }
.section-two-nav .left{ width: 338px; align-self: 1 1 auto; position: relative; border: 1px solid #4FB2D9; display: flex; }
.section-two-nav .left a { position: absolute; width: 100%; top: 30%; text-align: center; color: #fff; font-size: 34px; }
.left a h1 { font-size: 68px; margin: 0 0 30px; }
.section-two-nav .left p { position: absolute; right: 0; bottom: 0; color: #fff; background: #00B4C5; height: 26px; }
.section-two-nav .right { width: 658px; align-self: 1 1 auto; }
.right-d1 { width: 308px; height: 310px; margin: 0 0 10px 20px; border: 1px solid #4FB2D9; position: relative; }
.right-d1 ul { margin: 5px 0 0 5px; }
.right-d1 ul li { margin-bottom: 5px; }
.right-d1 a { color: #077C9B }
.right-d1 p { position: absolute; right: 0; bottom: 0; height: 26px; line-height: 26px; background: #00B4C5; color: #fff }
</style>
