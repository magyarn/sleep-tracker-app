<template>
  <header>
    <b-container>
      <b-navbar toggleable class="sleep-nav px-0" type="dark">
        <b-navbar-brand to="/">
          <img class="logo" src="../../static/img/sheep.png" alt="sheep">
          Sleep Challenge
        </b-navbar-brand>
        <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_dropdown_collapse">
          <b-navbar-nav role="navigation" class="ml-auto">
            <b-nav-item to="/" exact active-class="sleep-active-nav-item">Home</b-nav-item>
            <b-nav-item to="/sleep-strategies/" exact active-class="sleep-active-nav-item">Sleep Strategies</b-nav-item>
            <b-nav-item to="/sleep-journal/" exact active-class="sleep-active-nav-item">My Sleep Journal</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </header>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
header {
  position: fixed;
  top: 0;
  background-color: $darkBlue1;
  width: 100%;
  color: $white;
  z-index: 1000;
}

.logo {
  max-width: 40px;
  margin-right: .5rem;
}

.site-name {
  font-size: 1.3rem;
  padding: 2rem 0;
}

.sleep-active-nav-item {
  color: $green;
}
</style>
