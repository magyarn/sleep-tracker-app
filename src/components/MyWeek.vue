<template>
  <section>
    <section class="why-section-header">
      <h3>My Week</h3>
      <b-button v-if="$mq.resize && $mq.below('576px') && !showWeek" @click="showWeek=!showWeek" class="btn-outline-white">
        <img src="../../static/img/down-arrow.png" alt="down arrow">
      </b-button>
      <b-button v-if="$mq.resize && $mq.below('576px') && showWeek" @click="showWeek=!showWeek" class="btn-outline-white">
        <img src="../../static/img/up-arrow.png" alt="up arrow">
      </b-button>
    </section>
    <section v-if="showWeek || $mq.above('576px')">
      <p v-if="averageHoursOfSleep">Average: {{averageHoursOfSleep}} hours</p>
      <p v-else>Average: Nothing to report yet</p>
      <ul class="stat-list">
        <li v-for="(category, index) in getStreaks()" :key="index" >
          <b-row class="my-2">
            <b-col lg="3" xl="5">
              <p>{{streakLabels[index]}}</p>
            </b-col>
            <b-col v-if="index==0" lg="9" xl="7">
              <ul class="stat-streak">
                <li v-for="(night, index) in week" :key="index" class="night-label">{{night}}</li>
              </ul>
            </b-col>
            <b-col v-else lg="9" xl="7">
              <ul class="stat-streak">
                <li v-for="(day, index) in category.data" :key="index + 100">
                  <span v-if="goodPerformance(category, index)" class="performed-habit">
                    <img class="bonus-badge" :src="performedHabitImage(category)" alt="">
                  </span>
                  <span v-else class="failed-habit">
                    <img class="bonus-badge" :src="failedHabitImage(category)" alt="">
                  </span>
                </li>
                <li v-for="(day, index) in days" :key="index">
                  <span class="neutral-habit">
                    <img class="bonus-badge" :src="neutralHabitImage(category)" alt="">
                  </span>
                </li>
              </ul>
            </b-col>
          </b-row>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import store from '../store'
export default {
  name: 'MyWeek',
  store,
  data () {
    return {
      showWeek: false,
      week: [1, 2, 3, 4, 5, 6, 7],
      streakLabels: [
        'Nights',
        'Well Rested',
        '7+ Hours of Sleep',
        'Stick to a Bedtime',
        'Rise and Shine',
        'Shut Off Screens',
        'Dim the Lights',
        'Lose the Booze',
        'Cut Off the Coffee'
      ],
      performedHabitImages: [
        '../../static/img/battery.png',
        '../../static/img/hourglass.png',
        '../../static/img/moon.png',
        '../../static/img/alarm.png',
        '../../static/img/phone.png',
        '../../static/img/light.png',
        '../../static/img/wine.png',
        '../../static/img/coffee.png'
      ],
      failedHabitImages: [
        '../../static/img/battery-red.png',
        '../../static/img/hourglass-red.png',
        '../../static/img/moon-red.png',
        '../../static/img/alarm-red.png',
        '../../static/img/phone-red.png',
        '../../static/img/light-red.png',
        '../../static/img/wine-red.png',
        '../../static/img/coffee-red.png'
      ],
      neutralHabitImages: [
        '../../static/img/battery-white.png',
        '../../static/img/hourglass-white.png',
        '../../static/img/moon-white.png',
        '../../static/img/alarm-white.png',
        '../../static/img/phone-white.png',
        '../../static/img/light-white.png',
        '../../static/img/wine-white.png',
        '../../static/img/coffee-white.png'
      ]
    }
  },
  computed: {
    averageHoursOfSleep () {
      return this.$store.getters.averageHoursOfSleep
    },
    entries () {
      return this.$store.getters.entries
    },
    days () {
      return new Array(7 - this.entries.length)
    },
    restedStreak () {
      return this.$store.getters.restedStreak
    },
    hoursStreak () {
      return this.$store.getters.hoursStreak
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
    getStreaks () {
      return [
        {
          label: 'Nights',
          data: this.days
        },
        {
          label: 'Rested',
          data: this.restedStreak
        },
        {
          label: 'Hours',
          data: this.hoursStreak
        },
        {
          label: 'Consistent Bedtime',
          data: this.bedtimeStreak
        },
        {
          label: 'Consistent Waketime',
          data: this.waketimeStreak
        },
        {
          label: 'No screens (1 hour)',
          data: this.screentimeStreak
        },
        {
          label: 'No bright lights',
          data: this.brightLightsStreak
        },
        {
          label: 'No alcohol (3 hours)',
          data: this.noAlcoholStreak
        },
        {
          label: 'No caffeine (7 hours)',
          data: this.noCaffeineStreak
        }
      ]
    },
    performedHabitImage (category) {
      if (category.label === 'Rested') {
        return this.performedHabitImages[0]
      } else if (category.label === 'Hours') {
        return this.performedHabitImages[1]
      } else if (category.label === 'Consistent Bedtime') {
        return this.performedHabitImages[2]
      } else if (category.label === 'Consistent Waketime') {
        return this.performedHabitImages[3]
      } else if (category.label === 'No screens (1 hour)') {
        return this.performedHabitImages[4]
      } else if (category.label === 'No bright lights') {
        return this.performedHabitImages[5]
      } else if (category.label === 'No alcohol (3 hours)') {
        return this.performedHabitImages[6]
      } else if (category.label === 'No caffeine (7 hours)') {
        return this.performedHabitImages[7]
      }
    },
    failedHabitImage (category) {
      if (category.label === 'Rested') {
        return this.failedHabitImages[0]
      } else if (category.label === 'Hours') {
        return this.failedHabitImages[1]
      } else if (category.label === 'Consistent Bedtime') {
        return this.failedHabitImages[2]
      } else if (category.label === 'Consistent Waketime') {
        return this.failedHabitImages[3]
      } else if (category.label === 'No screens (1 hour)') {
        return this.failedHabitImages[4]
      } else if (category.label === 'No bright lights') {
        return this.failedHabitImages[5]
      } else if (category.label === 'No alcohol (3 hours)') {
        return this.failedHabitImages[6]
      } else if (category.label === 'No caffeine (7 hours)') {
        return this.failedHabitImages[7]
      }
    },
    neutralHabitImage (category) {
      if (category.label === 'Rested') {
        return this.neutralHabitImages[0]
      } else if (category.label === 'Hours') {
        return this.neutralHabitImages[1]
      } else if (category.label === 'Consistent Bedtime') {
        return this.neutralHabitImages[2]
      } else if (category.label === 'Consistent Waketime') {
        return this.neutralHabitImages[3]
      } else if (category.label === 'No screens (1 hour)') {
        return this.neutralHabitImages[4]
      } else if (category.label === 'No bright lights') {
        return this.neutralHabitImages[5]
      } else if (category.label === 'No alcohol (3 hours)') {
        return this.neutralHabitImages[6]
      } else if (category.label === 'No caffeine (7 hours)') {
        return this.neutralHabitImages[7]
      }
    },
    goodPerformance (category, index) {
      if (category.label === 'Rested') {
        return category.data[index] > 3
      } else if (category.label === 'Hours') {
        return category.data[index] >= 7
      } else {
        return category.data[index]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
.my-why-window {
  background-color: $darkBlue2;
  color: $white;
  border-radius: $radius;
}

.why-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stat-list p {
  margin: 0;
  @media (max-width: 989px) {
    margin-top: 1rem;
    margin-bottom: .5rem;
  }
}

.night-label {
  width: 35px;
  text-align: center;
}
</style>
