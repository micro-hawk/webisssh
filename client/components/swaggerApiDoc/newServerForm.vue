<template>
  <form @submit.prevent>
    <h2 class="tx-x-lg tx-light mb-3">Add Your Server</h2>
    <div class="p-input my-4">
      <input type="text" class=" block" v-model="name" title="Server Name">
      <label>Server Name</label>
    </div>
    <div class="v-center">
      <div class="p-input my-3">
        <select v-model="proto">
          <option value="http://">HTTP</option>
          <option value="https://">HTTPS</option>
        </select>
        <label></label>
      </div>
      <div class="p-input my-3 ml-3">
        <input type="text" v-model="endpoint" title="Server Name">
        <label>Endpoint</label>
      </div>
      <div class="p-input my-3 ml-3 flex-grow">
        <input type="text" v-model="docPath" title="Server Name">
        <label>Api Doc Path</label>
      </div>
    </div>
    <div class="v-center space-between tx-small my-2">
      <div class="flex">
        <p class="bold tx-light mr-1">Server:</p>
        <p class="tx-o2">
          {{proto + endpoint + docPath}}
        </p>
      </div>
      <p 
        v-if="status !== 2" class="status-chip pill tx-x-small px-3 mx-2 py-1 tx-white"
        :class="status === 1 ? 'bg-success' : status === -1 ? 'bg-alert' : 'bg-warning'">
        {{status === 1 ? "Success" : status === -1 ? "Failed" : "Testing.."}}
      </p>
    </div>
    <div class="flex flex-end mt-5 tx-x-small">
      <p-btn color="lightBlue" light class="mx-2" @click="testServer"> Test </p-btn>
      <p-btn color="green" class="mr-2" light @click="saveConfig">Save </p-btn>
      <p-btn color="red" light @click="$emit('close')">Close </p-btn>
    </div>
  </form>
</template>

<script>
export default {
  name: 'newServerForm',
  data: () => ({
    name: '',
    proto: 'http://',
    endpoint: '127.0.0.1:8080',
    docPath: '/v2/api-docs',
    id: null,
    testingServer: false,
    status: 2,
    errorMessage: ''
  }),
  methods: {
    testServer () {
      this.testingServer = true
      this.status = 0
      this.$store.dispatch('swagger/getServerApiDoc', {
        server: {
          name: this.name,
          proto: this.proto,
          endpoint: this.endpoint,
          docPath: this.docPath
        },
        cb: (res) => {
          if (res.data.error) {
            this.status = -1
            this.errorMessage = res.data.errorMessage
          } else {
            this.status = 1
          }
        }
      })
    },
    saveConfigCallback () {
      this.$emit('close')
      this.$store.commit('OPEN_LOADER', false)
    },
    saveConfig () {
      this.$store.commit('OPEN_LOADER', true)
      this.$store.dispatch('swagger/saveServer', {
        data: {
          name: this.name,
          proto: this.proto,
          endpoint: this.endpoint,
          docPath: this.docPath,
          id: this.id
        },
        cb: this.saveConfigCallback
      })
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  padding: 20px;
}
</style>