<template>
  <div id="app">
  	<router-view></router-view>
    <firstChild></firstChild>
    <secondChild></secondChild>
  </div>
</template>

<script>
import firstChild from './components/firstChild';
import secondChild from './components/secondChild';
export default {
  name: 'app',
  components:{
    firstChild,
    secondChild
  }
}
</script>

<style>

</style>
