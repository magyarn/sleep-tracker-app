<template>
  <b-container>
    <introduction></introduction>
    <b-row>
      <b-col lg="12">
        <b-table striped hover :items="allItems" :fields="allFields">
          <template slot="day" slot-scope="data">
            <p>{{data.index + 1}}</p>
          </template>
          <template slot="more_than_seven" slot-scope="data">
            <b-form-checkbox
            @click.native.stop
            @change="updateScore(data.item, 'more_than_seven')"
            v-model="data.item.more_than_seven"
            :disabled="data.item.saved"></b-form-checkbox>
          </template>
          <template slot="rested" slot-scope="data">
            <b-form-checkbox
            @click.native.stop
            @change="updateScore(data.item, 'rested')"
            v-model="data.item.rested"
            :disabled="data.item.saved"></b-form-checkbox>
          </template>
          <template slot="consistent_bedtime" slot-scope="data">
            <b-form-checkbox
            @click.native.stop
            @change="updateScore(data.item, 'consistent_bedtime')"
            v-model="data.item.consistent_bedtime"
            :disabled="data.item.saved"></b-form-checkbox>
          </template>
          <template slot="consistent_waketime" slot-scope="data">
            <b-form-checkbox
            @click.native.stop
            @change="updateScore(data.item, 'consistent_waketime')"
            v-model="data.item.consistent_waketime"
            :disabled="data.item.saved"></b-form-checkbox>
          </template>
          <template slot="screentime_cutoff" slot-scope="data">
            <b-form-checkbox
            @click.native.stop
            @change="updateScore(data.item, 'screentime_cutoff')"
            v-model="data.item.screentime_cutoff"
            :disabled="data.item.saved"></b-form-checkbox>
          </template>
          <template slot="bright_lights" slot-scope="data">
            <b-form-checkbox
            @click.native.stop
            @change="updateScore(data.item, 'bright_lights')"
            v-model="data.item.bright_lights"
            :disabled="data.item.saved"></b-form-checkbox>
          </template>
          <template slot="no_alcohol" slot-scope="data">
            <b-form-checkbox
            @click.native.stop
            @change="updateScore(data.item, 'no_alcohol')"
            v-model="data.item.no_alcohol"
            :disabled="data.item.saved"></b-form-checkbox>
          </template>
          <template slot="no_caffeine" slot-scope="data">
            <b-form-checkbox
            @click.native.stop
            @change="updateScore(data.item, 'no_caffeine')"
            v-model="data.item.no_caffeine"
            :disabled="data.item.saved"></b-form-checkbox>
          </template>
          <template slot="action" slot-scope="data">
            <b-button v-if="!data.item.saved" @click="showModal(data.item)">Save</b-button>
            <b-button v-else @click="data.item.saved=!data.item.saved">Edit</b-button>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
      </b-col>
    </b-row>
    <feedback-modal ref="myModalRef"></feedback-modal>
  </b-container>
</template>

<script>
import store from '../store'
import Introduction from './Introduction'
import FeedbackModal from './FeedbackModal'
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
    FeedbackModal
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
    closeModal: function () {
      this.$refs.myModalRef.hide()
      this.tips = []
      this.score = 0
    }
  }
}
</script>

<style scoped>

.custom-control-input:hover {
  cursor: pointer;
}
</style>
