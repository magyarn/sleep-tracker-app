<template>
  <main class="intro-wrapper mt-4">
    <b-container>
      <b-row class="pt-4">
        <b-col class="homepage-hero">
          <h1 class="hero-heading">Go for 7</h1>
          <p class="hero-tagline">SEVEN HOURS OF SLEEP A NIGHT</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col xl="6" lg="6" md="6">
          <h2 class="mt-4 mb-2">Sleep Matters.</h2>
          <p class="pt-2">
            Your health, mood, relationships, and work performance
          can all improve with better sleep. Poor sleep can lead to depression
          and weight gain, while good sleep can help you feel better, think
          clearer, and manage stress more easily.
          </p>
          <p>
            Take action to learn about your sleep habits and improve your quality
            of sleep by tracking your patterns on this site.
          </p>
          <b-button to="/my-sleep-score/sleep-journal" size="lg" class="btn-success mt-4">Track My Sleep</b-button>
        </b-col>
        <b-col xl="6" lg="6" md="6" class="moon-graphic">
          <img src="/my-sleep-score/static/img/moon-and-sheep.png" alt="sheep sleeping on the moon">
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<style lang="scss">
@import '../main.scss';
.intro-wrapper {
  background-image: url('/my-sleep-score/static/img/background.png');
  background-repeat: repeat-y;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  color: $white;
}

.homepage-hero {
  text-align: center;
  margin: 7rem auto;
  @media (max-width: 979px) {
    margin: 3rem auto;
  }
  .hero-heading {
    font-size: 5rem;
  }
  .hero-tagline {
    font-size: 2rem;
    color: $elephantGrey;
  }
}
.moon-graphic {
  text-align: right;
  margin: 3rem 0;
  @media (max-width: 761px) {
    text-align: center;
    margin: 7rem 0;
  }
}
</style>
