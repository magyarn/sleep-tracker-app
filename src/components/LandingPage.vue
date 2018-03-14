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
    <div class="about-section">
      <b-container>
        <h2 class="about-heading">About the Challenge</h2>
        <b-row>
          <b-col lg="6" xl="6">
            <iframe
              class="youtube-video"
              src="https://www.youtube.com/embed/4j2cvAZYaUg"
              frameborder="0" allow="autoplay; encrypted-media"
              allowfullscreen>
            </iframe>
          </b-col>
          <b-col class="about-text pl-4" lg="6" xl="6">
            <p>
              The Sleep Challenge is a week long commitment to track your sleep
              and improve on any habits that might be contributing to your partial
              sleep deprivation. It’s a fun way to learn strategies to improve your
              sleep habits and challenge your friends and family to do the same!
            </p>
            <p>
              The #SleepChallenge was developed by the University of Michigan’s
              Sleep Disorders Center as a part of the Teach-Out entitled
              <a href="https://www.coursera.org/learn/sleepdeprivation">
                “Sleep Deprivation: Habits, Solutions, and Strategies”.
              </a>
            </p>
            <p>
              The Teach-Out will be open from <strong>Monday March 12th through Sunday,
                March 25th</strong>.
            </p>
            <p>
              To learn more about this and other Teach-Outs, visit
              <a href="http://ai.umich.edu/teach-out/">teachout.org</a>.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
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

.about-section {
  background-image: url('/my-sleep-score/static/img/clouds-bg.png');
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  height: fit-content;
  color: $darkBlue1;
  padding-top: 20rem;
  padding-bottom: 7rem;
  margin-top: 3rem;
  .youtube-video {
    width: 100%;
    height: 315px;;
  }
  .about-heading {
    margin-bottom: 3rem;
    @media (max-width: 761px) {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
  }
}

.share-button-list {
  margin: 3rem 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    padding: 1rem .5rem;
  }
  .share-btn {
    height: 55px;
    width: 55px;
    border: 1px solid $white;
    border-radius: 50%;
    cursor: pointer;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease;
    &:hover {
      background-color: $elephantGrey;
      border: 1px solid rgba(255, 255, 255, 0);
    }
    img {
      max-height: 25px;
    }
  }
}
</style>
