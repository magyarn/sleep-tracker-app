<template>
  <main class="sleep-tracker-wrapper mt-5">
    <b-container>
      <b-row class="pt-4">
        <b-col class="journal-header">
          <h2 class="mt-4">My Sleep Journal</h2>
          <b-btn v-if="entries.length <7" v-b-modal.modal3 class="btn-success">Add New Entry</b-btn>
          <b-btn v-else class="btn-outline-success" v-b-modal.modal4>Clear Entries</b-btn>
        </b-col>
      </b-row>
      <b-card-group deck class="my-4">
        <b-card class="sleep-entry-card">
          <h3>My Statistics</h3>
          <p>Average: {{averageHoursOfSleep}} hours</p>
          <b-row>
            <b-col xs="5" sm="5" md="5" lg="5" xl="5">
              <ul class="stat-list">
                <li>Day</li>
                <li>Consistent bedtime</li>
                <li>Consistent waketime</li>
                <li>No screens (1 hour)</li>
                <li>No bright lights</li>
                <li>No alcohol (3 hours)</li>
                <li>No coffee (7 hours)</li>
              </ul>
            </b-col>
            <b-col v-for="(entry, index) in entries" :key="index" xs="1" sm="1" md="1" lg="1" xl="1">
              <ul class="stat-list">
                <li>{{index + 1}}</li>
                <li v-if="entry.bedtime" >
                  <span class="performed-habit"></span>
                </li>
                <li v-else>
                  <span  class="failed-habit"></span>
                </li>
                <li v-if="entry.waketime">
                  <span class="performed-habit"></span>
                </li>
                <li v-else>
                  <span  class="failed-habit"></span>
                </li>
                <li v-if="entry.screens">
                  <span class="performed-habit"></span>
                </li>
                <li v-else>
                  <span  class="failed-habit"></span>
                </li>
                <li v-if="entry.brightLights">
                  <span class="performed-habit"></span>
                </li>
                <li v-else>
                  <span  class="failed-habit"></span>
                </li>
                <li v-if="entry.noAlcohol">
                  <span class="performed-habit"></span>
                </li>
                <li v-else>
                  <span  class="failed-habit"></span>
                </li>
                <li v-if="entry.noCaffeine">
                  <span class="performed-habit"></span>
                </li>
                <li v-else>
                  <span  class="failed-habit"></span>
                </li>
              </ul>
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
                   <p>Hours you slept</p>
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
                   <p>{{entry.hours}} hours
                     <span v-if="entry.rested==0" class="rested-emoji">😩</span>
                     <span v-if="entry.rested==1" class="rested-emoji">😞</span>
                     <span v-if="entry.rested==2" class="rested-emoji">😐</span>
                     <span v-if="entry.rested==3" class="rested-emoji">🙂</span>
                     <span v-if="entry.rested==4" class="rested-emoji">🤗</span>
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
                   <b-button class="mr-2" variant="outline-success" @click="showEditDayModal(index)">Edit</b-button>
                   <b-button class="mr-2" variant="outline-success" @click="deleteEntry(index)">Delete</b-button>
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
    }
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

.habit-list, .stat-list {
  padding-left: 0;
  list-style: none;
  margin: 0;
}

.habit-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
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

.bonus-badge-empty {
  box-shadow: inset 1px 1px 2px 1px rgba(0, 0, 0, 0.175);
  background-color: $darkBlue1;
  border: 3px solid $white;
}

.hours {
  font-size: 4rem;
  margin: 0;
  padding: 0;
}
</style>
