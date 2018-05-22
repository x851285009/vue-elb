import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'

import Split from './components/Split/Split.vue'
import loading from './common/imgs/loading.gif'
import './mock/mockServer' // 加载mockServer即可
import './filters' // 加载过滤器
// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>
Vue.component('Split', Split)
Vue.use(VueLazyLoad, {
  loading
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})