const state={
  name:window.localStorage.getItem('name') ||'',
  isAdmin:window.localStorage.getItem('isAdmin')||false,
  userHead:window.localStorage.getItem('userHead')||'',
}
const actions={}
const mutations={
  UserInfo(state,user){
    state.name=user.name,
    state.isAdmin=user.isAdmin,
    state.userHead=user.userHead
  }
}
export default{
  namespaced:true,
  state,
  actions,
  mutations
}
