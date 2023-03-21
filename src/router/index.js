import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import LoginPage from "../pages/LoginPage.vue"
import HomePage from "../pages/HomePage.vue"
import TrendsPage from "../pages/TrendsPage.vue"
import UserInformation from "../pages/UserInformation.vue"
import TrendDetail from "../pages/TrendDetail.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/app',
      name: 'app',
      component: App,
     
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserInformation
    },
    {
      path: '/trend/:index',
      name: 'trend',
      component: TrendDetail
    },

  ]
})

export default router
