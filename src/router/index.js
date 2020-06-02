import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Ordering from '@/components/Ordering'
import Order from '@/components/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/Index'  //重定向 active-class 解决首页和其他选中页面同时选中问题
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Ordering',
      name: 'Ordering',
      component: Ordering
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    }
  ]
})
