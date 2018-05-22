<template>
<footer class="footer_guide border-1px">
  <a href="javascript:;" class="guide_item" @click="goto('/msite')" :class="{on: isCurrent('/msite')}">
    <span class="item_icon">
      <i class="iconfont icon-U"></i>
    </span>
    <span>外卖</span>
  </a>
  <a href="javascript:;" class="guide_item"  @click="goto('/search')" :class="{on: isCurrent('/search')}">
    <span class="item_icon">
      <i class="iconfont icon-search"></i>
    </span>
    <span>搜索</span>
  </a>
  <a href="javascript:;" class="guide_item"  @click="goto('/order')" :class="{on: isCurrent('/order')}">
    <span class="item_icon">
      <i class="iconfont icon-dingdan-copy"></i>
    </span>
    <span>订单</span>
  </a>
  <a href="javascript:;" class="guide_item"  @click="goto('/profile')" :class="{on: isCurrent('/profile')}">
    <span class="item_icon">
      <i class="iconfont icon-gerenkuang"></i>
    </span>
    <span>个人中心</span>
  </a>
</footer>
</template>

<script>
  export default {
    methods: {
      goto (path) {
        this.$router.replace(path)
      },
      isCurrent (path) {
        return this.$route.path === path
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../common/stylus/mixins.styl'
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #ffffff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      .item_icon
        transition transform .3s
      &.on
        color $main
        .item_icon
          transform translateY(-1px)
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>