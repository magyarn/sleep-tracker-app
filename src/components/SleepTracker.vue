<template>
  <main class="sleep-tracker-wrapper mt-5">
    <b-container>
      <b-row class="pt-4">
        <b-col class="journal-header">
          <h3 class="my-4 bm">My Sleep Journal</h3>
          <b-btn v-if="entries.length <7" v-b-modal.modal3 class="btn-success btn-entry" size="lg">+ New Night</b-btn>
          <b-btn v-else class="btn-outline-danger btn-entry" v-b-modal.modal4 size="lg">Clear Journal Entries</b-btn>
        </b-col>
      </b-row>
      <p>Below is a private journal for
      recording your sleep habits and goals. You can return here
      anytime in the future and your entries will still be here.</p>
      <b-row>
        <b-col>
          <b-card class="sleep-entry-card">
            <my-why></my-why>
          </b-card>
        </b-col>
      </b-row>
      <b-card-group deck>
        <b-card class="sleep-entry-card sleep-tips-card">
          <h3>Overview</h3>
          <p v-if="averageHoursOfSleep">Average: {{averageHoursOfSleep}} hours</p>
          <p v-else>Average: Nothing to report yet</p>
          <ul class="stat-list">
            <li v-for="(category, index) in getStreaks()" :key="index" >
              <b-row class="my-2">
                <b-col lg="3" xl="5">
                  <p v-if="index==0" class="desktop-days-row">{{streakLabels[index]}}</p>
                  <p v-else>{{streakLabels[index]}}</p>
                </b-col>
                <b-col v-if="index==0" class="desktop-days-row" lg="8" xl="7">
                  <ul class="stat-streak">
                    <li v-for="(night, index) in week" :key="index" class="night-label">{{night}}</li>
                  </ul>
                </b-col>
                <b-col v-else lg="8" xl="7">
                  <ul class="stat-streak">
                    <li v-for="(day, index) in category.data" :key="index + 100">
                      <span v-if="day" class="performed-habit">
                        <img class="bonus-badge" :src="performedHabitImage(category)" alt="">
                      </span>
                      <span v-else class="failed-habit">
                        <img class="bonus-badge" :src="failedHabitImage(category)" alt="">
                      </span>
                    </li>
                    <li v-for="(day, index) in days" :key="index">
                      <span class="neutral-habit">
                        <img class="bonus-badge" :src="neutralHabitImage(category)" alt="">
                      </span>
                    </li>
                  </ul>
                </b-col>
              </b-row>
            </li>
          </ul>
        </b-card>
        <b-card class="sleep-entry-card sleep-tips-card">
          <my-sleep-tips></my-sleep-tips>
        </b-card>
      </b-card-group>
      <b-row class="night-cards">
        <b-col>
          <b-row>
            <b-col v-if="entries.length==0" xs="12" sm="12" md="6" lg="4" xl="4">
              <b-card
                 class="mb-4 sleep-entry-card"
                 no-body>
                 <b-card-body>
                   <h3>Night 1</h3>
                   <p>Nothing to report yet</p>
                   <ul class="habit-list">
                     <li class="neutral">
                       <img src="/my-sleep-score/static/img/moon-white.png" alt="moon" class="bonus-badge">
                     </li>
                     <li class="neutral">
                       <img src="/my-sleep-score/static/img/alarm-white.png" alt="alarm" class="bonus-badge">
                     </li>
                     <li class="neutral">
                       <img src="/my-sleep-score/static/img/phone-white.png" alt="phone" class="bonus-badge">
                     </li>
                     <li class="neutral">
                       <img src="/my-sleep-score/static/img/light-white.png" alt="light" class="bonus-badge">
                     </li>
                     <li class="neutral">
                       <img src="/my-sleep-score/static/img/wine-white.png" alt="wine glass" class="bonus-badge">
                     </li>
                     <li class="neutral">
                       <img src="/my-sleep-score/static/img/coffee-white.png" alt="coffee cup" class="bonus-badge">
                     </li>
                   </ul>
                 </b-card-body>
                 <b-card-footer style="padding: .75rem">
                   <b-button v-b-modal.modal3 class="mr-2 btn-outline-white">+ New Night</b-button>
                 </b-card-footer>
              </b-card>
            </b-col>
            <b-col v-for="(entry, index) in entries" :key="index" xl="4" lg="6" md="12" sm="12" xs="12">
              <b-card
                 class="mb-4 sleep-entry-card sleep-tips-card"
                 no-body>
                 <b-card-body>
                   <h3>Night {{index + 1}}</h3>
                   <p>{{entry.hours}} hours •
                     <span v-if="entry.rested==0">Exhausted</span>
                     <span v-if="entry.rested==1">Not well rested</span>
                     <span v-if="entry.rested==2">Somewhat rested</span>
                     <span v-if="entry.rested==3">Pretty rested</span>
                     <span v-if="entry.rested==4">Very well rested</span>
                   </p>
                   <ul class="habit-list">
                     <li v-if="entry.bedtime" class="performed">
                       <img src="/my-sleep-score/static/img/moon.png" alt="moon" class="bonus-badge">
                     </li>
                     <li v-else class="failed">
                       <img src="/my-sleep-score/static/img/moon-red.png" alt="moon" class="bonus-badge">
                     </li>
                     <li v-if="entry.waketime" class="performed">
                       <img src="/my-sleep-score/static/img/alarm.png" alt="alarm clock" class="bonus-badge">
                     </li>
                     <li v-else class="failed">
                       <img src="/my-sleep-score/static/img/alarm-red.png" alt="alarm" class="bonus-badge">
                     </li>
                     <li v-if="entry.screens" class="performed">
                       <img src="/my-sleep-score/static/img/phone.png" alt="phone" class="bonus-badge">
                     </li>
                     <li v-else class="failed">
                       <img src="/my-sleep-score/static/img/phone-red.png" alt="phone" class="bonus-badge">
                     </li>
                     <li v-if="entry.brightLights" class="performed">
                       <img src="/my-sleep-score/static/img/light.png" alt="light" class="bonus-badge">
                     </li>
                     <li v-else class="failed">
                       <img src="/my-sleep-score/static/img/light-red.png" alt="light" class="bonus-badge">
                     </li>
                     <li v-if="entry.noAlcohol" class="performed">
                       <img src="/my-sleep-score/static/img/wine.png" alt="wine glass" class="bonus-badge">
                     </li>
                     <li v-else class="failed">
                       <img src="/my-sleep-score/static/img/wine-red.png" alt="wine glass" class="bonus-badge">
                     </li>
                     <li v-if="entry.noCaffeine" class="performed">
                       <img src="/my-sleep-score/static/img/coffee.png" alt="coffee cup" class="bonus-badge">
                     </li>
                     <li v-else class="failed">
                       <img src="/my-sleep-score/static/img/coffee-red.png" alt="coffee cup" class="bonus-badge">
                     </li>
                   </ul>
                 </b-card-body>
                 <b-card-footer style="padding: .75rem">
                   <b-button class="mr-2 btn-outline-white" @click="showEditDayModal(index)">Edit</b-button>
                   <b-button class="mr-2" variant="outline-danger" @click="deleteEntry(index)">Delete</b-button>
                 </b-card-footer>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <feedback-modal ref="myModalRef"></feedback-modal>
      <edit-day-modal ref="myModalRef2"></edit-day-modal>
      <add-day-modal ref="myModalRef3"></add-day-modal>
      <clear-entries-modal ref="myModalRef4"></clear-entries-modal>
    </b-container>
  </main>
