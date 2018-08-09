<template>
  <div class="row">
    <div class="col-sm" v-for="(column, index) in value" :column="column" :key="column.name">
      <draggable :list="column.tasks" :options="{ group:'tasks' }" class="column">
        <p class="column-header">
          <span class="fa fa-cog" style="float: left" @click="setup" title="Setup Column"></span>
          {{ column.name }}
          <span class="fa fa-plus" style="float: right" @click="add" title="Add Column"></span>
        </p>
        <Task v-for="(task, index) in column.tasks" :key="task.name" v-model="column.tasks[index]"></Task>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Task from '../task/Task.vue'
export default {
  props: ['value'],
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
