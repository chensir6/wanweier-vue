import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import DingZhi from '../views/DingZhi.vue'
import MeiShi from '../views/MeiShi.vue'
import QuShi from '../views/QuShi.vue'
import JianJie from '../views/JianJie.vue'
import Person from '../views/Person.vue'
import Us from '../views/Us.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/DingZhi',
    name: 'DingZhi',
    component: DingZhi
  },
  {
    path: '/MeiShi',
    name: 'MeiShi',
    component: MeiShi
  },
  {
    path: '/QuShi',
    name: 'QuShi',
    component: QuShi
  },
  {
    path: '/JianJie',
    name: 'JianJie',
    component: JianJie
  },
  {
    path: '/Us',
    name: 'Us',
    component: Us
  },
  {
    path: '/Person',
    name: 'Person',
    component: Person
  }
]

const router = new VueRouter({
  routes
})

export default router
