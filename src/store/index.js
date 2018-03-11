import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    why: {
      saved: false,
      text: 'I want to improve my sleep because...'
    },
    entries: [],
    entryToEdit: null,
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
    dailyScore: 0,
    strategies: [
      {
        title: 'Stick to a bedtime',
        text: 'Try to head to sleep around the same time each night, with in an hour of the last night.'
      },
      {
        title: 'Shut Off Screens',
        text: 'We know the lure of nighttime Netflix, but your sleep will drastically improve without any screens (that means phones!) for an hour before sleep. Try reading by dimmed light or a sound machine to help transition your routine.'
      },
      {
        title: 'Lose the Booze',
        text: 'Avoid alcoholic drinks within 3 hours of your bedtime.'
      },
      {
        title: 'Cut Off the Coffee',
        text: 'Avoid caffeine for 7 hours before your bedtime. Set a time in the afternoon that’s easy to remember so you won’t have to think before choosing coffee or herbal tea for your next fill up.'
      },
      {
        title: 'Stick to a bedtime',
        text: 'Try to head to sleep around the same time each night, with in an hour of the last night.'
      },
      {
        title: 'Set the Scene',
        text: 'Do what you can to create a special space for sleep. Avoid work or other stressful activities in the bedroom. Having a wind-down routine that works for you can help you prepare mentally and physically for better sleep.'
      },
      {
        title: 'Eat Earlier',
        text: 'Avoid having a large meal within three hours of bedtime. '
      },
      {
        title: 'Move More',
        text: 'Getting exercise during the day can help encourage sleep. Keep in mind that more intense activities can actually energize you before bedtime, so you’ll want to find exercise items that work for you.'
      }
    ],
    trackedStrategies: []
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
    },
    setWhy (state, payload) {
      state.why.text = payload.text
      state.why.saved = payload.saved
    },
    setWhyText (state, payload) {
      state.why.text = payload
    },
    setWhySaved (state, payload) {
      state.why.saved = payload
    },
    addEntry (state, payload) {
      state.entries.push(payload)
    },
    setEntryToEdit (state, payload) {
      state.entryToEdit = payload
    },
    deleteEntry (state, payload) {
      state.entries.splice(payload, 1)
    },
    clearEntries (state) {
      state.entries = []
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
    },
    updateWhy ({ commit }, payload) {
      commit('setWhy', payload)
    },
    updateWhyText ({ commit }, payload) {
      commit('setWhyText', payload)
    },
    updateWhySaved ({ commit }, payload) {
      commit('setWhySaved', payload)
    },
    addEntry ({ commit }, payload) {
      commit('addEntry', payload)
    },
    entryToEdit ({ commit }, payload) {
      commit('setEntryToEdit', payload)
    },
    deleteEntry ({ commit }, payload) {
      commit('deleteEntry', payload)
    },
    clearEntries ({ commit }) {
      commit('clearEntries')
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
    },
    getWhy: state => {
      return state.why
    },
    getWhyText: state => {
      return state.why.text
    },
    whyIsSaved: state => {
      return state.why.saved
    },
    strategies: state => {
      return state.strategies
    },
    entries: state => {
      return state.entries
    },
    hoursOnly: state => {
      return state.entries.map(entry => {
        return entry.hours
      })
    },
    entryToEdit: state => {
      return state.entryToEdit
    },
    averageHoursOfSleep: state => {
      const totalHours = state.entries.reduce((sum, entry) => sum + entry.hours, 0)
      const numberOfEntries = state.entries.length
      return Math.round(totalHours / numberOfEntries, 1)
    }
  }
})
