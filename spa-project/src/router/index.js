import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Users from '../views/Users.vue'
import UsersPosts from '../views/UsersPosts.vue'
import UsersProfile from '../views/UsersProfile.vue'

const routes = [
  { path: '/',      name: 'Home',  component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/users/:id',
    name: 'User',
    component: Users,
    props: true,
    children: [
      { path: "posts", component: UsersPosts, name: "users-id-posts" },
      { path: "profile", component: UsersProfile, name: "users-id-profile" }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
