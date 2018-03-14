<template>
    <section>
      <div class="my-why-window">
        <section class="why-section-header">
          <h3>My Why</h3>
          <b-button v-if="$mq.resize && $mq.below('576px') && !showWhy" @click="showWhy=!showWhy" class="btn-outline-white">
            <img src="../../static/img/down-arrow.png" alt="down arrow">
          </b-button>
          <b-button v-if="$mq.resize && $mq.below('576px') && showWhy" @click="showWhy=!showWhy" class="btn-outline-white">
            <img src="../../static/img/up-arrow.png" alt="up arrow">
          </b-button>
        </section>
        <section v-if="(showWhy || $mq.above('576px')) && !whyIsSaved">
          <p>
            How is sleep impacting your life? What would you like to change?
            Consider cranky mornings with your partner, afternoon slumps at work,
            and unmotivated evenings.
          </p>
          <b-form-group>
            <b-form-textarea
            v-model="whyText"
            :rows="3"
            :max-rows="6">
            </b-form-textarea>
            <b-button @click="whyIsSaved=!whyIsSaved" class="mt-3 btn-outline-white">Save</b-button>
          </b-form-group>
        </section>
        <section v-if="(showWhy || $mq.above('576px')) && whyIsSaved" class="my-why-window">
          <p>{{whyText}}</p>
          <b-button @click="whyIsSaved=!whyIsSaved" class="mt-3 btn-outline-white">Edit</b-button>
        </section>
      </div>
    </section>
</template>

<script>
import store from '../store'
export default {
  name: 'MyWhy',
  store,
  data () {
    return {
      showWhy: false
    }
  },
  computed: {
    why: {
      get: function () {
        return this.$store.getters.getWhy
      },
      set: function (newValue) {
        this.$store.dispatch('updateWhy', newValue)
      }
    },
    whyText: {
      get: function () {
        return this.$store.getters.getWhyText
      },
      set: function (newValue) {
        this.$store.dispatch('updateWhyText', newValue)
      }
    },
    whyIsSaved: {
      get: function () {
        return this.$store.getters.whyIsSaved
      },
      set: function (newValue) {
        return this.$store.dispatch('updateWhySaved', newValue)
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
</style>
