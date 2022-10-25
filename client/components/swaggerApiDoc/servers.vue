<template>
  <div class="flex wrap">
    <server-card v-for="server in serverList" :key="server.id" :server="server" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import serverCard from './serverCard.vue'
export default {
  components: { serverCard },
  name: 'servers',
  computed: {
    ...mapState('swagger', ['serverList'])
  }
}
</script>

<style>

</style>