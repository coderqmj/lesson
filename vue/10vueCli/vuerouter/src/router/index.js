import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'

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

const routes = [
    //{
    //     path: '',
    //     redirect: '/home'
    // },
    {
        path: '/home',
        component: Home,
        name: 'Home',
        meta: {
            title: '首页'
        },
        children: [{
                path: '',
                // component: HomeNews
                redirect: 'news'
            },
            {
                path: 'news',
                component: HomeNews,
                meta: {
                    title: '新闻'
                }
            },
            {
                path: 'message',
                component: HomeMessages,
                meta: {
                    title: '消息'
                }
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: '关于'
        }
    },
    {
        path: '/user/:userId',
        component: Users,
        meta: {
            title: '用户'
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: '档案'
        }
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: "active"
})

router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title
    next()
})

export default router