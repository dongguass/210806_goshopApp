/*包含多个基于state getter计算属性的对象*/
export default {
  totalCount(state){
    return state.carFoods.reduce((preTotal,food)=>{
      return preTotal + food.count
    }, 0)
  },

  totalPrice(state){
    return state.carFoods.reduce((preTotal,food)=>{
      return preTotal+ food.count*food.price
    },0)
  }
}
