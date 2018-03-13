<template>
    <div class="sleep-tips-window">
      <h3>Sleep Tips for Me</h3>
        <div v-if="!entries.length" class="tips-empty-state">
          <img class="sleeping-sheep" src="/my-sleep-score/static/img/sheep.png" alt="sleeping sheep">
          <p>Personalized tips will appear here each time you enter a new Night.</p>
        </div>
        <ul v-if="mostRecentFails" class="tip-list mt-4">
          <li v-for="(fail, index) in mostRecentFails" :key="index" class="my-4">
            <h5>{{transformFail(fail)}}</h5>
            <p>{{tips[index]}}</p>
          </li>
        </ul>
        <div v-if="entries.length && !mostRecentFails.length" class="tips-empty-state">
          <img class="sleeping-sheep" src="/my-sleep-score/static/img/sheep-queen.png" alt="sleeping sheep with a crown">
          <p>Congrats! You successfully followed all possible sleep strategies. Keep up the good work!</p>
        </div>
    </div>
</template>

<script>
import store from '../store'
export default {
  name: 'MySleepTips',
  store,
  computed: {
    mostRecentFails () {
      return this.getFails()
    },
    tips () {
      return this.getTips()
    },
    strategies () {
      return this.$store.getters.strategies
    },
    entries () {
      return this.getEntries()
    }
  },
  methods: {
    getFails () {
      return this.$store.getters.mostRecentFails
    },
    getEntries () {
      return this.$store.getters.entries
    },
    getTips () {
      const tips = []
      this.mostRecentFails.forEach(fail => {
        tips.push(this.$store.getters.randomTips(fail))
      })
      return tips
    },
    transformFail (fail) {
      if (fail === 'bedtime') {
        return this.strategies[0].title
      } else if (fail === 'waketime') {
        return this.strategies[1].title
      } else if (fail === 'screens') {
        return this.strategies[2].title
      } else if (fail === 'brightLights') {
        return this.strategies[3].title
      } else if (fail === 'noAlcohol') {
        return this.strategies[4].title
      } else if (fail === 'noCaffeine') {
        return this.strategies[5].title
      }
    }
  },
  mounted: function () {
    this.getFails()
    this.getTips()
    this.getEntries()
  }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
.sleep-tips-window {
  background-color: $darkBlue2;
  color: $white;
  border-radius: $radius;
  min-height: 150px;
}

.tip-list {
  list-style: none;
  padding-left: 0;
}

.tips-empty-state {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  margin: 6rem auto 0;
  text-align: center;
  .sleeping-sheep {
    margin-bottom: 4rem;
  }
}
</style>
