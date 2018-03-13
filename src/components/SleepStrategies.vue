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
               <span class="icon-wrapper">
                 <img class="strategy-icon" :src="strategy.icon" alt="">
               </span>
               <h4 class="strategy-title">{{strategy.title}}</h4>
             </div>
             <p>{{strategy.text}}</p>
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
      strategies: this.$store.getters.strategies
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
}

.strategy-card {
  height: 200px;
  background: $darkBlue2;
  .strategy-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    .strategy-title {
      margin-left: 1rem;
    }
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
