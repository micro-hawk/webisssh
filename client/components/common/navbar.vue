<template>
  <nav class="v-center bg-p bg-ele-2">
    <img :src="pikachuImg" class="ml-5" width="40px" alt="">
    <h1 class="tx-header tx-warning ml-3 mr-5">Webish</h1>
    <ol class="v-center pt-3">
      <li class="mx-2">
        <router-link :to="{name: 'Home'}" class="tx-n tx-light"> Home </router-link>
      </li>
      <li class="mx-2">
        <router-link :to="{name: 'SwaggerApiDoc'}" class="tx-n tx-light"> APIs </router-link>
      </li>
      <li class="mx-2">
        <router-link :to="{name: 'JsonFormatter'}" class="tx-n tx-light"> Json Formatter </router-link>
      </li>
      <li class="mx-2">
        <router-link :to="{name: 'CodePlayground'}" class="tx-n tx-light"> Code Playground </router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
const pikachuImg = require('../../assets/pika-pika.png')
export default {
  name: 'Navbar',
  data: () => ({
    pikachuImg
  })
}
</script>

<style lang="scss" scoped>
nav {
  height: 60px;
}
</style>