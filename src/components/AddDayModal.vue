<template>
  <b-modal
    ref="myModalRef3"
    id="modal3"
    title="New Night"
    header-text-variant="dark"
    body-text-variant="dark"
    hide-footer
    @hide="clearCurrentDataPoints()">
    <b-container>
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
      <b-form-group v-if="modalPage==0" label="Do you feel well rested today?">
        <b-form-radio-group
          stacked
          id="radios1"
          v-model="rested"
          :options="restedOptions"
          name="radioOpenions"
          plain
          button-variant="success">
        </b-form-radio-group>
      </b-form-group>
      <b-form-group v-if="modalPage==1" label="How many hours of sleep did you get last night?">
        <b-form-select v-model="hours" :options="hourOptions"/>
      </b-form-group>
      <b-form-group v-if="modalPage==2" label="Was your bedtime within one hour of yesterday's?">
        <b-form-radio-group stacked id="radios2" v-model="bedtime" :options="yesNo" name="radioYesNo">
        </b-form-radio-group>
      </b-form-group>
      <b-form-group v-if="modalPage==3" label="Was your waketime within one hour of yesterday's?">
        <b-form-radio-group stacked id="radios3" v-model="waketime" :options="yesNo" name="radioYesNo">
        </b-form-radio-group>
      </b-form-group>
      <b-form-group v-if="modalPage==4" label="Did you stop using digital screens at least one hour before bed?">
        <b-form-radio-group stacked id="radios4" v-model="screens" :options="yesNo" name="radioYesNo">
        </b-form-radio-group>
      </b-form-group>
      <b-form-group v-if="modalPage==5" label="Did you avoid bright lights for an hour before bed?">
        <b-form-radio-group stacked id="radios5" v-model="brightLights" :options="yesNo" name="radioYesNo">
        </b-form-radio-group>
      </b-form-group>
      <b-form-group v-if="modalPage==6" label="Did you avoid alcohol for 3 hours before bed?">
        <b-form-radio-group stacked id="radios6" v-model="noAlcohol" :options="yesNo" name="radioYesNo">
        </b-form-radio-group>
      </b-form-group>
      <b-form-group v-if="modalPage==7" label="Did you avoid caffeine for 7 hours before bed?">
        <b-form-radio-group stacked id="radios7" v-model="noCaffeine" :options="yesNo" name="radioYesNo">
        </b-form-radio-group>
      </b-form-group>
    </b-container>
    <footer class="modal-actions">
      <b-btn v-if="modalPage > 0" variant="outline-darkBlue" class="mt-3" @click="modalPageDecrement">Back</b-btn>
      <b-btn v-if="modalPage < 7" variant="darkBlue" class="mt-3" @click="modalPageIncrement">Next</b-btn>
      <b-btn v-if="modalPage===7" variant="success" class="mt-3" @click="addEntry()">Submit</b-btn>
    </footer>
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
    habitIcons () {
      return this.$store.getters.habitIcons
    },
    habits () {
      return [
        this.rested,
        this.hours,
        this.bedtime,
        this.waketime,
        this.screens,
        this.brightLights,
        this.noAlcohol,
        this.noCaffeine
      ]
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
        noCaffeine: this.noCaffeine
      }
      this.$store.dispatch('addEntry', entry)
      this.$refs.myModalRef3.hide()
      this.clearCurrentDataPoints()
    },
    clearCurrentDataPoints () {
      this.hours = null
      this.rested = ''
      this.bedtime = null
      this.waketime = null
      this.screens = null
      this.brightLights = null
      this.noAlcohol = null
      this.noCaffeine = null
      this.modalPage = 0
    },
    currentModalPage (index) {
      return this.modalPage === index
    },
    habitIsSatisfactory (index) {
      if (index === 0) {
        return this.rested >= 3
      } else if (index === 1) {
        return this.hours >= 7
      } else if (index >= 2) {
        return this.habits[index]
      }
    },
    habitIsUnsatisfactory (index) {
      if (index === 0) {
        return this.rested < 3 && this.rested !== ''
      } else if (index === 1) {
        return this.hours < 7 && this.hours !== null
      } else if (index >= 2) {
        return this.habits[index] === false
      }
    },
    habitIsUnevaluated (index) {
      if (index === 0) {
        return this.rested === ''
      } else if (index >= 1) {
        return this.habits[index] === null
      }
    }
  }
}
</script>

<style lang="scss">
@import '../main.scss';
.modal-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  button:first-of-type {
    margin-right: 1em;
  }
  button:nth-of-type(2) {
    margin-left: 1em;
  }
}

.modal-icon-row {
  display: flex;
  justify-content: center;
  wrap: no-wrap;
}

.habit-icon-wrapper {
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
}

.habit-icon-border {
  border: 1px solid $elephantGrey;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  &.current-page-grey {
    border: 3px solid $elephantGrey;
  }
  &.current-page-green {
    border: 3px solid $green;
  }
  &.current-page-red {
    border: 3px solid $red;
  }
  &.border-green {
    border: 1px solid $green;
  }
  &.border-red {
    border: 1px solid $red;
  }
  @media (max-width: 576px) {
    width: 30px;
    height: 30px;
  }
}
.habit-icon-border-green {
  border: 1px solid $elephantGrey;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  &.current-page-grey {
    border: 3px solid $elephantGrey;
  }
  &.current-page-green {
    border: 3px solid $green;
  }
  @media (max-width: 576px) {
    width: 30px;
    height: 30px;
  }
}

.habit-icon {
  width: 20px;
  height: 20px;
  @media (max-width: 576px) {
    width: 14px;
    height: 14px;
  }
}
</style>
