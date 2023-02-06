<template>
  <div id="app">
	<index></index>
  </div>
</template>

<script>
import	index from './components/index.vue'

export default {
  name: 'app',
  components: {
    index
  }
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	text-decoration: none;
}
</style>
