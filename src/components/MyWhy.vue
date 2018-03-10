<template>
    <b-col xs="12" sm="12" md="6" lg="6" xl="6" style="background-color: #F0F0F0"
    class="p-4">
      <h2>My Why:</h2>
      <p v-if="!whyIsSaved">
        How is sleep impacting your life? What would you like to change?
        Consider cranky mornings with your partner, afternoon slumps at work,
        and and groggy.
      </p>
      <b-form-group>
        <b-form-textarea
        v-if="!whyIsSaved"
        v-model="whyText"
        :rows="3"
        :max-rows="6">
        </b-form-textarea>
        <p v-else>{{whyText}}</p>
        <b-button v-if="!whyIsSaved" @click="whyIsSaved=!whyIsSaved" class="mt-3">Save</b-button>
        <b-button v-else @click="whyIsSaved=!whyIsSaved" class="mt-3">Edit</b-button>
      </b-form-group>
    </b-col>
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

<style scoped>
</style>
