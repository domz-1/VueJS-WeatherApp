import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import Home from '@/views/Home.vue'
import DL from '@/views/DL.vue'
import ContactUs from '@/views/ContactUs.vue'
import SignUp from '@/views/SignUp.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUs,
    },
    {
      path: '/download',
      name: 'download',
      component: DL,
    },
    {
      path:'/signup',
      name:'signup',
      component: SignUp
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage,
    }
  ],
})

export default router
