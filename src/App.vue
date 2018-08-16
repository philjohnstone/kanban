<template>
  <div id="app" class="container-fluid" style="height: 100%">
    <board></board>
  </div>
</template>

<script>
import Board from './components/Board.vue'
export default {
  name: 'app',
  components: {
    Board
  }
}
</script>

<style>

</style>