</template>

<script>
import store from '../store'
import MyWhy from './MyWhy'
import MySleepTips from './MySleepTips'
import FeedbackModal from './FeedbackModal'
import AddDayModal from './AddDayModal'
import EditDayModal from './EditDayModal'
import ClearEntriesModal from './ClearEntriesModal'
store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state))
})
export default {
  name: 'SleepTracker',
  store,
  beforeCreate () {
    this.$store.commit('initialiseStore')
  },
  components: {
    MyWhy,
    MySleepTips,
    FeedbackModal,
    AddDayModal,
    EditDayModal,
    ClearEntriesModal
  },
  data () {
    return {
      week: [1, 2, 3, 4, 5, 6, 7],
      streakLabels: [
        'Nights',
        'Stick to a Bedtime',
        'Rise and Shine',
        'Shut Off Screens',
        'Dim the Lights',
        'Lose the Booze',
        'Cut Off the Coffee'
      ],
      showingAllStats: false,
      performedHabitImages: [
        '/my-sleep-score/static/img/moon.png',
        '/my-sleep-score/static/img/alarm.png',
        '/my-sleep-score/static/img/phone.png',
        '/my-sleep-score/static/img/light.png',
        '/my-sleep-score/static/img/wine.png',
        '/my-sleep-score/static/img/coffee.png'
      ],
      failedHabitImages: [
        '/my-sleep-score/static/img/moon-red.png',
        '/my-sleep-score/static/img/alarm-red.png',
        '/my-sleep-score/static/img/phone-red.png',
        '/my-sleep-score/static/img/light-red.png',
        '/my-sleep-score/static/img/wine-red.png',
        '/my-sleep-score/static/img/coffee-red.png'
      ],
      neutralHabitImages: [
        '/my-sleep-score/static/img/moon-white.png',
        '/my-sleep-score/static/img/alarm-white.png',
        '/my-sleep-score/static/img/phone-white.png',
        '/my-sleep-score/static/img/light-white.png',
        '/my-sleep-score/static/img/wine-white.png',
        '/my-sleep-score/static/img/coffee-white.png'
      ],
      strategies: this.$store.getters.strategies,
      modalPage: 0,
      hours: null,
      hourOptions: [
        {value: null, text: 'Please select a number'},
        {value: 1, text: 1},
        {value: 2, text: 2},
        {value: 3, text: 3},
        {value: 4, text: 4},
        {value: 5, text: 5},
        {value: 6, text: 6},
        {value: 7, text: 7},
        {value: 8, text: 8},
        {value: 9, text: 9},
        {value: 10, text: 10},
        {value: 11, text: 11},
        {value: 12, text: 12}
      ],
      rested: '',
      restedOptions: [
        {value: '0', text: '😩 Nope, I\'m exhausted'},
        {value: '1', text: '😞 Not really'},
        {value: '2', text: '😐 Somewhat'},
        {value: '3', text: '🙂 Yep, I feel good'},
        {value: '4', text: '🤗 Oh yeah! I feel great!'}
      ],
      bedtime: null,
      yesNo: [
        {value: true, text: 'Yes'},
        {value: false, text: 'No'}
      ],
      waketime: null,
      screens: null,
      brightLights: null,
      noAlcohol: null,
      noCaffeine: null
    }
  },
  computed: {
    days () {
      return new Array(7 - this.entries.length)
    },
    allFields () {
      return this.$store.getters.allFields
    },
    allItems () {
      return this.$store.getters.allItems
    },
    tips () {
      return this.$store.getters.currentTips
    },
    dailyScore: {
      get: function () {
        return this.$store.getters.currentDailyScore
      },
      set: function (newValue) {
      }
    },
    entries () {
      return this.$store.getters.entries
    },
    hoursOnly () {
      return this.$store.getters.hoursOnly
    },
    averageHoursOfSleep () {
      return this.$store.getters.averageHoursOfSleep
    },
    bedtimeStreak () {
      return this.$store.getters.bedtimeStreak
    },
    waketimeStreak () {
      return this.$store.getters.waketimeStreak
    },
    screentimeStreak () {
      return this.$store.getters.screentimeStreak
    },
    brightLightsStreak () {
      return this.$store.getters.brightLightsStreak
    },
    noAlcoholStreak () {
      return this.$store.getters.noAlcoholStreak
    },
    noCaffeineStreak () {
      return this.$store.getters.noCaffeineStreak
    }
  },
  methods: {
    updateScore: function (dataItem, thingThatChanged) {
      const payload = {
        dataItem,
        thingThatChanged
      }
      this.$store.dispatch('updateScore', payload)
    },
    giveFeedback: function (dataItem) {
      dataItem.saved = !dataItem.saved
      const payload = dataItem
      this.$store.dispatch('updateTips', payload)
    },
    showModal (dataItem) {
      this.giveFeedback(dataItem)
      this.dailyScore = dataItem.daily_score
      this.$refs.myModalRef.$refs.myModalRef.show()
    },
    showEditDayModal (index) {
      const entryToEdit = this.entries[index]
      this.$store.dispatch('entryToEdit', entryToEdit)
      this.$refs.myModalRef2.$refs.myModalRef2.show()
    },
    closeModal: function () {
      this.$refs.myModalRef3.hide()
      this.tips = []
      this.score = 0
    },
    modalPageIncrement () {
      this.modalPage++
    },
    modalPageDecrement () {
      this.modalPage--
    },
    addEntry () {
      const entry = {
        id: this.entries.length,
        hours: this.hours,
        rested: this.rested,
        bedtime: this.bedtime,
        waketime: this.waketime,
        screens: this.screens,
        brightLights: this.brightLights,
        noAlcohol: this.noAlcohol,
        noCaffeine: this.noCaffeine,
        bonusPoints: 0
      }
      this.$store.dispatch('addEntry', entry)
      this.$refs.myModalRef3.hide()
      this.clearCurrentDataPoints()
    },
    deleteEntry (index) {
      this.$store.dispatch('deleteEntry', index)
    },
    clearCurrentDataPoints () {
      this.hours = null
      this.rested = null
      this.bedtime = null
      this.waketime = null
      this.screens = null
      this.brightLights = null
      this.noAlcohol = null
      this.noCaffeine = null
      this.modalPage = 0
    },
    getStreaks () {
      return [
        {
          label: 'Nights',
          data: this.days
        },
        {
          label: 'Consistent Bedtime',
          data: this.bedtimeStreak
        },
        {
          label: 'Consistent Waketime',
          data: this.waketimeStreak
        },
        {
          label: 'No screens (1 hour)',
          data: this.screentimeStreak
        },
        {
          label: 'No bright lights',
          data: this.brightLightsStreak
        },
        {
          label: 'No alcohol (3 hours)',
          data: this.noAlcoholStreak
        },
        {
          label: 'No caffeine (7 hours)',
          data: this.noCaffeineStreak
        }
      ]
    },
    showFewerStats () {
      this.showingAllStats = false
    },
    showMoreStats () {
      this.showingAllStats = true
    },
    performedHabitImage (category) {
      if (category.label === 'Consistent Bedtime') {
        return this.performedHabitImages[0]
      } else if (category.label === 'Consistent Waketime') {
        return this.performedHabitImages[1]
      } else if (category.label === 'No screens (1 hour)') {
        return this.performedHabitImages[2]
      } else if (category.label === 'No bright lights') {
        return this.performedHabitImages[3]
      } else if (category.label === 'No alcohol (3 hours)') {
        return this.performedHabitImages[4]
      } else if (category.label === 'No caffeine (7 hours)') {
        return this.performedHabitImages[5]
      }
    },
    failedHabitImage (category) {
      if (category.label === 'Consistent Bedtime') {
        return this.failedHabitImages[0]
      } else if (category.label === 'Consistent Waketime') {
        return this.failedHabitImages[1]
      } else if (category.label === 'No screens (1 hour)') {
        return this.failedHabitImages[2]
      } else if (category.label === 'No bright lights') {
        return this.failedHabitImages[3]
      } else if (category.label === 'No alcohol (3 hours)') {
        return this.failedHabitImages[4]
      } else if (category.label === 'No caffeine (7 hours)') {
        return this.failedHabitImages[5]
      }
    },
    neutralHabitImage (category) {
      if (category.label === 'Consistent Bedtime') {
        return this.neutralHabitImages[0]
      } else if (category.label === 'Consistent Waketime') {
        return this.neutralHabitImages[1]
      } else if (category.label === 'No screens (1 hour)') {
        return this.neutralHabitImages[2]
      } else if (category.label === 'No bright lights') {
        return this.neutralHabitImages[3]
      } else if (category.label === 'No alcohol (3 hours)') {
        return this.neutralHabitImages[4]
      } else if (category.label === 'No caffeine (7 hours)') {
        return this.neutralHabitImages[5]
      }
    }
  },
  mounted: function () {
    this.getStreaks()
  }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
.sleep-tracker-wrapper {
  background-image: url('/my-sleep-score/static/img/background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
  color: $white;
}

.sleep-entry-card {
  background: $darkBlue2;
}

.journal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  @media (max-width: 761px) {
    display: block;
  }
}

.habit-list,
.stat-list,
.stat-streak {
  padding-left: 0;
  list-style: none;
  margin: 0;
}

.sleep-tips-card {
  margin-top: 2rem;
  @media (max-width: 989px) {
    margin-top: 1rem;
    margin-bottom: 0;
  }
}

.stat-list p {
  margin: 0;
  @media (max-width: 989px) {
    margin-top: 1rem;
  }
}

.desktop-days-row {
  @media (max-width: 989px) {
    display: none;
  }
}

.centered {
  text-align: center;
}

.category-row {
  margin: .25rem 0;
}

.habit-list,
.stat-streak {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  .mobile-day-header {
    display: none;
    @media (max-width: 989px) {
      display: block;
      color: $elephantGrey;
      text-align: center;
      padding: 0;
      margin: 0;
    }
  }
}

.night-label {
  width: 35px;
  text-align: center;
}

.night-cards {
  margin-top: .5rem;
}

.performed-habit {
  border-radius: 50%;
  height: 35px;
  width: 35px;
  border: 1px solid $green;
  display: flex;
  justify-content: center;
  align-items: center;
}

.neutral-habit {
  border-radius: 50%;
  height: 35px;
  width: 35px;
  border: 1px solid $elephantGrey;
  display: flex;
  justify-content: center;
  align-items: center;
}

.failed-habit {
  border-radius: 50%;
  height: 35px;
  width: 35px;
  border: 1px solid $red;
  display: flex;
  justify-content: center;
  align-items: center;
}

.habit-list li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: .25rem;
  height: 35px;
  width: 35px;
  overflow: hidden;
  border-radius: 50%;
  &.performed {
    border: 1px solid $green;
  }
  &.failed {
    border: 1px solid $red;
  }
  &.neutral {
    border: 1px solid $elephantGrey;
  }
}

.bonus-badge {
  height: 20px;
  width: 20px;
}

</style>
