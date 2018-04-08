export default {
  // 定义一些突变的方法 如果不通过 commit('SET_ADDRESS', address) 会报错 
  // SET_ADDRESS: (state, address) => {
  //   state.address = address
  // },
  SET_KTVSTORE: (state, data) => {
    state.ktvStore = data
  }
}