<template>
  <main class="strategy-container mt-5">
    <b-container>
      <b-row class="pt-4">
        <b-col>
          <h2 class="my-4">Sleep Strategies</h2>
          <p>Review the strategies below. Do any of them make you think of habits
            you’d like to change? Which sound most appealing to you? Pick four strategies
            you’d like to try for the week.</p>
          <b-row>
            <b-col v-for="(strategy, index) in strategies" :key="index" lg="4" md="6" sm="12">
              <b-card
                 :title="strategy.title"
                 lg="4"
                 class="mb-4 strategy-card">
                 <p>{{strategy.text}}</p>
              </b-card>
            </b-col>
          </b-row>
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
  height: 300px;
  background: $darkBlue2;
}
</style>
