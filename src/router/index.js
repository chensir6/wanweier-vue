import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/login/Register.vue'
import Person from '../views/person/Person.vue'
import Home from '../views/home/Home.vue'
import DingZhi from '../components/nav/DingZhi.vue'
import MeiShi from '../components/nav/MeiShi.vue'
import QuShi from '../components/nav/QuShi.vue'
import JianJie from '../components/nav/JianJie.vue'
import Us from '../views/Us.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/login', name: 'login', component: () => import('../views/login/Login.vue') },
  { path: '/register', name: 'register', component: Register },
  {
    path: '/home',
    name: 'home',
    redirect: '/homex',
    component: Home,
    children: [
      { path: '/homex', name: 'homex', component: Homex },
      { path: '/dingzhi', name: 'dingzhi', component: DingZhi },
      { path: '/meishi', name: 'meishi', component: MeiShi },
      { path: '/qushi', name: 'qushi', component: QuShi },
      { path: '/jianjie', name: 'jianjie', component: JianJie },
      { path: '/us', name: 'us', component: Us },
      { path: '/person', name: 'person', component: Person }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
