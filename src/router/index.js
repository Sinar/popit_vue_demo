import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Persons from '@/components/Persons'
import Dummy from '@/components/Dummy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/persons',
      name: 'Persons',
      component: Persons
    },
    {
      path: '/dummy',
      name: 'Dummy',
      component: Dummy
    }
  ]
})
