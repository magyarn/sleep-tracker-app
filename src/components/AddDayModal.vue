<template>
  <b-modal ref="myModalRef3" id="modal3" title="Add Entry" hide-footer @hide="clearCurrentDataPoints()">
    <b-progress :value="modalPage" :max="modalPageMax" class="mb-2"></b-progress>
    <b-form-group v-if="modalPage==0" label="Do you feel well-rested today?">
      <b-form-radio-group stacked id="radios1" v-model="rested" :options="restedOptions" name="radioOpenions">
      </b-form-radio-group>
    </b-form-group>
    <b-form-group v-if="modalPage==1">
      <p>How many hours of sleep did you get last night? 🤔</p>
      <b-form-select v-model="hours" :options="hourOptions"/>
    </b-form-group>
    <div v-if="modalPage==2">
      <p v-if="hours >= 7">Nice! {{hours}} hours is great.</p>
      <p v-if="hours > 7 && hours <= 5">Ok, not bad!</p>
      <p v-if="hours < 5">Ouch, we're sorry to hear that.</p>
      <p>Now let's talk about sleep quality.</p>
    </div>
    <b-form-group v-if="modalPage==2" label="Was your bedtime within one hour of yesterday's?">
      <b-form-radio-group stacked id="radios2" v-model="bedtime" :options="yesNo" name="radioYesNo">
      </b-form-radio-group>
    </b-form-group>
    <div v-if="modalPage==3">
      <p v-if="bedtime">Sweet!</p>
      <p v-else>That's okay.</p>
    </div>
    <b-form-group v-if="modalPage==3" label="Was your waketime within one hour of yesterday's?">
      <b-form-radio-group stacked id="radios3" v-model="waketime" :options="yesNo" name="radioYesNo">
      </b-form-radio-group>
    </b-form-group>
    <div v-if="modalPage==4">
      <p v-if="waketime">Cool.</p>
      <p v-else>No worries.</p>
    </div>
    <b-form-group v-if="modalPage==4" label="Did you stop using digital screens at least one hour before bed?">
      <b-form-radio-group stacked id="radios4" v-model="screens" :options="yesNo" name="radioYesNo">
      </b-form-radio-group>
    </b-form-group>
    <div v-if="modalPage==5">
      <p v-if="screens">Way to go!</p>
      <p v-else>Ok.</p>
    </div>
    <b-form-group v-if="modalPage==5" label="Did you avoid bright lights for an hour before bed?">
      <b-form-radio-group stacked id="radios5" v-model="brightLights" :options="yesNo" name="radioYesNo">
      </b-form-radio-group>
    </b-form-group>
    <div v-if="modalPage==6">
      <p v-if="brightLights">Great!</p>
      <p v-else>No worries.</p>
    </div>
    <b-form-group v-if="modalPage==6" label="Did you avoid alcohol for 3 hours before bed?">
      <b-form-radio-group stacked id="radios6" v-model="noAlcohol" :options="yesNo" name="radioYesNo">
      </b-form-radio-group>
    </b-form-group>
    <div v-if="modalPage==7">
      <p v-if="noAlcohol">Awesome!</p>
      <p v-else>Ok.</p>
    </div>
    <b-form-group v-if="modalPage==7" label="Did you avoid caffeine for 7 hours before bed?">
      <b-form-radio-group stacked id="radios7" v-model="noCaffeine" :options="yesNo" name="radioYesNo">
      </b-form-radio-group>
    </b-form-group>
    <div>
      <b-btn v-if="modalPage > 0" class="mt-3" @click="modalPageDecrement">Back</b-btn>
      <b-btn v-if="modalPage < 7" class="mt-3" @click="modalPageIncrement">Next</b-btn>
      <b-btn v-if="modalPage===7" class="mt-3" @click="addEntry()">Submit</b-btn>
    </div>
  </b-modal>
</template>

<script>
import store from '../store'
export default {
  name: 'AddDayModal',
  store,
  data () {
    return {
      modalPage: 0,
      modalPageMax: 7,
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
    entries () {
      return this.$store.getters.entries
    }
  },
  methods: {
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
