<template>
  <div class="fh fw">
    <v-jsoneditor
      v-if="edit"
      v-model="bindData"
      @input="$emit('input', bindData)"
      :options="{ mode: 'code', navigationBar: false, statusBar: false, mainMenuBar: false}"
      :plus="false"
      height="100%"/>
    <div v-else class="pika-json-view" :class="{'fh': full, 'resize': resize}">
      <div class="json" :class="{'fh': full}">
        <vue-json-pretty
        :data="value"/>
      </div>
    </div>
  </div>
</template>

<script>

import VJsoneditor from 'v-jsoneditor/src/index'
import VueJsonPretty from 'vue-json-pretty'

export default {
  name: 'Json',
  props: {
    edit: Boolean,
    value: [String, Object, Array, Number, Boolean],
    full: Boolean,
    resize: {
      type: Boolean,
      default: true
    }
  },
  components: {
    VJsoneditor,
    VueJsonPretty
  },
  data: () => ({
    bindData: {}
  }),
  created () {
    this.bindData = this.value
  }
}
</script>

<style lang="scss">
.pika-json-view {
  position: relative;
  background: #fff;
  padding: 8px;
  border-radius: 8px;
  // box-shadow: inset 2px 2px 10px;
  .json {
    overflow: auto;
    padding-bottom: 20px;
    height: 250px;
    &.resize {
      resize: vertical;
    }
    &.fh {
      height: 100%;
    }
    &::-webkit-resizer {
      display: block;
      background: #000;
      border-radius: 50%;
    }
  }
  button {
    position: absolute;
    right: 10px;
    top: 10px;
    border: 0px solid;
    height: 25px;
    width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: white;
    box-shadow: 0px 0px 4px #000;
    z-index: 100;
  }
}
</style>