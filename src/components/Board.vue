<template>
  <div class="row">
    <Column v-for="(column, columnIndex) in value"
            :key="column.name"
            :value="column"
            :columnIndex="columnIndex"
            :isLastColumn="columnIndex === value.length - 1"></Column>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

import Column from './Column.vue'
import Task from './Task.vue'
import NewTask from './NewTask.vue'

export default {
  props: {
    value: Array
  },
  created: function () {
    console.log('created')
    for (var i = 0; i<this.addTaskVisible.length; i++) {
      this.addTaskVisible[i] = false
    }
  },
  data() {
    return {
      addTaskVisible: new Array(this.value.length)
    }
  },
  components: {
    Column,
    Task,
    NewTask
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
