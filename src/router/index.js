import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/components/detail'
import Purchase from '@/components/purchase'
import Success from '@/components/success'

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