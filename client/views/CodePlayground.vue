<template>
  <div class="code-playground flex">
    <div class="window">
      <div class="window-header v-center space-between">
        <div class="action-buttons" />
        <p>Web Editor</p>
        <div class="controls">
          <!-- <button>Save</button> -->
          <button @click="runNew">Run</button>
        </div>
      </div>
      <div class="window-body">
        <prism-editor class="my-editor" v-model="code" :highlight="highlighter" line-numbers></prism-editor>
      </div>
    </div>
    <div class="window">
      <div class="window-header v-center space-between">
        <div class="action-buttons" />
        <p>Output</p>
        <div class="controls">
        </div>
      </div>
      <div class="window-body">
        <iframe id="iframe" ref="iframe" :srcdoc="showCode" width="100%" height="100%"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
// import Prism Editor
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css' // import syntax highlighting styles

export default {
  components: {
    PrismEditor
  },
  data: () => ({
    code: '<div>Project Webish</div>',
    showCode: '',
    fileName: ''
  }),
  methods: {
    runNew () {
      this.showCode = this.code
    },
    highlighter(code) {
      return highlight(code, languages.js) //returns html
    }
  },
  mounted () {
    this.showCode = this.code
  }
}
</script>

<style lang="scss" scoped>
.code-playground {
  max-width: 1200px;
  margin: 30px auto;
  padding: 0px 10px;
  height: calc(100vh - 120px);
}
.window {
  width: calc(100% - 30px);
  border-radius: 6px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  margin: 10px;
  height: 100%;
}
.window .window-header {
  height: 25px;
  padding: 0px 10px;
  background: Gainsboro;
}
.window .window-header .action-buttons {
  margin-top: -5px;
  width: 10px;
  height: 10px;
  background: Crimson;
  border-radius: 50%;
  box-shadow: 15px 0 0 Orange, 30px 0 0 LimeGreen;
}
.window-body {
  height: calc(100% - 25px);
}

/* required class */
  .my-editor {
    /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    background: #000000;
    color: rgb(255, 255, 255);
 
    /* you must provide font-family font-size line-height. Example: */
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
  }
 
  /* optional class for removing the outline */
iframe {
  border: 0px solid;
}

.controls {
  button {
    font-size: 12px;
    border: 1px solid #333;
    color: #333;
    background: transparent;
    border-radius: 4px;
    margin-left: 4px;
  }
}
</style>