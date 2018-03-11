<template>
  <div id="app">
    <main-header></main-header>
    <router-view/>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader'

export default {
  name: 'App',
  components: {
    MainHeader
  }
}
</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
