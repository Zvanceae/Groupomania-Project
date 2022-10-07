import { createRouter, createWebHistory } from 'vue-router'
import SignupForm from '../views/SignupForm.vue'
import SignIn from '../views/SignIn.vue'

const routes = [
  {
    path: '/',
    name: 'signUp',
    component: SignupForm
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignIn
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

