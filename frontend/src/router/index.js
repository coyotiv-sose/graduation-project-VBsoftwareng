import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DoctorsView from '../views/DoctorsView.vue'
import DoctorInfoView from '../views/DoctorInfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/doctors',
      name: 'doctors',
      component: DoctorsView
    },
    {
      path: '/doctors/:doctorId',
      name: 'doctorInfo',
      component: DoctorInfoView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login', // the url u type in browser such as localhost:5137/test
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup', // the url u type in browser such as localhost:5137/test
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/appointment', // the url u type in browser such as localhost:5137/test
      name: 'appointment',
      component: () => import('../views/Appointments.vue')
    },
    {
      path: '/patients', // the url u type in browser such as localhost:5137/test
      name: 'patients',
      component: () => import('../views/PatientsView.vue')
    },
    // {
    //   path: '/medicalRecords', // the url u type in browser such as localhost:5137/test
    //   name: 'medicalRecords',
    //   component: () => import('../views/MedicalRecordsView.vue')
    // },
    {
      path: '/nextPatientsInfo', // the url u type in browser such as localhost:5137/test
      name: 'nextPatientsInfo',
      component: () => import('../views/DoctorsPatientsView.vue')
    }

    // {
    //   path: '/login',
    //   name: 'login',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
