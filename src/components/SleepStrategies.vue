<template>
  <main class="strategy-container mt-5">
    <b-container>
      <b-row class="pt-4">
        <b-col>
          <h2 class="my-4">Sleep Strategies</h2>
          <p class="mb-4">Review the strategies below. Do any of them make you think of habits
            you’d like to change? Which sound most appealing to you?</p>
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col v-for="(strategy, index) in strategies" :key="index" lg="4" md="6" sm="12">
          <b-card
             lg="4"
             class="mb-4 strategy-card"
             hide-header>
             <div class="strategy-header">
               <div class="strategy-header">
                 <span class="icon-wrapper">
                   <img class="strategy-icon" :src="strategy.icon" alt="">
                 </span>
                 <h4 class="strategy-title">{{strategy.title}}</h4>
               </div>
               <b-button v-if="$mq.resize && $mq.below('576px') && !strategy.mobileShow" @click="strategy.mobileShow=!strategy.mobileShow" class="btn-outline-white">
                 <img src="../../static/img/down-arrow.png" alt="down arrow">
               </b-button>
               <b-button v-if="$mq.resize && $mq.below('576px') && strategy.mobileShow" @click="strategy.mobileShow=!strategy.mobileShow" class="btn-outline-white">
                 <img src="../../static/img/up-arrow.png" alt="up arrow">
               </b-button>
             </div>
             <p v-if="strategy.mobileShow || $mq.above('576px')" class="strategy-text">{{strategy.text}}</p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import store from '../store'
export default {
  name: 'SleepStrategies',
  store,
  data () {
    return {
      showStrategies: [false, false, false, false, false, false],
      strategies: this.$store.getters.strategies
    }
  },
  methods: {
    toggleStrategy (index) {
      this.showStrategies[index] = !this.showStrategies[index]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
.strategy-container {
  background-image: url('../../static/img/background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
  color: $white;
  @media (max-width: 576px) {
    background-image: url('../../static/img/mobile-background.png')
  }
}

.strategy-card {
  height: 220px;
  background: $darkBlue2;
  @media (min-width: 577px) and (max-width: 761px) {
    height: 160px;
  }
  @media (min-width: 762px) and (max-width: 979px) {
    height: 190px;
  }
  @media (max-width: 576px) {
    height: fit-content
  }
  .strategy-header {
    display: flex;
    align-items: center;
    @media (max-width: 576px) {
      justify-content: space-between;
    }
    .strategy-title {
      margin-left: 1rem;
    }
  }
  .strategy-text {
    margin-top: 1rem;
  }
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border: 1px solid $elephantGrey;
  border-radius: 50%;
  .strategy-icon {
    width: 20px;
  }
}
</style>
