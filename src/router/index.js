/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
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
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
