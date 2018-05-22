// import moment from 'moment'
import Vue from 'vue'
import format from 'date-fns/format'

Vue.filter('date-format', function (value, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  // return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
  return format(value, formatStr)
})