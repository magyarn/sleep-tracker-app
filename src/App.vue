<template>
  <div id="app">
    <main-header></main-header>
    <router-view/>
    <social-footer></social-footer>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader'
import SocialFooter from './components/SocialFooter'
export default {
  name: 'App',
  components: {
    MainHeader,
    SocialFooter
  }
}
</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
