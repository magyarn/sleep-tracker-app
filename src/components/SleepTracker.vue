<template>
  <b-container>
    <introduction></introduction>
    <b-row class="mt-4">
      <b-col class="journal-header">
        <h2>My Sleep Journal</h2>
        <b-btn v-b-modal.modal3>Add New Entry</b-btn>
      </b-col>
    </b-row>
    <b-row class="my-4">
      <b-col>
        <b-row>
          <b-col v-if="entries.length==0" xs="12" sm="12" md="6" lg="4" xl="4">
            <b-card
               class="mb-4"
               no-body>
               <b-card-body>
                 <h3>Day 1</h3>
                 <p>Hours you slept</p>
                 <b-row>
                   <span class="bonus-badge bonus-badge-empty m-2">🛌🏿</span>
                   <span class="bonus-badge bonus-badge-empty m-2">⏰</span>
                   <span class="bonus-badge bonus-badge-empty m-2">📵</span>
                   <span class="bonus-badge bonus-badge-empty m-2">💡</span>
                   <span class="bonus-badge bonus-badge-empty m-2">🍷</span>
                   <span class="bonus-badge bonus-badge-empty m-2">☕</span>
                 </b-row>
               </b-card-body>
               <b-card-footer style="padding: .75rem">
                 <b-button v-b-modal.modal3 class="mr-2" variant="outline-secondary">Add New Entry</b-button>
               </b-card-footer>
            </b-card>
          </b-col>
          <b-col v-for="(entry, index) in entries" :key="index" xl="4" lg="6" md="12" sm="12" xs="12">
            <b-card
               class="mb-4"
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
                 <b-row>
                   <span v-if="entry.bedtime" class="bonus-badge m-2">🛌🏿</span>
                   <span v-else class="bonus-badge bonus-badge-empty m-2">🛌🏿</span>
                   <span v-if="entry.waketime" class="bonus-badge m-2">⏰</span>
                   <span v-else class="bonus-badge bonus-badge-empty m-2">⏰</span>
                   <span v-if="entry.screens" class="bonus-badge m-2">📵</span>
                   <span v-else class="bonus-badge bonus-badge-empty m-2">📵</span>
                   <span v-if="entry.brightLights" class="bonus-badge m-2">💡</span>
                   <span v-else class="bonus-badge bonus-badge-empty m-2">💡</span>
                   <span v-if="entry.noAlcohol" class="bonus-badge m-2">🍷</span>
                   <span v-else class="bonus-badge bonus-badge-empty m-2">🍷</span>
                   <span v-if="entry.noCaffeine" class="bonus-badge  m-2">☕</span>
                   <span v-else class="bonus-badge bonus-badge-empty m-2">☕</span>
                 </b-row>
               </b-card-body>
               <b-card-footer style="padding: .75rem">
                 <b-button class="mr-2" variant="outline-secondary" @click="showEditDayModal(index)">Edit</b-button>
                 <b-button class="mr-2" variant="outline-secondary" @click="deleteEntry(index)">Delete</b-button>
               </b-card-footer>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <hr/>
    <b-row class="my-4">
      <b-col>
        <h2>Sleep Strategies</h2>
        <p>Review the strategies below. Do any of them make you think of habits
          you’d like to change? Which sound most appealing to you? Pick four strategies
          you’d like to try for the week.</p>
        <b-row>
          <b-col v-for="(strategy, index) in strategies" :key="index" lg="4" md="6" sm="12">
            <b-card
               :title="strategy.title"
               lg="4"
               class="mb-4"
               style="height: 300px">
               <p>{{strategy.text}}</p>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
      </b-col>
    </b-row>
    <feedback-modal ref="myModalRef"></feedback-modal>
    <edit-day-modal ref="myModalRef2"></edit-day-modal>
    <add-day-modal ref="myModalRef3"></add-day-modal>
  </b-container>
</template>

<script>
import store from '../store'
import Introduction from './Introduction'
import FeedbackModal from './FeedbackModal'
import AddDayModal from './AddDayModal'
import EditDayModal from './EditDayModal'
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
    Introduction,
    FeedbackModal,
    AddDayModal,
    EditDayModal
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

<style scoped>
.journal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.bonus-badge {
  display: inline-block;
  background-color: white;
  border: 1px solid #F0F0F0;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  text-align: center;
  padding-top: .5rem;
  padding-left: .3rem;
  font-size: 1rem;
}

.bonus-badge-empty {
  box-shadow: inset 1px 1px 2px 1px rgba(0, 0, 0, 0.175);
  background-color: #F0F0F0;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}

.hours {
  font-size: 4rem;
  margin: 0;
  padding: 0;
}
</style>
