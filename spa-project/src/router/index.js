import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Users from '../views/Users.vue'

const routes = [
  { path: '/',      name: 'Home',  component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/users/:id', name: 'User',  component: Users, props: true }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
