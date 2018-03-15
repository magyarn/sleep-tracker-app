<template>
  <b-modal
    ref="myModalRef2"
    id="modal2"
    title="Edit Night"
    header-text-variant="dark"
    body-text-variant="dark"
    hide-footer
    no-close-on-backdrop
    no-close-on-esc>
    <ul class="habit-icon-wrapper mt-2 mb-4">
      <li v-for="(icon, index) in habitIcons" :key="index">
        <span
          v-if="currentModalPage(index) && habitIsUnevaluated(index)"
          class="habit-icon-border current-page-grey">
            <img class="habit-icon" :src="icon.pathWhite" :alt="icon.alt">
        </span>
        <span
          v-if="!currentModalPage(index) && habitIsUnevaluated(index)"
          class="habit-icon-border">
            <img class="habit-icon" :src="icon.pathWhite" :alt="icon.alt">
        </span>
        <span
          v-if="currentModalPage(index) && habitIsSatisfactory(index)"
          class="habit-icon-border current-page-green">
            <img class="habit-icon" :src="icon.pathGreen" :alt="icon.alt">
        </span>
        <span
          v-if="currentModalPage(index) && habitIsUnsatisfactory(index)"
          class="habit-icon-border current-page-red">
            <img class="habit-icon" :src="icon.pathRed" :alt="icon.alt">
        </span>
        <span
          v-if="!currentModalPage(index) && habitIsSatisfactory(index)"
          class="habit-icon-border border-green">
            <img class="habit-icon" :src="icon.pathGreen" :alt="icon.alt">
        </span>
        <span
          v-if="!currentModalPage(index) && habitIsUnsatisfactory(index)"
          class="habit-icon-border border-red">
            <img class="habit-icon" :src="icon.pathRed" :alt="icon.alt">
        </span>
      </li>
    </ul>
    <b-form-group v-if="modalPage==0" label="Do you feel well-rested today?">
      <b-form-radio-group stacked id="radios1" v-model="entryToEdit.rested" :options="restedOptions" name="radioOpenions">
      </b-form-radio-group>
    </b-form-group>
    <b-form-group v-if="modalPage==1">
      <p>How many hours of sleep did you get last night?</p>
      <b-form-select v-model="entryToEdit.hours" :options="hourOptions"/>
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
        {value: '0', text: 'Nope, I\'m exhausted'},
        {value: '1', text: 'Not really'},
        {value: '2', text: 'Somewhat'},
        {value: '3', text: 'Yep, I feel good'},
        {value: '4', text: 'Oh yeah! I feel great!'}
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
      return this.$store.getters.entryToEdit
    },
    habitIcons () {
      return this.$store.getters.habitIcons
    },
    habits () {
      return [
        this.entryToEdit.rested,
        this.entryToEdit.hours,
        this.entryToEdit.bedtime,
        this.entryToEdit.waketime,
        this.entryToEdit.screens,
        this.entryToEdit.brightLights,
        this.entryToEdit.noAlcohol,
        this.entryToEdit.noCaffeine
      ]
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
    currentModalPage (index) {
      return this.modalPage === index
    },
    habitIsSatisfactory (index) {
      if (index === 0) {
        return this.entryToEdit.rested >= 3
      } else if (index === 1) {
        return this.entryToEdit.hours >= 7
      } else if (index >= 2) {
        return this.habits[index]
      }
    },
    habitIsUnsatisfactory (index) {
      if (index === 0) {
        return this.entryToEdit.rested < 3 && this.entryToEdit.rested !== ''
      } else if (index === 1) {
        return this.entryToEdit.hours < 7 && this.entryToEdit.hours !== null
      } else if (index >= 2) {
        return this.habits[index] === false
      }
    },
    habitIsUnevaluated (index) {
      if (index === 0) {
        return this.entryToEdit.rested === ''
      } else if (index >= 1) {
        return this.habits[index] === null
      }
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
