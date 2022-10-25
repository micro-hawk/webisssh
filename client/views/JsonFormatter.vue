<template>
  <div class="formatter bg-s py-2 pb-13">
    <div class="json-formatter">
      <h2 class="tx-x-lg tx-light mr-4 mb-3">JSON Formatter</h2>
      <div class="flex space-between">
        <div class="json-formatter__input" >
          <h3 class="ml-2 tx-o2 py-1">Input</h3>
          <textarea v-model="inputText" @change="formateStringJson" placeholder="Add your JSON"></textarea>
        </div>
        <div class="pt-5 px-3 json-formatter__action">
        </div>
        <div class="json-formatter__output" >
          <h3 class="ml-2 tx-o2 py-1">Output</h3>
          <json :full="true" v-model="formattedJson.json" :resize="false"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from '../components/elements/json.vue'
export default {
  components: { json },
  name: 'JsonFormatter',
  data: () => ({
    inputText: '{}'
  }),
  computed: {
    formattedJson () {
      try {
        return {
          error: false,
          json: JSON.parse(this.inputText)
        }
      } catch (e) {
        return {
          error: true,
          json: {
            ERROR: e.message
          }
        }
      }
    }
  },
  methods: {
    formateStringJson () {
      const formattedJson = this.formattedJson
      if (!formattedJson.error) {
        this.inputText = JSON.stringify(formattedJson.json, null, 2)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.json-formatter {
  max-width: 1000px;
  margin: 20px auto;
  & > div {
    height: calc(100vh - 200px);
  }
  &__input, &__output {
    width: calc(50% - 5px);
  }
  &__input {
    textarea {
      height: 100%;
      width: 100%;
      border: 0px;
      padding: 8px;
      font-size: 16px;
      border-radius: 12px;
      &:focus {
        outline: none;
      }
    }
  }
  &__output {
    .pika-json-view {
      height: 100% !important;
    }
  }
  &__action {
    width: 10px;
  }
  &_compile-error {
    background: rgba(red, 0.1);
  }
}
</style>
