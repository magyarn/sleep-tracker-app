<template>
<b-card
   class="sleep-entry-card night-card"
   no-body>
   <b-card-body>
     <h3>Night 1</h3>
     <p>Nothing to report yet</p>
     <ul class="habit-list">
       <li class="neutral">
         <img src="../../static/img/battery-white.png" alt="battery" class="bonus-badge">
       </li>
       <li class="neutral">
         <img src="../../static/img/hourglass-white.png" alt="hourglass" class="bonus-badge">
       </li>
       <li class="neutral">
         <img src="../../static/img/moon-white.png" alt="moon" class="bonus-badge">
       </li>
       <li class="neutral">
         <img src="../../static/img/alarm-white.png" alt="alarm" class="bonus-badge">
       </li>
       <li class="neutral">
         <img src="../../static/img/phone-white.png" alt="phone" class="bonus-badge">
       </li>
       <li class="neutral">
         <img src="../../static/img/light-white.png" alt="light" class="bonus-badge">
       </li>
       <li class="neutral">
         <img src="../../static/img/wine-white.png" alt="wine glass" class="bonus-badge">
       </li>
       <li class="neutral">
         <img src="../../static/img/coffee-white.png" alt="coffee cup" class="bonus-badge">
       </li>
     </ul>
   </b-card-body>
   <b-card-footer style="padding: .75rem">
     <b-button v-b-modal.modal3 class="mr-2 btn-outline-white">+ New Night</b-button>
   </b-card-footer>
</b-card>
</template>

<script>
export default {
  name: 'EmptyNightCard'
}
</script>

<style lang="scss">
@import '../main.scss';
.habit-list li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: .35rem;
  height: 35px;
  width: 35px;
  overflow: hidden;
  border-radius: 50%;
  &.neutral {
    border: 1px solid $elephantGrey;
  }
}
</style>
