<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <router-link slot="left" to="/search" class="header_search" >
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link slot="right" to="/login" class="header_login" >
        <span class="header_login_text" >登录 | 注册</span>
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav border-1px">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a href="javascript:;" class="link_to_food" v-for="(category, index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl + category.image_url" alt="img">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list border-1px">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </section>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'

  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import ShopList from '../../components/ShopList/ShopList.vue'

  export default {
    
    data () {
      return {
        baseImageUrl: 'https://fuss10.elemecdn.com'
      }
    },

    mounted () {
      this.$store.dispatch('getCategorys')
      this.$store.dispatch('getShops')
    },
    // 计算属性
    computed: {
      ...mapState(['address', 'categorys']),
       /*
      根据categorys一维数组生成一个2维数组
      小数组中的元素个数最大是8
       */
      categorysArr () {
        const {categorys} = this
        // 准备空的2维数组
        const arr = []
        // 准备一个小数组(最大长度为8)
        let minArr = []
        // 遍历categorys
        categorys.forEach(c => {
          // 如果当前小数组已经满了, 创建一个新的
          if (minArr.length === 8) {
            minArr = []
          }
          // 如果minArr是空的, 将小数组保存到大数组中
          if (minArr.length === 0) {
            arr.push(minArr)
          }
          // 将当前分类保存到小数组中
          minArr.push(c)
        })
        return arr
      }
    },

    watch: {
      categorys (value) { // categorys数组中有数据了, 在异步更新界面之前执行
        // 界面更新就立即创建Swiper对象
        this.$nextTick(() => { // 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
           /* eslint-disable no-new */
          new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination'
            }
          })
        })
      }
    },

    components: {
      HeaderTop,
      ShopList
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../common/stylus/mixins.styl'
  .msite //首页
    width 100%
    .msite_header
      background-color $main
      position  fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #ffffff
        text-align center
        .header_title_text
          font-size 20px
          color #ffffff
          display block
      .header_login
        font-size 14px
        color #ffffff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #ffffff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background $main
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #ffffff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999999
        .shop_header_title
          color #999999
          font-size 14px
          line-height 20px
</style>