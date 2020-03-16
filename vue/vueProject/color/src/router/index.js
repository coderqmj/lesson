import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'

const Home = () =>
  import('../views/home/Home')

const Color = () => 
  import('../views/colors/Color')


Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/color',
    component: Color
  }
]
const router = new Router({
  routes,
  mode: 'history'
})
export default router