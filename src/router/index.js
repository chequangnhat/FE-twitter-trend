import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import LoginPage from "../pages/LoginPage.vue"
import HomePage from "../pages/HomePage.vue"
import TrendsPage from "../pages/TrendsPage.vue"
import OverViewPage from "../pages/OverViewPage.vue"
import UserInformation from "../pages/UserInformation.vue"
import TrendDetail from "../pages/TrendDetail.vue"

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       redirect: '/home/1'
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: LoginPage
//     },
//     {
//       path: '/app',
//       name: 'app',
//       component: App,
     
//     },
//     {
//       path: '/home/:country',
//       name: 'country',
//       component: HomePage
//     },
//     {
//       path: '/user/:id',
//       name: 'user',
//       component: UserInformation
//     },
//     {
//       path: '/:country/trend/:index',
//       name: 'trend',
//       component: TrendDetail
//     },

//   ]
// })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/overview',
      name: 'home',
      component: OverViewPage,
      children: [
        {
          path: '/',
          name: 'home',
          redirect: '/home/1'
        },
        
        {
          path: '/app',
          name: 'app',
          component: App,
        },
        {
          path: '/home/:country',
          name: 'country',
          component: HomePage
        },
        {
          path: '/user/:id',
          name: 'user',
          component: UserInformation
        },
        {
          path: '/:country/trend/:index',
          name: 'trend',
          component: TrendDetail
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },

  ]
})

export default router
