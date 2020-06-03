<template>
  <div id="app">
    <router-view/>
    <Nav/><!--nav是关键词，所以不能用小写-->
  </div>
</template>

<script>
import Nav from './components/Shared/Nav'
export default {
  name: 'App',
  components:{Nav}
}
</script>

<style>
@import './../static/css/css.css';

</style>
