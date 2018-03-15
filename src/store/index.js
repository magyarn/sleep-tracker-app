import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function findFails (entry) {
  const entryKeys = Object.keys(entry).filter(key =>
    key !== ('id') &&
    key !== 'rested' &&
    key !== 'hours'
  )
  const fails = []
  entryKeys.forEach(key => {
    if (!entry[key]) {
      fails.push(key)
    }
  })
  return fails
}

export default new Vuex.Store({
  state: {
    why: {
      saved: false,
      text: 'I want to improve my sleep because...'
    },
    entries: [],
    entryToEdit: {
      hours: 0,
      rested: 0,
      bedtime: false,
      waketime: false,
      screens: false,
      brightLights: false,
      noAlcohol: false,
      noCaffeine: false
    },
    dailyScore: 0,
    strategies: [
      {
        title: 'Stick to a bedtime',
        icon: '../../static/img/moon-white.png',
        mobileShow: false,
        text: 'A consistent bedtime (within an hour of your goal) is key to better sleep.'
      },
      {
        title: 'Rise and Shine',
        icon: '../../static/img/alarm-white.png',
        mobileShow: false,
        text: 'Waking up at a consistent time (within an hour of your goal) helps you feel more rested and sleep better the next day. This means weekends, too!'
      },
      {
        title: 'Shut Off Screens',
        icon: '../../static/img/phone-white.png',
        mobileShow: false,
        text: 'We know the lure of nighttime Netflix, but your sleep will drastically improve without any screens (that means phones!) for an hour before sleep.'
      },
      {
        title: 'Dim the Lights',
        icon: '../../static/img/light-white.png',
        mobileShow: false,
        text: 'Phone and TV screens aren’t your only sleep enemy. Bright lights around your home can mess with you, too. Avoid bright lights for an hour before bed.'
      },
      {
        title: 'Lose the Booze',
        icon: '../../static/img/wine-white.png',
        mobileShow: false,
        text: 'Avoid alcoholic drinks within 3 hours of your bedtime. It may feel like it helps you get to sleep, but it wears off quickly and leads to less effective rest.'
      },
      {
        title: 'Cut Off the Coffee',
        icon: '../../static/img/coffee-white.png',
        mobileShow: false,
        text: 'Avoid caffeine for 7 hours before your bedtime. That includes caffeine from soda, teas, and coffees. '
      }
    ],
    trackedStrategies: [],
    habitIcons: [
      {
        pathRed: '../../static/img/battery-red.png',
        pathWhite: '../../static/img/battery-white.png',
        pathGreen: '../../static/img/battery.png',
        alt: 'battery'
      },
      {
        pathRed: '../../static/img/hourglass-red.png',
        pathWhite: '../../static/img/hourglass-white.png',
        pathGreen: '../../static/img/hourglass.png',
        alt: 'hourglass'
      },
      {
        pathRed: '../../static/img/moon-red.png',
        pathWhite: '../../static/img/moon-white.png',
        pathGreen: '../../static/img/moon.png',
        alt: 'moon'
      },
      {
        pathRed: '../../static/img/alarm-red.png',
        pathWhite: '../../static/img/alarm-white.png',
        pathGreen: '../../static/img/alarm.png',
        alt: 'alarm clock'
      },
      {
        pathRed: '../../static/img/phone-red.png',
        pathWhite: '../../static/img/phone-white.png',
        pathGreen: '../../static/img/phone.png',
        alt: 'cell phone'
      },
      {
        pathRed: '../../static/img/light-red.png',
        pathWhite: '../../static/img/light-white.png',
        pathGreen: '../../static/img/light.png',
        alt: 'light'
      },
      {
        pathRed: '../../static/img/wine-red.png',
        pathWhite: '../../static/img/wine-white.png',
        pathGreen: '../../static/img/wine.png',
        alt: 'wine glass'
      },
      {
        pathRed: '../../static/img/coffee-red.png',
        pathWhite: '../../static/img/coffee-white.png',
        pathGreen: '../../static/img/coffee.png',
        alt: 'coffee cup'
      }
    ],
    tips: {
      bedtime: [
        'Head to sleep around the same time each night.',
        'Set a bedtime reminder alarm on your phone.',
        'Use a wind-down routine to set you up for rest.'
      ],
      waketime: [
        'Are there things in your schedule you control that would help you wake up closer to the same time across the weekdays and weekends?',
        'If you are waking up later than you’d hoped on free mornings, you may need more rest than you’ve allowed yourself. Try heading to sleep earlier.',
        'Give your body a few days to get comfortable with a new schedule.'
      ],
      screens: [
        'If you’re used to watching something as you fall asleep, a noise machine may help you transition to a more quiet bedtime routine.',
        'Feel bored without your phone before bed? Try reading by a dim light.',
        'Choose a time to set your phone up to charge away from your bed, so it’s out of reach during the tempting times.'
      ],
      brightLights: [
        'Try a simple dimmer switch outlet for any lamps in your bedroom.',
        'The light bulbs you use can make a difference. Use a red-tinted or incandescent bulb, rather than an LED that puts out blue light.',
        'Take advantage of this low-light hour before bed to unwind.'
      ],
      noAlcohol: [
        'Schedule outings earlier in the evening to allow for 3 hours between your last alcoholic drink and sleep.',
        'Give your body a few days to get used to sleeping without alcohol if you often have a nightcap.',
        'Replace the muscle and mind relaxation that can come from alcohol. Try herbal tea, meditation, or stretching.'
      ],
      noCaffeine: [
        'Set a time in the afternoon that’s easy to remember so you won’t have to think before choosing coffee or herbal tea for your next fill up.',
        'Replace evening sodas with sparkling water.',
        'Drink more water, which also helps with side effects from cutting back on caffeine.'
      ]
    }
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
      return Math.round((totalHours / numberOfEntries) * 10) / 10
    },
    bedtimeStreak: state => {
      return state.entries.map(entry => entry.bedtime)
    },
    waketimeStreak: state => {
      return state.entries.map(entry => entry.waketime)
    },
    screentimeStreak: state => {
      return state.entries.map(entry => entry.screens)
    },
    brightLightsStreak: state => {
      return state.entries.map(entry => entry.brightLights)
    },
    noAlcoholStreak: state => {
      return state.entries.map(entry => entry.noAlcohol)
    },
    noCaffeineStreak: state => {
      return state.entries.map(entry => entry.noCaffeine)
    },
    habitIcons: state => {
      return state.habitIcons
    },
    randomTips: state => habit => {
      const randomInt = Math.floor(Math.random(3))
      return state.tips[habit][randomInt]
    },
    mostRecentFails: state => {
      if (state.entries.length) {
        const mostRecent = state.entries[state.entries.length - 1]
        return findFails(mostRecent)
      }
    }
  }
})
