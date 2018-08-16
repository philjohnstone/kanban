<template>
  <div class="row" v-if="!archiveVisible">
    <Column v-for="(column, columnIndex) in columns"
            :key="column.name"
            :columnIndex="columnIndex"
            :isLastColumn="columnIndex === columns.length - 1"
            :isArchiveVisible="archivedTasks.length > 0"
            @view-archive="archiveVisible = !archiveVisible"></Column>
  </div>
  <Archive v-else :value="archivedTasks"
           @close-archive="archiveVisible = !archiveVisible"
           @unarchive-task="unarchiveTask($event)"></Archive>
</template>

<script>
import draggable from 'vuedraggable'

import Archive from './Archive.vue'
import Column from './Column.vue'
import Task from './Task.vue'
import NewTask from './NewTask.vue'

export default {
  computed: {
    archivedTasks: function () {
      return this.$store.state.columns[this.$store.state.columns.length - 1].tasks.filter(task => task.archivedDate != null)
    },
    columns: function () {
      return this.$store.state.columns
    }
  },
  created: function () {
    for (var i = 0; i<this.addTaskVisible.length; i++) {
      this.addTaskVisible[i] = false
    }
  },
  data() {
    return {
      addTaskVisible: new Array(this.$store.state.columns.length),
      archiveVisible: false
    }
  },
  methods: {
    unarchiveTask: function (taskIndex) {
      this.$store.commit('unarchiveTask', taskIndex)
    }
  },
  components: {
    Archive,
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
