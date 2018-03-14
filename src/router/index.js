import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import SleepTracker from '@/components/SleepTracker'
import SleepStrategies from '@/components/SleepStrategies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/my-sleep-score/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/my-sleep-score/sleep-journal',
      name: 'SleepTracker',
      component: SleepTracker
    },
    {
      path: '/my-sleep-score/sleep-strategies',
      name: 'SleepStrategies',
      component: SleepStrategies
    }
  ]
})
