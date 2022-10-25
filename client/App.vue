<template>
  <div class="app">
    <navbar/>
    <router-view/>
    <loader/>
  </div>
</template>

<script>
import Loader from './components/common/loader.vue';
import Navbar from "./components/common/navbar.vue";


export default {
  name: 'App',
  components: {
    Navbar,
    Loader
  }
};
</script>
