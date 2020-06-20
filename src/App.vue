<template>
  <div id="app" class="text-center" >
    <numberTests msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import numberTests from './components/numberTests.vue'

export default {
  name: 'App',
  components: {
    numberTests
  }
}
</script>

<style>
#app {
  width:100%;
  height:100%;
  overflow: auto;
  direction:rtl;
}
</style>
