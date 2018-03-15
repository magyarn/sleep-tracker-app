<template>
  <b-card
     class="my-2 sleep-entry-card night-card"
     no-body>
     <b-card-body>
       <h3>Night {{index + 1}}</h3>
       <p>{{entry.hours}} hours •
         <span v-if="entry.rested==0">Exhausted</span>
         <span v-if="entry.rested==1">Not well rested</span>
         <span v-if="entry.rested==2">Somewhat rested</span>
         <span v-if="entry.rested==3">Pretty rested</span>
         <span v-if="entry.rested==4">Very well rested</span>
       </p>
       <ul class="habit-list">
         <li v-if="entry.bedtime" class="performed">
           <img src="../../static/img/moon.png" alt="moon" class="bonus-badge">
         </li>
         <li v-else class="failed">
           <img src="../../static/img/moon-red.png" alt="moon" class="bonus-badge">
         </li>
         <li v-if="entry.waketime" class="performed">
           <img src="../../static/img/alarm.png" alt="alarm clock" class="bonus-badge">
         </li>
         <li v-else class="failed">
           <img src="../../static/img/alarm-red.png" alt="alarm" class="bonus-badge">
         </li>
         <li v-if="entry.screens" class="performed">
           <img src="../../static/img/phone.png" alt="phone" class="bonus-badge">
         </li>
         <li v-else class="failed">
           <img src="../../static/img/phone-red.png" alt="phone" class="bonus-badge">
         </li>
         <li v-if="entry.brightLights" class="performed">
           <img src="../../static/img/light.png" alt="light" class="bonus-badge">
         </li>
         <li v-else class="failed">
           <img src="../../static/img/light-red.png" alt="light" class="bonus-badge">
         </li>
         <li v-if="entry.noAlcohol" class="performed">
           <img src="../../static/img/wine.png" alt="wine glass" class="bonus-badge">
         </li>
         <li v-else class="failed">
           <img src="../../static/img/wine-red.png" alt="wine glass" class="bonus-badge">
         </li>
         <li v-if="entry.noCaffeine" class="performed">
           <img src="../../static/img/coffee.png" alt="coffee cup" class="bonus-badge">
         </li>
         <li v-else class="failed">
           <img src="../../static/img/coffee-red.png" alt="coffee cup" class="bonus-badge">
         </li>
       </ul>
     </b-card-body>
     <b-card-footer style="padding: .75rem">
       <b-button class="mr-2 btn-outline-white" @click="showEditDayModal(index)">Edit</b-button>
       <b-button class="mr-2" variant="outline-danger" @click="deleteEntry(index)">Delete</b-button>
     </b-card-footer>
  </b-card>
</template>

<script>
import store from '../store'
export default {
  name: 'NightCard',
  store,
  props: ['entry', 'index'],
  methods: {
    showEditDayModal (index) {
      const entryToEdit = this.entries[index]
      this.$store.dispatch('entryToEdit', entryToEdit)
      this.$refs.myModalRef2.$refs.myModalRef2.show()
    },
    deleteEntry (index) {
      this.$store.dispatch('deleteEntry', index)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
.habit-list li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: .25rem;
  height: 35px;
  width: 35px;
  overflow: hidden;
  border-radius: 50%;
  &.performed {
    border: 1px solid $green;
  }
  &.failed {
    border: 1px solid $red;
  }
  &.neutral {
    border: 1px solid $elephantGrey;
  }
}
</style>
