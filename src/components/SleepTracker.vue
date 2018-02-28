<template>
  <b-container>
    <b-row>
      <b-col class="mb-5">
        <h1 class="my-5">What's Your Sleep Score?</h1>
        <p>You don't have to have a perfect score to be well-rested, but raising
          your score even slightly can improve how you feel, as well as how you
          perform throughout the day! Being well-rested is a valuable investment
          in your long term wellness!</p>
        <p>For each day in the table below, answer the questions in regard to
        last night's sleep. Check the box if your answer to the quesiton is 'Yes'.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <b-table striped hover :items="items" :fields="fields">
          <template slot="day" slot-scope="data">
            <p>{{data.index + 1}}</p>
          </template>
          <template slot="seven" slot-scope="data">
            <b-form-checkbox
            @click.native.stop
            @change="if (data.item.more_than_seven) {data.item.daily_score -= 6} else {data.item.daily_score += 6}"
            v-model="data.item.more_than_seven"
            :disabled="data.item.saved"></b-form-checkbox>
          </template>
          <template slot="rest" slot-scope="data">
            <b-form-checkbox
            @click.native.stop
            @change="if (data.item.rested) {data.item.daily_score -= 3} else {data.item.daily_score += 3}"
            v-model="data.item.rested"
            :disabled="data.item.saved"></b-form-checkbox>
          </template>
          <template slot="bedtime" slot-scope="data">
            <b-form-checkbox
            @click.native.stop
            @change="if (data.item.consistent_bedtime) {data.item.daily_score -= 3} else {data.item.daily_score += 3}"
            v-model="data.item.consistent_bedtime"
            :disabled="data.item.saved"></b-form-checkbox>
          </template>
          <template slot="waketime" slot-scope="data">
            <b-form-checkbox
            @click.native.stop
            @change="if (data.item.consistent_waketime) {data.item.daily_score -= 2} else {data.item.daily_score += 2}"
            v-model="data.item.consistent_waketime"
            :disabled="data.item.saved"></b-form-checkbox>
          </template>
          <template slot="screentime" slot-scope="data">
            <b-form-checkbox
            @click.native.stop
            @change="if (data.item.screentime_cutoff) {data.item.daily_score -= 3} else {data.item.daily_score += 3}"
            v-model="data.item.screentime_cutoff"
            :disabled="data.item.saved"></b-form-checkbox>
          </template>
          <template slot="lights" slot-scope="data">
            <b-form-checkbox
            @click.native.stop
            @change="if (data.item.bright_lights) {data.item.daily_score -= 1} else {data.item.daily_score += 1}"
            v-model="data.item.bright_lights"
            :disabled="data.item.saved"></b-form-checkbox>
          </template>
          <template slot="alcohol" slot-scope="data">
            <b-form-checkbox
            @click.native.stop
            @change="if (data.item.no_alcohol) {data.item.daily_score -= 1} else {data.item.daily_score += 1}"
            v-model="data.item.no_alcohol"
            :disabled="data.item.saved"></b-form-checkbox>
          </template>
          <template slot="caffeine" slot-scope="data">
            <b-form-checkbox
            @click.native.stop
            @change="if (data.item.no_caffeine) {data.item.daily_score -= 1} else {data.item.daily_score += 1}"
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
    <b-modal ref="myModalRef" id="modal1" title="Sleep Tips" hide-footer>
      <p v-if="this.dailyScore === 20">Awesome! You got a perfect score. Keep up the good work!</p>
      <p v-if="this.dailyScore < 20 && this.dailyScore >= 15">Nice job!</p>
      <p v-if="this.dailyScore < 15 && this.dailyScore >= 10">Not bad!</p>
      <p v-if="this.dailyScore < 10">Ouch. Your sleep score is a bit low this time.</p>
      <p v-if="this.dailyScore !== 20">Here are some things you can do to keep improving your sleep score:</p>
      <b-list-group v-if="this.dailyScore !== 20">
        <b-list-group-item v-for="(tip, index) in tips" :key="index">{{tip}}</b-list-group-item>
      </b-list-group>
      <b-btn class="mt-3" block @click="closeModal">Close Me</b-btn>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  name: 'SleepTracker',
  data () {
    return {
      fields: [
        {
          key: 'day',
          label: 'Day'
        },
        {
          key: 'seven',
          label: 'Did you get more than 7 hours of sleep last night? <p class="">6 pts</p>'
        },
        {
          key: 'rest',
          label: 'Do you feel well-rested today? <p class="">3 pts</p>'
        },
        {
          key: 'bedtime',
          label: 'Was your bedtime within one hour of yesterday\'s? <p class="">3 pts</p>'
        },
        {
          key: 'waketime',
          label: 'Was your wake time within one hour of yesterday\'s? <p class="">2 pts</p>'
        },
        {
          key: 'screentime',
          label: 'Did you stop using digital screens at least one hour before bed? <p class="">3 pts</p>'
        },
        {
          key: 'lights',
          label: 'Did you avoid bright lights for an hour before bed? <p class="">1 pt</p>'
        },
        {
          key: 'alcohol',
          label: 'Did you avoid alcohol for 3 hours before bed? <p class="">1 pt</p>'
        },
        {
          key: 'caffeine',
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
    }
  },
  methods: {
    giveFeedback: function (dataItem) {
      dataItem.saved = !dataItem.saved
      if (!dataItem.more_than_seven) { this.tips.push(dataItem.seven_suggestion) }
      if (!dataItem.rested) { this.tips.push(dataItem.rested_suggestion) }
      if (!dataItem.consistent_bedtime) { this.tips.push(dataItem.bedtime_suggestion) }
      if (!dataItem.consistent_waketime) { this.tips.push(dataItem.waketime_suggestion) }
      if (!dataItem.screentime_cutoff) { this.tips.push(dataItem.screentime_suggestion) }
      if (!dataItem.bright_lights) { this.tips.push(dataItem.lights_suggestion) }
      if (!dataItem.no_alcohol) { this.tips.push(dataItem.alcohol_suggestion) }
      if (!dataItem.no_caffeine) { this.tips.push(dataItem.caffeine_suggestion) }
      if (dataItem.daily_score === 20) { this.tips.push('Congrats! You got a perfect sleep score today!') }
    },
    closeModal: function () {
      this.$refs.myModalRef.hide()
      this.tips = []
      this.score = 0
    },
    showModal (dataItem) {
      this.giveFeedback(dataItem)
      this.dailyScore = dataItem.daily_score
      this.$refs.myModalRef.show()
    },
  }
}
</script>

<style scoped>

.custom-control-input:hover {
  cursor: pointer;
}
</style>
