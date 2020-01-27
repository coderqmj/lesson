import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import Users from '../components/Users.vue'

const Home = () =>
    import ('../components/Home.vue')
const About = () =>
    import ('../components/About.vue')
const Users = () =>
    import ('../components/Users.vue')
const HomeMessages = () =>
    import ('../components/HomeMessages.vue')
const HomeNews = () =>
    import ('../components/HomeNews.vue')
const Profile = () =>
    import ('../components/Profile.vue')


Vue.use(Router)

export default new Router({
    routes: [{
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            name: 'Home',
            children: [{
                    path: '',
                    // component: HomeNews
                    redirect: 'news'
                },
                {
                    path: 'news',
                    component: HomeNews
                },
                {
                    path: 'message',
                    component: HomeMessages
                }
            ]
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/user/:userId',
            component: Users
        },
        {
            path: '/profile',
            component: Profile
        }
    ],
    mode: 'history',
    linkActiveClass: "active"
})