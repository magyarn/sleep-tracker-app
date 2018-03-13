<template>
    <div v-if="!whyIsSaved" class="my-why-window">
      <h3>My Why</h3>
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
    </div>
    <div v-else class="my-why-window">
      <h3>My Why</h3>
        <p>{{whyText}}</p>
        <b-button @click="whyIsSaved=!whyIsSaved" class="mt-3 btn-outline-white">Edit</b-button>
    </div>
</template>

<script>
import store from '../store'
export default {
  name: 'MyWhy',
  store,
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
</style>
