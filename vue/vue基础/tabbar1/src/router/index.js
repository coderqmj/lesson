import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../../views/home/Home')


Vue.use(Router)

const routes= [
  {
    path: '',
    name: 'Home',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  }
]
const router = new Router({
  routes,
  mode:"history"
})
export default router
