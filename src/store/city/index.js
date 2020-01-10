const state={
  nm:window.localStorage.getItem('nm')||'北京',
  id:window.localStorage.getItem('id')||1
}
const actions={}
const mutations={
  City_Info(state,payload){
    state.nm=payload.nm
    state.id=payload.id

  }
}
export default{
  namespaced:true,
  state,
  actions,
  mutations
}
