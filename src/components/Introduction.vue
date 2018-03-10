<template>
    <section>
      <b-row class="mt-4">
        <b-col>
          <h2>Why work on your sleep habits?</h2>
          <p>We’ve all heard sleep is important, but may not know why. We may not
            know if we need to change our sleep, but many of us live with sleep
            deprivation without knowing it.</p>
          <p>Sleep matters.</p>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col xs="12" sm="12" md="6" lg="6" xl="6">
          <p>
            Your health, mood, relationships, and work performance can all be
            improved with better sleep. Poor sleep can lead to depression and
            weight gain, while good sleep can help you:
          </p>
          <ul>
            <li>Feel better</li>
            <li>Think clearer</li>
            <li>Be more present</li>
            <li>Work more effectively</li>
            <li>Manage stress more easily</li>
          </ul>
        </b-col>
        <my-why class="mb-4"></my-why>
      </b-row>
      <hr/>
    </section>
</template>

<script>
import MyWhy from './MyWhy'
export default {
  name: 'Introduction',
  components: {
    MyWhy
  }
}
</script>
