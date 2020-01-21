import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Users from '../components/Users.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            name: 'Home'
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/user/:userId',
            component: Users
        }
    ],
    mode: 'history',
    linkActiveClass: "active"
})