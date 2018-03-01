import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fields: [
      {
        key: 'day',
        label: 'Day'
      },
      {
        key: 'more_than_seven',
        label: 'Did you get more than 7 hours of sleep last night? <p class="">6 pts</p>'
      },
      {
        key: 'rested',
        label: 'Do you feel well-rested today? <p class="">3 pts</p>'
      },
      {
        key: 'consistent_bedtime',
        label: 'Was your bedtime within one hour of yesterday\'s? <p class="">3 pts</p>'
      },
      {
        key: 'consistent_waketime',
        label: 'Was your wake time within one hour of yesterday\'s? <p class="">2 pts</p>'
      },
      {
        key: 'screentime_cutoff',
        label: 'Did you stop using digital screens at least one hour before bed? <p class="">3 pts</p>'
      },
      {
        key: 'bright_lights',
        label: 'Did you avoid bright lights for an hour before bed? <p class="">1 pt</p>'
      },
      {
        key: 'no_alcohol',
        label: 'Did you avoid alcohol for 3 hours before bed? <p class="">1 pt</p>'
      },
      {
        key: 'no_caffeine',
        label: 'Did you avoid caffeine for 7 hours before bed? <p class="">1 pt</p>'
      },
      {
        key: 'daily_score',
        label: 'Daily Score',
        sortable: false
      },
      {
        key: 'action',
        label: 'Action'
      }
    ],
    items: [
      {
        more_than_seven: false,
        seven_suggestion: 'Try to get a bit more sleep tonight!',
        rested: false,
        rested_suggestion: 'Avoid oversleeping.',
        consistent_bedtime: false,
        bedtime_suggestion: 'Aim for lights-out around the same time tonight.',
        consistent_waketime: false,
        waketime_suggestion: 'Try getting up close to the same time tomorrow.',
        screentime_cutoff: false,
        screentime_suggestion: 'Power down electronics a bit earlier.',
        bright_lights: false,
        lights_suggestion: 'Consider dimming the lights earlier.',
        no_alcohol: false,
        alcohol_suggestion: 'Avoid alcohol if you\'re close to bedtime.',
        no_caffeine: false,
        caffeine_suggestion: 'Avoid caffeine if you\'re close to bedtime.',
        daily_score: 0,
        saved: false
      },
      {
        more_than_seven: false,
        seven_suggestion: 'Try to get a bit more sleep tonight!',
        rested: false,
        rested_suggestion: 'Avoid oversleeping.',
        consistent_bedtime: false,
        bedtime_suggestion: 'Aim for lights-out around the same time tonight.',
        consistent_waketime: false,
        waketime_suggestion: 'Try getting up close to the same time tomorrow.',
        screentime_cutoff: false,
        screentime_suggestion: 'Power down electronics a bit earlier.',
        bright_lights: false,
        lights_suggestion: 'Consider dimming the lights earlier.',
        no_alcohol: false,
        alcohol_suggestion: 'Avoid alcohol if you\'re close to bedtime.',
        no_caffeine: false,
        caffeine_suggestion: 'Avoid caffeine if you\'re close to bedtime.',
        daily_score: 0,
        saved: false
      },
      {
        more_than_seven: false,
        seven_suggestion: 'Try to get a bit more sleep tonight!',
        rested: false,
        rested_suggestion: 'Avoid oversleeping.',
        consistent_bedtime: false,
        bedtime_suggestion: 'Aim for lights-out around the same time tonight.',
        consistent_waketime: false,
        waketime_suggestion: 'Try getting up close to the same time tomorrow.',
        screentime_cutoff: false,
        screentime_suggestion: 'Power down electronics a bit earlier.',
        bright_lights: false,
        lights_suggestion: 'Consider dimming the lights earlier.',
        no_alcohol: false,
        alcohol_suggestion: 'Avoid alcohol if you\'re close to bedtime.',
        no_caffeine: false,
        caffeine_suggestion: 'Avoid caffeine if you\'re close to bedtime.',
        daily_score: 0,
        saved: false
      },
      {
        more_than_seven: false,
        seven_suggestion: 'Try to get a bit more sleep tonight!',
        rested: false,
        rested_suggestion: 'Avoid oversleeping.',
        consistent_bedtime: false,
        bedtime_suggestion: 'Aim for lights-out around the same time tonight.',
        consistent_waketime: false,
        waketime_suggestion: 'Try getting up close to the same time tomorrow.',
        screentime_cutoff: false,
        screentime_suggestion: 'Power down electronics a bit earlier.',
        bright_lights: false,
        lights_suggestion: 'Consider dimming the lights earlier.',
        no_alcohol: false,
        alcohol_suggestion: 'Avoid alcohol if you\'re close to bedtime.',
        no_caffeine: false,
        caffeine_suggestion: 'Avoid caffeine if you\'re close to bedtime.',
        daily_score: 0,
        saved: false
      },
      {
        more_than_seven: false,
        seven_suggestion: 'Try to get a bit more sleep tonight!',
        rested: false,
        rested_suggestion: 'Avoid oversleeping.',
        consistent_bedtime: false,
        bedtime_suggestion: 'Aim for lights-out around the same time tonight.',
        consistent_waketime: false,
        waketime_suggestion: 'Try getting up close to the same time tomorrow.',
        screentime_cutoff: false,
        screentime_suggestion: 'Power down electronics a bit earlier.',
        bright_lights: false,
        lights_suggestion: 'Consider dimming the lights earlier.',
        no_alcohol: false,
        alcohol_suggestion: 'Avoid alcohol if you\'re close to bedtime.',
        no_caffeine: false,
        caffeine_suggestion: 'Avoid caffeine if you\'re close to bedtime.',
        daily_score: 0,
        saved: false
      },
      {
        more_than_seven: false,
        seven_suggestion: 'Try to get a bit more sleep tonight!',
        rested: false,
        rested_suggestion: 'Avoid oversleeping.',
        consistent_bedtime: false,
        bedtime_suggestion: 'Aim for lights-out around the same time tonight.',
        consistent_waketime: false,
        waketime_suggestion: 'Try getting up close to the same time tomorrow.',
        screentime_cutoff: false,
        screentime_suggestion: 'Power down electronics a bit earlier.',
        bright_lights: false,
        lights_suggestion: 'Consider dimming the lights earlier.',
        no_alcohol: false,
        alcohol_suggestion: 'Avoid alcohol if you\'re close to bedtime.',
        no_caffeine: false,
        caffeine_suggestion: 'Avoid caffeine if you\'re close to bedtime.',
        daily_score: 0,
        saved: false
      },
      {
        more_than_seven: false,
        seven_suggestion: 'Try to get a bit more sleep tonight!',
        rested: false,
        rested_suggestion: 'Avoid oversleeping.',
        consistent_bedtime: false,
        bedtime_suggestion: 'Aim for lights-out around the same time tonight.',
        consistent_waketime: false,
        waketime_suggestion: 'Try getting up close to the same time tomorrow.',
        screentime_cutoff: false,
        screentime_suggestion: 'Power down electronics a bit earlier.',
        bright_lights: false,
        lights_suggestion: 'Consider dimming the lights earlier.',
        no_alcohol: false,
        alcohol_suggestion: 'Avoid alcohol if you\'re close to bedtime.',
        no_caffeine: false,
        caffeine_suggestion: 'Avoid caffeine if you\'re close to bedtime.',
        daily_score: 0,
        saved: false
      }
    ],
    tips: [],
    dailyScore: 0
  },
  mutations: {
    setDailyScore (state, payloadScore) {
      state.dailyScore = payloadScore
    },
    setTips (state, payload) {
      state.tips = payload
    },
    initialiseStore (state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        )
      }
    }
  },
  actions: {
    updateScore: ({ commit }, payload) => {
      if (payload.dataItem.more_than_seven && payload.thingThatChanged === 'more_than_seven') {
        payload.dataItem.daily_score -= 6
      } else if (!payload.dataItem.more_than_seven && payload.thingThatChanged === 'more_than_seven') {
        payload.dataItem.daily_score += 6
      }
      if (payload.dataItem.rested && payload.thingThatChanged === 'rested') {
        payload.dataItem.daily_score -= 3
      } else if (!payload.dataItem.rested && payload.thingThatChanged === 'rested') {
        payload.dataItem.daily_score += 3
      }
      if (payload.dataItem.consistent_bedtime && payload.thingThatChanged === 'consistent_bedtime') {
        payload.dataItem.daily_score -= 3
      } else if (!payload.dataItem.consistent_bedtime && payload.thingThatChanged === 'consistent_bedtime') {
        payload.dataItem.daily_score += 3
      }
      if (payload.dataItem.consistent_waketime && payload.thingThatChanged === 'consistent_waketime') {
        payload.dataItem.daily_score -= 2
      } else if (!payload.dataItem.consistent_waketime && payload.thingThatChanged === 'consistent_waketime') {
        payload.dataItem.daily_score += 2
      }
      if (payload.dataItem.screentime_cutoff && payload.thingThatChanged === 'screentime_cutoff') {
        payload.dataItem.daily_score -= 3
      } else if (!payload.dataItem.screentime_cutoff && payload.thingThatChanged === 'screentime_cutoff') {
        payload.dataItem.daily_score += 3
      }
      if (payload.dataItem.bright_lights && payload.thingThatChanged === 'bright_lights') {
        payload.dataItem.daily_score -= 1
      } else if (!payload.dataItem.bright_lights && payload.thingThatChanged === 'bright_lights') {
        payload.dataItem.daily_score += 1
      }
      if (payload.dataItem.no_alcohol && payload.thingThatChanged === 'no_alcohol') {
        payload.dataItem.daily_score -= 1
      } else if (!payload.dataItem.no_alcohol && payload.thingThatChanged === 'no_alcohol') {
        payload.dataItem.daily_score += 1
      }
      if (payload.dataItem.no_caffeine && payload.thingThatChanged === 'no_caffeine') {
        payload.dataItem.daily_score -= 1
      } else if (!payload.dataItem.no_caffeine && payload.thingThatChanged === 'no_caffeine') {
        payload.dataItem.daily_score += 1
      }
      const payloadScore = {
        dailyScore: payload.dataItem.daily_score
      }
      commit('setDailyScore', payloadScore)
    },
    updateTips ({ commit }, payload) {
      let tips = []
      if (!payload.more_than_seven) { tips.push(payload.seven_suggestion) }
      if (!payload.rested) { tips.push(payload.rested_suggestion) }
      if (!payload.consistent_bedtime) { tips.push(payload.bedtime_suggestion) }
      if (!payload.consistent_waketime) { tips.push(payload.waketime_suggestion) }
      if (!payload.screentime_cutoff) { tips.push(payload.screentime_suggestion) }
      if (!payload.bright_lights) { tips.push(payload.lights_suggestion) }
      if (!payload.no_alcohol) { tips.push(payload.alcohol_suggestion) }
      if (!payload.no_caffeine) { tips.push(payload.caffeine_suggestion) }
      if (payload.daily_score === 20) { tips.push('Congrats! You got a perfect sleep score today!') }
      commit('setTips', tips)
    }
  },
  getters: {
    allFields: state => {
      return state.fields
    },
    allItems: state => {
      return state.items
    },
    currentTips: state => {
      return state.tips
    },
    currentDailyScore: state => {
      return state.dailyScore
    }
  }
})
