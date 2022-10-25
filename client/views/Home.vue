<template>
  <div class="home">
    <div class="container p-4 flex center">
      <img :src="hiPika" width="250px" class=" bg-ele-2" alt="">
      <div class="">
        <h1 class="px-4 typing-text">
          Heya ! Webish here ... 
          <div class="typing-cover"></div>
        </h1>
        <p class="py-2 px-4">A Powerful util tools for developers that will boost your development.</p>
      </div>
    </div>
  </div>
</template>

<script>
const hiPika = require('@/assets/images/pikachu-hi.gif')
export default {
  name: 'Home',
  data: () => ({
    hiPika
  })
}
</script>

<style lang="scss" scoped>
.home {
  background: #ffffff;
  min-height: 90vh;
  .container {
    max-width: 1200px;
    margin: auto;
    .typing-text {
      position: relative;
      height: fit-content;
      h1 {
        font-size: 32px;
      }
      .typing-cover {
        position: absolute;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        background: #fff;
        animation: movetyper 8s infinite;
      }
      p {
        text-shadow: 3px 3px 3px white;
      }
    }
  }
}
@keyframes movetyper {
  0% {
    left: 0ch;
  }
  50% {
    left: 20ch;
  }
  100% {
    left: 0ch;
  }
} 
</style>
