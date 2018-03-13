import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import SleepTracker from '@/components/SleepTracker'
import SleepStrategies from '@/components/SleepStrategies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/sleep-journal',
      name: 'SleepTracker',
      component: SleepTracker
    },
    {
      path: '/sleep-strategies',
      name: 'SleepStrategies',
      component: SleepStrategies
    }
  ],
  mode: 'history'
})
