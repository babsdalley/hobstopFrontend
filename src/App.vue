<template>
  <div class="container-fluid">
    <!-- <welcome-page></welcome-page> -->
    <router-view></router-view>
  </div>
    
</template>

<script>
import Welcome from './components/welcome.vue'
export default {
  name: 'app',
  components:{
    welcomePage: Welcome
  }
}
</script>

<style>
  body{
    background-color: #2c3a49;
  }
  
</style>
