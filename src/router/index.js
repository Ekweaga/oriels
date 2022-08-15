import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue';
import Login from '../components/Login.vue'
import Signup from '../components/signup.vue'
import Aboutus from '../About.vue'

const routes = [
  
    {
      path: '/',
      name: 'Home',
      component:Home
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component:Login
       
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
       // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: '/signup',
        name: 'Signup',
        component:Signup
       
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
       // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: '/aboutus',
        name: 'Aboutus',
        component:Aboutus
       
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
       // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      }
   
  ]


  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  export default router;
  