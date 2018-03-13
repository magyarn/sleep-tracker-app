<template>
  <b-modal
    ref="myModalRef4"
    id="modal4"
    title="Clear Entries"
    header-text-variant="dark"
    body-text-variant="dark"
    hide-footer>
    <b-container>
      <p>Are you sure? This action cannot be undone.</p>
    </b-container>
    <footer class="modal-footer modal-actions">
      <b-btn variant="outline-darkBlue" class="mt-3" @click="closeModal()">No, Keep Them</b-btn>
      <b-btn variant="danger" class="mt-3" @click="clearEntries()">Yes, Delete Them</b-btn>
    </footer>
  </b-modal>
</template>

<script>
import store from '../store'
export default {
  name: 'ClearEntriesModal',
  store,
  methods: {
    closeModal: function () {
      this.$refs.myModalRef4.hide()
    },
    clearEntries: function () {
      this.$store.dispatch('clearEntries')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
.modal-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  button:first-of-type {
    margin-right: 1em;
  }
  button:nth-of-type(2) {
    margin-left: 1em;
  }
}
</style>
