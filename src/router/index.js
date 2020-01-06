/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'*',
    redirect:'/move'
  },
	{
		path:"/move",
    name:'move',
		component:()=>import("@/views/move/move.vue")
	},
	{
		path:'/list',
		component:()=>import('@/views/list/list.vue')
	},{
		path:'/our',
		component:()=>import('@/views/our/our.vue')
	},
  {
  	path:'/search',
  	component:()=>import('@/views/search')
  },
  {
  	path:'/city',
  	component:()=>import('@/views/city')
  },
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
