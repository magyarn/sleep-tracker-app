<template>
  <b-modal
    ref="myModalRef3"
    id="modal3"
    title="Add Entry"
    header-text-variant="dark"
    body-text-variant="dark"
    hide-footer
    @hide="clearCurrentDataPoints()">
    <b-container>
      <ul class="habit-icon-wrapper mt-2 mb-4">
        <li v-for="(icon, index) in habitIcons" :key="index">
          <span
            v-if="currentModalPage(index) && habitIsSatisfactory(index)"
            class="habit-icon-border current-page-green">
              <img class="habit-icon" :src="icon.pathGreen" :alt="icon.alt">
          </span>
          <span
            v-if="currentModalPage(index) && !habitIsSatisfactory(index)"
            class="habit-icon-border current-page-grey">
              <img class="habit-icon" :src="icon.pathWhite" :alt="icon.alt">
          </span>
          <span
            v-if="!currentModalPage(index) && habitIsSatisfactory(index)"
            class="habit-icon-border border-green">
              <img class="habit-icon" :src="icon.pathGreen" :alt="icon.alt">
          </span>
          <span
            v-if="!currentModalPage(index) && !habitIsSatisfactory(index)"
            class="habit-icon-border">
              <img class="habit-icon" :src="icon.pathWhite" :alt="icon.alt">
          </span>
        </li>
      </ul>
      <b-form-group v-if="modalPage==0">
        <p>Do you feel well rested today?</p>
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
      <b-form-group v-if="modalPage==1">
        <p>How many hours of sleep did you get last night?</p>
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
      habitIcons: [
        {
          pathWhite: '../../static/img/hourglass-white.png',
          pathGreen: '../../static/img/hourglass.png',
          alt: 'hourglass'
        },
        {
          pathWhite: '../../static/img/battery-white.png',
          pathGreen: '../../static/img/battery.png',
          alt: 'battery'
        },
        {
          pathWhite: '../../static/img/alarm-white.png',
          pathGreen: '../../static/img/alarm.png',
          alt: 'alarm clock'
        },
        {
          pathWhite: '../../static/img/moon-white.png',
          pathGreen: '../../static/img/moon.png',
          alt: 'moon'
        },
        {
          pathWhite: '../../static/img/phone-white.png',
          pathGreen: '../../static/img/phone.png',
          alt: 'cell phone'
        },
        {
          pathWhite: '../../static/img/light-white.png',
          pathGreen: '../../static/img/light.png',
          alt: 'light'
        },
        {
          pathWhite: '../../static/img/wine-white.png',
          pathGreen: '../../static/img/wine.png',
          alt: 'wine glass'
        },
        {
          pathWhite: '../../static/img/coffee-white.png',
          pathGreen: '../../static/img/coffee.png',
          alt: 'coffee cup'
        }
      ],
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
    },
    currentModalPage (index) {
      if (this.modalPage === 0) {
        return this.modalPage === index
      }
      if (this.modalPage === 1) {
        return this.modalPage === index
      }
      if (this.modalPage === 2) {
        return this.modalPage === index
      }
      if (this.modalPage === 3) {
        return this.modalPage === index
      }
      if (this.modalPage === 4) {
        return this.modalPage === index
      }
      if (this.modalPage === 5) {
        return this.modalPage === index
      }
      if (this.modalPage === 6) {
        return this.modalPage === index
      }
      if (this.modalPage === 7) {
        return this.modalPage === index
      }
    },
    habitIsSatisfactory (index) {
      if (index === 0) {
        return this.rested >= 3
      } else if (index === 1) {
        return this.hours >= 7
      } else if (index >= 2) {
        return this.habits[index]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
  &.border-green {
    border: 1px solid $green;
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
