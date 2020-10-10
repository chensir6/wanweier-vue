<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'JianJie',
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
  beforeMount() {
    this.citiesinfo = JSON.parse(sessionStorage.getItem('citiesinfo'))
  }
}
</script>
<style scoped lang="scss">
</style>
