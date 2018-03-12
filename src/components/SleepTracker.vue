<template>
  <main class="sleep-tracker-wrapper mt-5">
    <b-container>
      <b-row class="pt-4">
        <b-col class="journal-header">
          <h2 class="my-4 bm">My Sleep Journal</h2>
          <b-btn v-if="entries.length <7" v-b-modal.modal3 class="btn-success">Add New Entry</b-btn>
          <b-btn v-else class="btn-outline-danger" v-b-modal.modal4>Clear Entries</b-btn>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p>Below is a private journal for recording your sleep habits and goals. You can return here
          anytime in the future and your entries will still be here.</p>
        </b-col>
      </b-row>
      <b-card-group deck class="my-4">
        <b-card class="sleep-entry-card">
          <h3>My Statistics</h3>
          <p v-if="averageHoursOfSleep">Average: {{averageHoursOfSleep}} hours</p>
          <p v-else>Average: Nothing to report yet</p>
          <b-row class="desktop-stats">
            <b-col>
              <ul class="stat-list">
                <li>
                  <b-row v-for="(category, index) in getStreaks()" :key="index">
                    <b-col lg="5" xl="5">
                      <p v-if="index==0" class="desktop-days-row">{{streakLabels[index]}}</p>
                      <p v-else>{{streakLabels[index]}}</p>
                    </b-col>
                    <b-col v-if="index==0" class="desktop-days-row" lg="7" xl="7">
                      <ul class="stat-streak">
                        <li v-for="(day, index) in days" :key="index">{{day + 1}}</li>
                      </ul>
                    </b-col>
                    <b-col v-else lg="7" xl="7">
                      <ul class="stat-streak">
                        <li v-for="day in days" :key="day">
                          <span v-if="category[day]" class="performed-habit"></span>
                          <span v-else class="failed-habit"></span>
                        </li>
                      </ul>
                    </b-col>
                  </b-row>
                </li>
              </ul>
            </b-col>
          </b-row>
          <b-row class="mobile-stats">
            <b-col>
              <ul class="stat-list">
                <li>
                  <b-row v-for="(category, index) in getStreaks()" :key="index">
                    <b-col lg="5" xl="5">
                      <p v-if="index==0" class="desktop-days-row">{{streakLabels[index]}}</p>
                      <p v-if="index > 0 && index <=2 && !showingAllStats">{{streakLabels[index]}}</p>
                      <p v-if="index > 0 && showingAllStats">{{streakLabels[index]}}</p>
                    </b-col>
                    <b-col v-if="index==0" class="desktop-days-row" lg="7" xl="7">
                      <ul class="stat-streak">
                        <li v-for="(day, index) in days" :key="index">{{day + 1}}</li>
                      </ul>
                    </b-col>
                    <b-col v-else lg="7" xl="7">
                      <ul class="stat-streak">
                        <li v-if="index <=2 && !showingAllStats" v-for="day in days" :key="day">
                          <p class="mobile-day-header">{{day + 1}}</p>
                          <span v-if="category[day]" class="performed-habit"></span>
                          <span v-else class="failed-habit"></span>
                        </li>
                        <li v-if="showingAllStats" v-for="day in days" :key="day">
                          <p class="mobile-day-header">{{day + 1}}</p>
                          <span v-if="category[day]" class="performed-habit"></span>
                          <span v-else class="failed-habit"></span>
                        </li>
                      </ul>
                    </b-col>
                  </b-row>
                </li>
              </ul>
              <b-button v-if="!showingAllStats" class="btn-outline-white mt-4" @click="showMoreStats()">Show More Statistics</b-button>
              <b-button v-else class="btn-outline-white mt-4" @click="showFewerStats()">Show Fewer Statistics</b-button>
            </b-col>
          </b-row>
        </b-card>
        <b-card class="sleep-entry-card">
          <my-why></my-why>
        </b-card>
      </b-card-group>
      <b-row class="my-4">
        <b-col>
          <b-row>
            <b-col v-if="entries.length==0" xs="12" sm="12" md="6" lg="4" xl="4">
              <b-card
                 class="mb-4 sleep-entry-card"
                 no-body>
                 <b-card-body>
                   <h3>Day 1</h3>
                   <p>Nothing to report yet</p>
                   <ul class="habit-list">
                     <li class="failed">
                       <img src="../../static/img/moon-white.png" alt="moon" class="bonus-badge">
                     </li>
                     <li class="failed">
                       <img src="../../static/img/alarm-white.png" alt="alarm" class="bonus-badge">
                     </li>
                     <li class="failed">
                       <img src="../../static/img/phone-white.png" alt="phone" class="bonus-badge">
                     </li>
                     <li class="failed">
                       <img src="../../static/img/light-white.png" alt="light" class="bonus-badge">
                     </li>
                     <li class="failed">
                       <img src="../../static/img/wine-white.png" alt="wine glass" class="bonus-badge">
                     </li>
                     <li class="failed">
                       <img src="../../static/img/coffee-white.png" alt="coffee cup" class="bonus-badge">
                     </li>
                   </ul>
                 </b-card-body>
                 <b-card-footer style="padding: .75rem">
                   <b-button v-b-modal.modal3 class="mr-2" variant="outline-success">Add New Entry</b-button>
                 </b-card-footer>
              </b-card>
            </b-col>
            <b-col v-for="(entry, index) in entries" :key="index" xl="4" lg="6" md="12" sm="12" xs="12">
              <b-card
                 class="mb-4 sleep-entry-card"
                 no-body>
                 <b-card-body>
                   <h3>Day {{index + 1}}</h3>
                   <p>{{entry.hours}} hours •
                     <span v-if="entry.rested==0">Exhausted</span>
                     <span v-if="entry.rested==1">Not well rested</span>
                     <span v-if="entry.rested==2">Somewhat rested</span>
                     <span v-if="entry.rested==3">Pretty rested</span>
                     <span v-if="entry.rested==4">Very well rested</span>
                   </p>
                   <ul class="habit-list">
                     <li v-if="entry.bedtime" class="performed">
                       <img src="../../static/img/moon.png" alt="moon" class="bonus-badge">
                     </li>
                     <li v-else class="failed">
                       <img src="../../static/img/moon-white.png" alt="moon" class="bonus-badge">
                     </li>
                     <li v-if="entry.waketime" class="performed">
                       <img src="../../static/img/alarm.png" alt="alarm clock" class="bonus-badge">
                     </li>
                     <li v-else class="failed">
                       <img src="../../static/img/alarm-white.png" alt="alarm" class="bonus-badge">
                     </li>
                     <li v-if="entry.screens" class="performed">
                       <img src="../../static/img/phone.png" alt="phone" class="bonus-badge">
                     </li>
                     <li v-else class="failed">
                       <img src="../../static/img/phone-white.png" alt="phone" class="bonus-badge">
                     </li>
                     <li v-if="entry.brightLights" class="performed">
                       <img src="../../static/img/light.png" alt="light" class="bonus-badge">
                     </li>
                     <li v-else class="failed">
                       <img src="../../static/img/light-white.png" alt="light" class="bonus-badge">
                     </li>
                     <li v-if="entry.noAlcohol" class="performed">
                       <img src="../../static/img/wine.png" alt="wine glass" class="bonus-badge">
                     </li>
                     <li v-else class="failed">
                       <img src="../../static/img/wine-white.png" alt="wine glass" class="bonus-badge">
                     </li>
                     <li v-if="entry.noCaffeine" class="performed">
                       <img src="../../static/img/coffee.png" alt="coffee cup" class="bonus-badge">
                     </li>
                     <li v-else class="failed">
                       <img src="../../static/img/coffee-white.png" alt="coffee cup" class="bonus-badge">
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
    FeedbackModal,
    AddDayModal,
    EditDayModal,
    ClearEntriesModal
  },
  data () {
    return {
      days: [0, 1, 2, 3, 4, 5, 6],
      streakLabels: [
        'Days',
        'Consistent bedtime',
        'Consistent waketime',
        'No screens (1 hour)',
        'No bright lights',
        'No alcohol (3 hours)',
        'No caffeine (7 hours)'
      ],
      showingAllStats: false,
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
        this.days,
        this.bedtimeStreak,
        this.waketimeStreak,
        this.screentimeStreak,
        this.brightLightsStreak,
        this.noAlcoholStreak,
        this.noCaffeineStreak
      ]
    },
    showFewerStats () {
      this.showingAllStats = false
    },
    showMoreStats () {
      this.showingAllStats = true
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
  background-image: url('../../static/img/background.png');
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
}

.habit-list,
.stat-list,
.stat-streak {
  padding-left: 0;
  list-style: none;
  margin: 0;
}

.desktop-stats {
  @media (max-width: 989px) {
    display: none;
  }
}

.mobile-stats {
  @media (min-width: 989px) {
    display: none;
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

.performed-habit {
  display: inline-block;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  background-color: $green;
}

.failed-habit {
  display: inline-block;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  border: 1px solid $elephantGrey;
}

.habit-list li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: .25rem;
  height: 50px;
  width: 50px;
  overflow: hidden;
  border-radius: 50%;
  &.performed {
    border: 1px solid $green;
  }
  &.failed {
    border: 1px solid $elephantGrey;
  }
}

.bonus-badge {
  height: 20px;
  width: 20px;
}

</style>
