<template>
  <b-modal ref="myModalRef2" id="modal2" title="Edit Entry" hide-footer no-close-on-backdrop no-close-on-esc>
    <b-form-group v-if="modalPage==0">
      <p>How many hours of sleep did you get last night? 🤔</p>
      <b-form-select v-model="entryToEdit.hours" :options="hourOptions"/>
    </b-form-group>
    <b-form-group v-if="modalPage==1" label="Do you feel well-rested today?">
      <b-form-radio-group stacked id="radios1" v-model="entryToEdit.rested" :options="restedOptions" name="radioOpenions">
      </b-form-radio-group>
    </b-form-group>
    <b-form-group v-if="modalPage==2" label="Was your bedtime within one hour of yesterday's?">
      <b-form-radio-group stacked id="radios2" v-model="entryToEdit.bedtime" :options="yesNo" name="radioYesNo">
      </b-form-radio-group>
    </b-form-group>
    <b-form-group v-if="modalPage==3" label="Was your waketime within one hour of yesterday's?">
      <b-form-radio-group stacked id="radios3" v-model="entryToEdit.waketime" :options="yesNo" name="radioYesNo">
      </b-form-radio-group>
    </b-form-group>
    <b-form-group v-if="modalPage==4" label="Did you stop using digital screens at least one hour before bed?">
      <b-form-radio-group stacked id="radios4" v-model="entryToEdit.screens" :options="yesNo" name="radioYesNo">
      </b-form-radio-group>
    </b-form-group>
    <b-form-group v-if="modalPage==5" label="Did you avoid bright lights for an hour before bed?">
      <b-form-radio-group stacked id="radios5" v-model="entryToEdit.brightLights" :options="yesNo" name="radioYesNo">
      </b-form-radio-group>
    </b-form-group>
    <b-form-group v-if="modalPage==6" label="Did you avoid alcohol for 3 hours before bed?">
      <b-form-radio-group stacked id="radios6" v-model="entryToEdit.noAlcohol" :options="yesNo" name="radioYesNo">
      </b-form-radio-group>
    </b-form-group>
    <b-form-group v-if="modalPage==7" label="Did you avoid caffeine for 7 hours before bed?">
      <b-form-radio-group stacked id="radios7" v-model="entryToEdit.noCaffeine" :options="yesNo" name="radioYesNo">
      </b-form-radio-group>
    </b-form-group>
    <div class="edit-day-modal-footer">
      <div>
        <b-btn v-if="modalPage > 0" class="mt-3" variant="outline-secondary" @click="modalPageDecrement">Back</b-btn>
        <b-btn v-if="modalPage < 7" class="mt-3" variant="outline-secondary" @click="modalPageIncrement">Next</b-btn>
      </div>
      <b-btn class="mt-3" @click="closeModal()">Save</b-btn>
    </div>
  </b-modal>
</template>

<script>
import store from '../store'
export default {
  name: 'EditDayModal',
  store,
  props: ['entry'],
  data () {
    return {
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
    entries () {
      return this.$store.getters.entries
    },
    entryToEdit () {
      console.log(this.$store.getters.entryToEdit)
      return this.$store.getters.entryToEdit
    }
  },
  methods: {
    closeModal: function () {
      this.$refs.myModalRef2.hide()
      this.modalPage = 0
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
      this.$refs.myModalRef2.hide()
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

<style scroped>
.edit-day-modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
