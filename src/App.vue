<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {

    mounted () {
      this.getAddress()
    },

    methods: {
      ...mapActions(['getAddress'])
    },

    components: {
      FooterGuide
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>