<template>
  <div class="row">
    <div class="col-sm" v-for="(column, columnIndex) in value" :column="column" :key="column.name">
<<<<<<< HEAD
      <draggable :list="column.tasks" :options="{ group:'tasks' }" class="column">
        <p class="column-header">
          <span class="fa fa-cog" style="float: left" @click="setup" title="Setup Column"></span>
          {{ column.name }}
          <span class="fa fa-plus" style="float: right" @click="add" title="Add Column"></span>
        </p>
        <Task v-for="(task, index) in column.tasks" :key="task.name" v-model="column.tasks[index]" :canArchive="isLastColumn(columnIndex)"></Task>
=======
      <p class="column-title" style="text-align: center">
        <span class="fa fa-cog" style="float: left; cursor: pointer;" @click="setup" title="Setup Column"></span>
        {{ column.name }}
        <span class="fa fa-plus" style="float: right; cursor: pointer;" @click="add" title="Add Column"></span>
      </p>
      <draggable :list="column.tasks" :options="{ group:'tasks' }" style="min-height: 100px">
        <Task v-for="(task, index) in column.tasks" :key="task.name" :canArchive="isLastColumn(columnIndex)" v-model="column.tasks[index]"></Task>
>>>>>>> 7627d1d... fixed archive
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Task from '../task/Task.vue'
export default {
  props: {
    value: Array
  },
  components: {
    draggable,
    Task
  },
  methods: {
    setup: function() {
      console.log('Setup clicked')
    },
    add: function() {
      console.log('Add clicked')
    },
    isLastColumn: function(columnIndex) {
<<<<<<< HEAD
      return columnIndex === this.value.length - 1;
=======
      return columnIndex === this.value.length - 1
>>>>>>> 7627d1d... fixed archive
    }
  }
}
</script>

<style>
.col-sm, .row, .column {
  height: 100%;
}
.col-sm {
  border-left: 0.5rem solid #EFEFEF;
  padding-top: 1rem;
}
.col-sm:first-child {
  border-left: 0;
}
.column-header {
  text-align: center;
}
.fa {
  cursor: pointer;
}
</style>
