<template>
  <div id="app" class="container-fluid" style="height: 100%">
    <board :value="columns"></board>
  </div>
</template>

<script>
import Board from './components/board/Board.vue'
export default {
  name: 'app',
  components: {
    Board
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      columns: [
                 { name: 'To Do', tasks: [ { name: 'Task 1', details: 'This is the first task', isArchived: false },
                                           { name: 'Task 4', details: 'This is the fourth task', isArchived: false } ] },
                 { name: 'Doing', tasks: [ { name: 'Task 2', details: 'This is the second task', isArchived: false } ] },
                 { name: 'Done', tasks:  [ { name: 'Task 3', details: 'This is the third task', isArchived: false } ] }
               ]
    }
  }
}
</script>

<style>

</style>
