<template>
  <b-modal ref="myModalRef" id="modal1" title="Sleep Tips" hide-footer>
    <p v-if="dailyScore.dailyScore === 20">Awesome! You got a perfect score. Keep up the good work!</p>
    <p v-if="dailyScore.dailyScore < 20 && dailyScore.dailyScore >= 15">Nice job!</p>
    <p v-if="dailyScore.dailyScore < 15 && dailyScore.dailyScore >= 10">Not bad!</p>
    <p v-if="dailyScore.dailyScore < 10">Ouch. Your sleep score is a bit low this time.</p>
    <p v-if="dailyScore.dailyScore !== 20">Here are some things you can do to keep improving your sleep score:</p>
    <b-list-group v-if="dailyScore.dailyScore !== 20">
      <b-list-group-item v-for="(tip, index) in tips" :key="index">{{tip}}</b-list-group-item>
    </b-list-group>
    <b-btn class="mt-3" block @click="closeModal">Close Me</b-btn>
  </b-modal>
</template>

<script>
import store from '../store'
export default {
  name: 'FeedbackModal',
  store,
  data () {
    return {
      feedbackTips: this.tips,
      modalScore: this.dailyScore
    }
  },
  computed: {
    tips () {
      return this.$store.getters.currentTips
    },
    dailyScore () {
      return this.$store.getters.currentDailyScore
    }
  },
  methods: {
    closeModal: function () {
      this.$refs.myModalRef.hide()
    }
  }
}
</script>
