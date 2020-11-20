import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Users from '../views/Users.vue'
import UsersPosts from '../views/UsersPosts.vue'
import UsersProfile from '../views/UsersProfile.vue'
import HeaderHome from '../views/HeaderHome.vue'
import HeaderUsers from '../views/HeaderUsers.vue'

const routes = [
  { path: '/', 
    components: {
      default: Home,
      header: HeaderHome
    }
  },
  { path: '/about', name: 'About', component: About },
  { path: '/users/:id',
    components: {
      default: Users,
      header: HeaderUsers
    },
    props: {
      default: true,
      header:  false
    },
    children: [
      { path: "posts", component: UsersPosts, name: "users-id-posts" },
      { path: "profile", component: UsersProfile, name: "users-id-profile" }
    ]
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
