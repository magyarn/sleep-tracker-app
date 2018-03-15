<template>
  <footer>
    <b-container>
      <b-row>
        <b-col>
          <ul class="share-button-list">
            <li>
              <b-button
                href="https://www.facebook.com/sharer.php?u=https://http://journal.sleepchallenge.solutions/#/"
                target="_blank"
                class="share-btn">
                  <img src="../../static/img/facebook-white.png" alt="Facebook">
              </b-button>
            </li>
            <li>
              <b-button
                href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://http://journal.sleepchallenge.solutions/#/"
                target="_blank"
                class="share-btn">
                  <img src="../../static/img/linked-in-white.png" alt="Linked In">
              </b-button>
            </li>
            <li>
              <b-button
                href="https://twitter.com/share?url=https://http://journal.sleepchallenge.solutions/#/&amp;text=Simple%20Share%20Buttons&amp;hashtags=sleepChallenge"
                target="_blank"
                class="share-btn">
                  <img src="../../static/img/twitter-white.png" alt="Twitter">
              </b-button>
            </li>
            <li>
              <b-button
                href="mailto:?Subject=Sleep%20Challenge&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 https://http://journal.sleepchallenge.solutions/#/"
                target="_blank"
                class="share-btn">
                  <img src="../../static/img/email-white.png" alt="Email">
              </b-button>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'SocialFooter'
}
</script>

<style lang="scss">
@import '../main.scss';
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
