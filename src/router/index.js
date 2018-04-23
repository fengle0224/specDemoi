import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/components/detail'
import Purchase from '@/components/purchase'
import Success from '@/components/success'
import Order from '@/components/order'

Vue.use(Router)
   
export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Detail',
      component: Detail
    },{
      path:"/purchase",
      name:"Purchase",
      component:Purchase
    },{
      path:"/success",
      name:"Success",
      component:Success
    },{
      path:"/order",
      name:"Order",
      component:Order
    }
  ],

  scrollBehavior(to, from, savedPosition) {
  　if (to.hash) {
  　　　　return {
  　　　　　　selector: to.hash
  　　　　}
  　}
 }
 })