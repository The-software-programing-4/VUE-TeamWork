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
    path: '/MovieShow',
    name: 'MovieShow',
    component: () => import('../views/MovieShow.vue')
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
    path: '/bookInfo',
    name: 'bookInfo',
    component: () => import('../views/BookInfoView.vue')
  },
  {
    path: '/movieInfo',
    name: 'movieInfo',
    component: () => import('../views/MovieInfoView.vue')
  },
  {

    path: '/TopicShow',
    name: 'TopicShow',
    component: () => import('../views/TopicShow.vue')
  },
  {

    path: '/BookShow',
    name: 'BookShow',
    component: () => import('../views/BookShow.vue')
  },
  {
    path: '/WriteReview',
    name: 'WriteReview',
    component: () => import('../views/WriteReview.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
