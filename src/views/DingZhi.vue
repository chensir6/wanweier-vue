<template>
  <div class="dingzhi">
    <Header :citiesinfo="citiesinfo"/>
    <Footer/>
    <ReturnTop/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ReturnTop from '@/components/ReturnTop.vue'
export default {
  name: 'DingZhi',
  data () {
    return {
      citiesinfo: []
    }
  },
  components: {
    Header,
    Footer,
    ReturnTop
  },
  beforeMount () {
    this.citiesinfo = JSON.parse(sessionStorage.getItem('citiesinfo'))
  }
}
</script>
<style scoped lang="scss">
</style>
