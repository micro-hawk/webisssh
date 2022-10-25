<template>
  <div class="swagger-api container pt-5">
    <div class="flex space-between">
      <div class="tx-lightest bold pointer">
        <span
          @click="openTab = 'swagger'"
          class="tx-x-lg mr-4"
          :class="openTab === 'swagger' ? 'tx-o2' : null"
        >API Docs</span>
        <span
          @click="openTab = 'servers'"
          class="tx-x-lg"
          :class="openTab === 'servers' ? 'tx-o2' : null"
        >Servers</span>
      </div>
      <p-btn color="orange" @click="overlay = true" >Add Server</p-btn>
    </div>
    <keep-alive>
      <component v-if="serverLoaded" :is="openTab" />
    </keep-alive>
    <div class="overlay" v-if="overlay">
      <new-server-form class="bg-ele-2" @close="overlay = false"/>
    </div>
  </div>
</template>

<script>
import NewServerForm from '@/components/swaggerApiDoc/newServerForm'
import Servers from '@/components/swaggerApiDoc/servers.vue'
import Swagger from '@/components/swaggerApiDoc/swagger.vue'
import { mapState } from 'vuex'
export default {
  components: { NewServerForm, Servers, Swagger },
  name: 'SwagerApiDoc',
  data: () => ({
    overlay: false,
    openTab: 'swagger'
  }),
  computed: {
    ...mapState('swagger', ['serverLoaded'])
  },
  methods: {
  },
  created () {
    this.$store.dispatch('swagger/getServerList')
  }
}
</script>

<style lang="scss" scoped>
.swagger-api {
  position: relative;
  max-width: 1100px;
  width: 80%;
  margin: 0px auto;
}

</style>
