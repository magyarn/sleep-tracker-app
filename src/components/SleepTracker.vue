<template>
  <main class="page-wrapper mt-5">
    <b-container>
      <b-row class="pt-4">
        <b-col class="why-section-header journal-header">
          <h3 class="my-4 bm">My Sleep Journal</h3>
          <b-btn v-if="entries.length <7" v-b-modal.modal3 class="btn-success btn-entry" size="lg">+ New Night</b-btn>
          <b-btn v-else class="btn-outline-danger btn-entry" v-b-modal.modal4 size="lg">Clear Journal Entries</b-btn>
        </b-col>
      </b-row>
      <p>
        Below is a private journal for
        recording your sleep habits and goals. You can return here
        anytime in the future and your entries will still be here.
      </p>
      <b-row>
        <b-col>
          <b-card class="sleep-entry-card">
            <my-why></my-why>
          </b-card>
        </b-col>
      </b-row>
      <b-card-group deck>
        <b-card class="sleep-entry-card sleep-tips-card">
          <my-week></my-week>
        </b-card>
        <b-card class="sleep-entry-card sleep-tips-card">
          <my-sleep-tips></my-sleep-tips>
        </b-card>
      </b-card-group>
      <div class="sleep-entry-card-container">
        <div class="previous-night-header">
          <h3 class="strategy-title">Previous Nights</h3>
          <b-button v-if="$mq.resize && $mq.below('576px') && !entriesMobileShow" @click="entriesMobileShow=!entriesMobileShow" class="btn-outline-white">
            <img src="../../static/img/down-arrow.png" alt="down arrow">
          </b-button>
          <b-button v-if="$mq.resize && $mq.below('576px') && entriesMobileShow" @click="entriesMobileShow=!entriesMobileShow" class="btn-outline-white">
            <img src="../../static/img/up-arrow.png" alt="up arrow">
          </b-button>
        </div>
        <b-row v-if="entriesMobileShow || $mq.above('576px')">
          <b-col v-if="entries.length==0" lg="6" xl="4">
            <empty-night-card></empty-night-card>
          </b-col>
          <b-col v-for="(entry, index) in entries" :key="index" xl="4" lg="6">
            <night-card :entry=entry :index=index></night-card>
          </b-col>
        </b-row>
      </div>
      <edit-day-modal ref="myModalRef2"></edit-day-modal>
      <add-day-modal ref="myModalRef3"></add-day-modal>
      <clear-entries-modal ref="myModalRef4"></clear-entries-modal>
    </b-container>
  </main>
</template>

<script>
import store from '../store'
import MyWhy from './MyWhy'
import MyWeek from './MyWeek'
import MySleepTips from './MySleepTips'
import EmptyNightCard from './EmptyNightCard'
import NightCard from './NightCard'
import AddDayModal from './AddDayModal'
import EditDayModal from './EditDayModal'
import ClearEntriesModal from './ClearEntriesModal'
store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state))
})
export default {
  name: 'SleepTracker',
  store,
  beforeCreate () {
    this.$store.commit('initialiseStore')
  },
  components: {
    MyWhy,
    MyWeek,
    MySleepTips,
    EmptyNightCard,
    NightCard,
    AddDayModal,
    EditDayModal,
    ClearEntriesModal
  },
  data () {
    return {
      showWeek: false,
      entriesMobileShow: false,
      showingAllStats: false,
      strategies: this.$store.getters.strategies
    }
  },
  computed: {
    entries () {
      return this.$store.getters.entries
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
.page-wrapper {
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

.previous-night-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sleep-entry-card-container {
  margin: 2rem 0;
  padding: 1rem;
  background: $darkBlue2;
  @media (max-width: 576px) {
    margin-top: 1rem;
  }
}

.sleep-tips-card {
  margin-top: 2rem;
  @media (max-width: 989px) {
    margin-top: 1rem;
    margin-bottom: 0;
  }
}

.centered {
  text-align: center;
}

.why-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.journal-header {
    @media (max-width: 761px) {
      display: block;
      margin-bottom: 1rem;
    }
  }
}

</style>
