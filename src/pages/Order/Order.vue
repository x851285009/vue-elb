<template>
<section class="order">
  <HeaderTop title="订单列表"></HeaderTop>
  <section class="order_on_login">
    <img src="./images/others/person.png" alt="person">
    <h3>登录后查看订单信息</h3>
    <button>立即登录</button>
  </section>
</section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  export default {
    components: {
      HeaderTop
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  $main = #f44336
  .order //订单
    width 100%
    .order_on_login
      padding-top 140px
      width 60%
      margin 0 auto
      text-align center
      >img 
        display block
        width 100%
        height 30%
      >h3
        padding 10px 0
        font-size 17px
        color #6a6a6a
      >button
        margin-top 10px 
        display inline-block
        background $main
        font-size 14px
        color #ffffff
        border 0
        outline none
        border-radius 5px
        padding 10px 20px
</style>