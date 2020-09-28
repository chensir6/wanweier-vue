<template>
  <div class="banner">
    <el-carousel height="600px">
      <el-carousel-item
        v-for="(item, index) in citiesinfo[0].sarea"
        :key="index"
      >
        <img :src="item.url" alt :title="item.title" />
      </el-carousel-item>
    </el-carousel>
    <a href="/DingZhi"
      ><h1>玩味儿~</h1>
      我们同你一起</a
    >
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: ['citiesinfo'],
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.banner {
  width: 80%;
  min-width: 1100px;
  margin: 0 auto;
  position: relative;
  background-color: #777;
}
.banner img {
  width: 100%;
  height: 600px;
}
.banner a {
  position: absolute;
  left: 40%;
  top: 30%;
  color: white;
  font-size: 40px;
  opacity: 0.8;
  z-index: 2;
}
</style>
