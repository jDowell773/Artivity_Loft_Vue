import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import UsersShow from "../views/UsersShow.vue";
import MainBoard from "../views/MainBoard.vue";
import NewPost from "../views/NewPost.vue"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout
  }, 
  {
    path: "/users/:id",
    name: "users show",
    component: UsersShow
  },
  {
    path: "/main_board",
    name: "main board",
    component: MainBoard 
  },
  {
    path: "/new_post",
    name: "new post",
    component: NewPost  
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
