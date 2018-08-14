<template>
  <div class="row">


    <div class="col-sm" v-for="(column, columnIndex) in value" :column="column" :key="column.name">
      <p class="column-title">
        <span class="fa fa-cog" style="float: left" @click="setup" title="Setup Column"></span>
        {{ column.name }}
        <span class="fa fa-plus" style="float: right" @click="add" title="Add Column"></span>
      </p>
      <draggable :list="column.tasks" :options="{ group:'tasks' }" style="min-height: 100px">
        <Task v-for="(task, taskIndex) in column.tasks"
              v-if="!task.isArchived"
              v-model="column.tasks[taskIndex]"
              :key="task.name"
              :canArchive="isLastColumn(columnIndex)"
              @remove-task="removeTask(columnIndex, taskIndex)"
              @archive-task="archiveTask(columnIndex, taskIndex)"
              @view-task="viewTask(columnIndex, taskIndex)"></Task>
      </draggable>
    </div>
<!--
    <TaskDetails></TaskDetails>-->
  </div>
</template>

<script>
import draggable from 'vuedraggable'

import Task from './Task.vue'
import TaskDetails from './TaskDetails.vue'

export default {
  props: {
    value: Array
  },
  components: {
    draggable,
    Task,
    TaskDetails
  },
  methods: {
    setup: function() {
      console.log('Setup clicked')
    },
    add: function() {
      console.log('Add clicked')
    },
    isLastColumn: function(columnIndex) {
      return columnIndex === this.value.length - 1
    },
    archiveTask: function(columnIndex, taskIndex) {
      this.value[columnIndex].tasks[taskIndex].isArchived = true
    },
    removeTask: function(columnIndex, taskIndex) {
      this.value[columnIndex].tasks.splice(taskIndex, 1)
    },
    viewTask: function(columnIndex, taskIndex) {

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
.column-title {
  text-align: center
}
.column-header {
  text-align: center;
}
.fa {
  cursor: pointer;
}
</style>
