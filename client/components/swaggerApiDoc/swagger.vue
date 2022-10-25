<template>
  <div class="api-docs pb-20">
    <div class="v-center space-between my-5">
      <h2 class="tx-x-lg tx-light">Select your server</h2>
      <div class="p-input">
        <select v-model="openServer" @change="changeServer">
          <option v-for="server in serverList" :key="server.id" :value="server.id">{{server.name}}</option>
        </select>
        <label>Server</label>
      </div>
    </div>
    <no-server v-if="!selectedServer"/>
    <loading-server v-else-if="showLoadingServer"/>
    <server-error :error="error" v-else-if="showServerError" @retry="fetchApiDocs"/>
    <doc-compile-error :error="{message: compileErrorMessage, }" v-else-if="showCompileError"/>
    <api-docs v-else :apiDocs="apiDocs"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ApiDocs from './swagger/apiDocs.vue'
import DocCompileError from './swagger/docCompileError.vue'
import LoadingServer from './swagger/loadingServer.vue'
import noServer from './swagger/noServer.vue'
import ServerError from './swagger/serverError.vue'

import swaggerDocFormatter from '@/helper/swagger-doc.js'
import openapiDocFormatter from '@/helper/openapi-doc.js'
export default {
  components: { DocCompileError, LoadingServer, noServer, ServerError, ApiDocs },
  name: 'Swagger',
  data: () => ({
    openServer: '',
    status: 2,
    error: {},
    compileError: false,
    apiDocs: null,
    compileErrorMessage: ''
  }),
  computed: {
    ...mapState('swagger', ['serverList']),
    selectedServer () {
      return this.serverList[this.openServer] || null
    },
    showLoadingServer () {
      return this.selectedServer && this.status === 0
    },
    showServerError () {
      return this.selectedServer && this.status === -1
    },
    showCompileError () {
      return this.selectedServer && this.status === 1 && this.compileError
    },
    showApiDoc () {
      return !this.showCompileError
    }
  },
  watch: {
    openServer () {
      if (this.selectedServer) {
        this.$store.commit('swagger/SET_SELECTED_SERVER', this.selectedServer)
        this.fetchApiDocs()
      }
    }
  },
  methods: {
    changeServer () {
      this.$router.push({
        path: '',
        query: {
          server: this.openServer
        }
      })
    },
    fetchCompleted (res) {
      if (res.data.error) {
        this.status = -1
        this.error = res.data.errorMessage
      } else {
        try {
          this.apiDocs = res.data.responseBody.openapi ?
            openapiDocFormatter(res.data.responseBody) :
            swaggerDocFormatter(res.data.responseBody)
          this.$store.commit('swagger/SET_API_DOC', this.apiDocs)
          this.compileError = false
        } catch (e) {
          console.error(e)
          this.compileErrorMessage = e.message
          this.compileError = true
        }
        this.status = 1
      }
    },
    fetchApiDocs () {
      this.status = 0
      const self = this
      this.$store.dispatch('swagger/getServerApiDoc', {
        server: {
          name: self.selectedServer.name,
          proto: self.selectedServer.proto,
          endpoint: self.selectedServer.endpoint,
          docPath: self.selectedServer.docPath
        },
        cb: this.fetchCompleted
      })
    }
  },
  created () {
    this.openServer = this.$route.query.server || ''
  }
}
</script>

<style>

</style>