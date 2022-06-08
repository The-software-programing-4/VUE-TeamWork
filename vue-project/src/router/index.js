import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('../views/movie/moviehead.vue'),
    children:[
      {
        path: '/movie/main',
        name: 'main',
        component: () => import('../views/movie/moviemain.vue')
      },
      {
        path: '/movie/info',
        name: 'info',
        component: () => import('../views/movie/movieinfo.vue')
      },
      {
        path: '/movie/search',
        name: 'search',
        component: () => import('../views/movie/moviesearch.vue')
      },
    ]
  },
  {
    path: '/user/message',
    name: 'Message',
    component: () => import('../views/message/message.vue')
  },
  {
    path: '/user/login',
    name: 'Message2',
    component: () => import('../components/Functional/login.vue')
  },
  {

    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: () => import('../views/SignView.vue')
  },
  {
    path: '/phonelogin',
    name: 'PhoneLogin',
    component: () => import('../views/PhoneLoginView.vue')
  },
  {
    path: '/movieInfo',
    name: 'movieInfo',
    component: () => import('../views/MovieInfoView.vue')
  },
  {

    path: '/topic',
    name: 'TopicShow',
    component: () => import('../views/TopicShow.vue'),
    children: [
      {
        path: '/topic/main',
        name: 'main',
        component: () => import('../views/topic/topicmain.vue'),
      },
      {
        path: '/topic/info',
        name: 'info',
        component: () => import('../views/topic/topicinfo.vue'),
      },
      {
        path: '/topic/search',
        name: 'search',
        component: () => import("../components/Topic/searchresult.vue")
      },
    ]
  },
  {
    path: '/book',
    name: 'book',
    component: () => import('../views/book/bookhead.vue'),
    children:[
      {
        path:'/book/main',
        name:'main',
        component:()=>import('../views/book/bookmain.vue')
      },
      {
        path: '/book/bookInfo',
        name: 'bookInfo',
        // component: () => import('../components/Books/bookInfoCard.vue')
        component: () => import('../views/book/BookInfoView.vue')
      },
      {
        path: '/book/search',
        name: 'search',
        // component: () => import('../components/Books/bookInfoCard.vue')
        component: () => import('../views/book/searchView.vue')
      },
    ]
  },
  {
    path: '/WriteReview/:type/:target',
    name: 'WriteReview',
    component: () => import('../views/WriteReview.vue')
  },
  {
    path: '/group',
    name: 'group',
    component: () => import('../views/group/mygroup.vue'),
    children: [
      {
        path: '/group/main',
        name: 'main',
        component: () => import('../views/group/groupmain.vue'),
      },
      {
        path: '/group/search',
        name: 'search',
        component: () => import('../views/group/search.vue'),
      },
      {
        path: '/group/info',
        name: 'info',
        component: () => import('../views/group/info.vue'),
      },
      {
        path: '/group/showtext',
        name: 'text',
        component: () => import('../views/group/showText.vue'),
      },
      {
        path: '/group/manage',
        name: 'manage',
        component: () => import('../views/group/manage.vue'),
      },
    ]
  },
  {
    path: '/group/editor',
    name: 'editor',
    component: () => import('../views/group/editor.vue'),
  },
  {
    path: '/group/create',
    name: 'create',
    component: () => import("../components/group/creategroup.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
