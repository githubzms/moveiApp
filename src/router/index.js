/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '*',
  redirect: '/move'
},
{
  path: "/move",
  name: 'move',
  component: () => import("@/views/move/move"),
},
{
  path: '/list',
  component: () => import('@/views/list/list'),
  children: [{
    path: '',
    components: {
      listcard: () => import('@/components/ListCard'),
      jlist: () => import('@/components/Jlist'),
    }
  },
  {
    path: 'detail/:moveId',
    component: () => import("@/views/list/detail"),
    // 多个router-view使用components props也要单独配置
    components: {
      detail: () => import("@/views/list/detail")
    },
    props: {
      default: () => import('@/views/list/list'),
      detail: true
    }
  },
  ],
}, {
  path: '/our',
  component: () => import('@/views/our'),
  children: [{
    path: 'center',
    component: () => import('@/views/our/center.vue')
  }, {
    path: 'login',
    component: () => import('@/components/Login')
  }, {
    path: 'register',
    component: () => import('@/components/Register')
  }, {
    path: 'updatePassword',
    component: () => import('@/components/UpdatePassword')
  }, {
    path: '/our',
    redirect: 'center'
  }]
},
{
  path: '/search',
  component: () => import('@/views/search')
},
{
  path: '/city',
  component: () => import('@/views/city')
}, {
  path: '/admin',
  component: () => import('@/views/admin'),
  children:[
    {
      path:'user',
      component:()=>import('@/views/admin/user')
    },
     {
      path:'movie',
      component:()=>import('@/views/admin/movie')
    },
    {
      path:'adinfo',
      component:()=>import('@/views/admin/adinfo')
    },
    {
      path:'/admin',
     redirect:'/admin/user'
    },
  ]
},
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
