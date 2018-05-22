/*
包含多个基于state的getter计算属性的对象
 */
export default {
  // 计算个数
  totalCount (state) {
    return state.cartFoods.reduce((perTotal, food) => perTotal + food.count, 0)
  },
  // 计算价格
  totalPrice (state) {
    return state.cartFoods.reduce((perTotal, food) => perTotal + food.count * food.price, 0)
  },
  // 评分
  positiveSize (state) {
    return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType === 0 ? 1 : 0), 0)
  }
}