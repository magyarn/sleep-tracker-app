<template>
  <div id="app">
    <main-header></main-header>
    <SleepTracker/>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader'
import SleepTracker from './components/SleepTracker'

export default {
  name: 'App',
  components: {
    MainHeader,
    SleepTracker
  }
}
</script>

<style>

</style>
