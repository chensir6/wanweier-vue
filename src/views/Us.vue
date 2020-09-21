<template>
  <div>
    <Header/>
    <Footer/>
    <ReturnTop/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ReturnTop from '@/components/ReturnTop.vue'
export default {
  name: 'Us',
  components: {
    Header,
    Footer,
    ReturnTop
  }
}
</script>
<style scoped lang="scss">
</style>
