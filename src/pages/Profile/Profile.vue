<template>
<section class="profile">
    <HeaderTop title="个人中心"></HeaderTop>
    <section class="profile-number">
      <router-link :to="userInfo._id ? '/userinfo': '/login'" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-geren"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top" v-if="!userInfo.phone">{{userInfo.name || '登录/注册'}}</p>
          <p>
            <span class="user-icon">
              <i class="iconfont icon-shouji"></i>
            </span>
            <span class="icon-mobile-number">{{userInfo.phone || '暂无绑定手机号'}}</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-iconjiantouyou"></i>
        </span>
      </router-link>
    </section>
    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:;" class="info_data_link">
          <span class="info_data_top"><span>0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:;" class="info_data_link">
          <span class="info_data_top"><span>0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:;" class="info_data_link">
          <span class="info_data_top"><span>0</span>分</span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 我的订单 -->
      <a href="javasript:;" class="my_order">
        <span>
          <i class="iconfont icon-icon-1"></i>
        </span>
        <div class="my_order_div">
          <span>我的订单</span>
          <span class="my_order_icon">
            <i class="iconfont icon-iconjiantouyou"></i>
          </span>
        </div>
      </a>
      <!-- 积分商城 -->
      <a href="javasript:;" class="my_order">
        <span>
          <i class="iconfont icon-jifen"></i>
        </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
            <i class="iconfont icon-iconjiantouyou"></i>
          </span>
        </div>
      </a>
      <!-- 饿了吧会员卡 -->
      <a href="javasript:;" class="my_order">
        <span>
          <i class="iconfont icon-vip"></i>
        </span>
        <div class="my_order_div">
          <span>饿了吧会员卡</span>
          <span class="my_order_icon">
            <i class="iconfont icon-iconjiantouyou"></i>
          </span>
        </div>
      </a>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 服务中心 -->
      <a href="javasript:;" class="my_order">
        <span>
          <i class="iconfont icon-fuwuzhongxin"></i>
        </span>
        <div class="my_order_div">
          <span>服务中心</span>
          <span class="my_order_icon">
            <i class="iconfont icon-iconjiantouyou"></i>
          </span>
        </div>
      </a>
    </section>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  export default {
    computed: {
      ...mapState(['userInfo'])
    },
    components: {
      HeaderTop
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import "../../common/stylus/mixins.styl"
  .profile //个人中心
    width 100%
    overflow hidden
    .profile-number
      margin-top 45.5px
      .profile-link
        clearFix()
        position relative
        display block
        background $main
        padding 20px 10px
        .profile_image
          float left
          width 60px
          height 60px
          border-radius 50%
          overflow hidden
          vertical-align top
          .icon-geren
            background: #ff3a3a;
            font-size: 62px;
            color: #fff;
        .user-info
          float left
          margin-top 8px
          margin-left 15px
          p
            font-weight 700
            font-size 18px
            color #ffffff
            &.user-info-top
              padding-bottom 8px
            .user-icon
              display inline-block
              margin-left -4px
              width 20px
              height 20px
              .icon-shouji
                font-size 22px;
                vertical-align text-bottom;
            .icon-mobile-number
              font-size 14px
              color #ffffff
              margin-left -5px
        .arrow
          width 12px
          height 12px
          position absolute
          right 15px
          top 40%
          .icon-iconjiantouyou
            color #ffffff
            font-size 5px
    .profile_info_data
      bottom-border-1px(#e4e4e4)
      width 100%
      background #ffffff
      overflow hidden
      .info_data_list
        clearFix()
        .info_data_link
          float left
          width 33%
          text-align center
          border-right 1px solid #f1f1f1
          .info_data_top
            display block
            width 100%
            font-size 14px
            color #333333
            padding 15px 5px 10px
            span
              display inline-block
              font-size 30px
              font-weight 700
              line-height 30px
          .info_data_bottom
            display inline-block
            font-size 14px
            color #666666
            font-weight 400
            padding-bottom 10px
        .info_data_link:nth-of-type(1)
          .info_data_top
            span
              color $main
        .info_data_link:nth-of-type(2)
          .info_data_top
            span
              color #f56800
        .info_data_link:nth-of-type(3)
          .info_data_top
            span
              color #ffcc0a
    .profile_my_order
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #ffffff
      .my_order
        display flex
        align-items center
        padding-left 15px
        >span
          display flex
          align-items center
          width 20px
          height 20px
          margin-right: 5px;
          >.iconfont
            margin-left -10px
            font-size 30px
          .icon-icon-1
            color $main
          .icon-jifen
            color #ff0000
          .icon-vip
            color #ff9900    
          .icon-fuwuzhongxin
            color $main
        .my_order_div
          width 100%
          border-bottom 1px solid #f1f1f1
          padding 18px 10px 18px 0
          font-size 16px
          color #333333
          display flex
          justify-content space-between
          span
            display block
          .my_order_icon
            width 10px
            height 10px
            .icon-iconjiantouyou
              color #bbbbbb
              font-size 10px
</style>