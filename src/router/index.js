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
		component:()=>import("@/views/move/move"),
	},
	{
		path:'/list',
		component:()=>import('@/views/list/list'),
    children:[
      {
        path:'',
         components:{
           listcard:()=>import('@/components/ListCard'),
           jlist:()=>import('@/components/Jlist'),
         }
      },
      {
        path:'detail/:moveId',
        component:()=>import("@/views/list/detail"),
        // 多个router-view使用components props也要单独配置
        components:{
          detail:()=>import("@/views/list/detail")
        },
        props:{
          default:()=>import('@/views/list/list'),
          detail:true
        }
      },
    ],
	},{
		path:'/our',
		component:()=>import('@/views/our/our')
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
