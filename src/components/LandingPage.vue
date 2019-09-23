<template>
  <main class="intro-wrapper mt-4">
    <b-container>
      <b-row class="pt-4">
        <b-col class="homepage-hero">
          <img
            v-if="$mq.resize && $mq.below('767px')"
            src="../../static/img/moon-and-sheep.png"
            alt="sheep sleeping on the moon"
            class="moon-graphic"
          />
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
            Take action to learn about your sleep habits and how you may be able to improve your quality
            of sleep by tracking your patterns on this site.
          </p>
          <b-button to="/sleep-journal" size="lg" class="btn-success mt-4">Track My Sleep</b-button>
        </b-col>
        <b-col v-if="$mq.resize && $mq.above('768px')" xl="6" lg="6" md="6" class="moon-graphic">
          <img src="../../static/img/moon-and-sheep.png" alt="sheep sleeping on the moon" />
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
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </b-col>
          <b-col class="about-text" lg="6" xl="6">
            <p>
              The Sleep Challenge was developed by the University of Michigan’s
              Sleep Disorders Center as a part of the Teach-Out entitled
              <a
                href="https://www.coursera.org/learn/sleepdeprivation"
              >“Sleep Deprivation: Habits, Solutions, and Strategies”.</a>
            </p>
            <p>
              To learn more about this and other Teach-Outs, visit
              <a
                href="http://ai.umich.edu/teach-out/"
              >teachout.org</a>.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </main>
</template>

<script>
export default {
  name: "LandingPage"
};
</script>

<style lang="scss">
@import "../main.scss";
.intro-wrapper {
  background-image: url("../../static/img/background.png");
  background-repeat: repeat-y;
  background-position: center;
  background-attachment: fixed;
  background-size: contain;
  color: $white;
  @media (max-width: 576px) {
    background-image: url("../../static/img/mobile-background.png");
  }
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
    @media (max-width: 767px) {
      font-size: 1rem;
    }
  }
}

.moon-graphic {
  text-align: right;
  margin: 3rem 0;
  @media (max-width: 767px) {
    margin: 1.5rem 0;
    text-align: center;
    max-width: 100px;
  }
}

.about-section {
  background-image: url("../../static/img/clouds-bg.png");
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
    height: 315px;
  }
  .about-heading {
    margin-bottom: 3rem;
    @media (max-width: 761px) {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
  }
  .about-text {
    padding-left: 1rem;
    @media (max-width: 991px) {
      margin-top: 1rem;
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
    padding: 1rem 0.5rem;
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
    transition: all 0.2s ease;
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
