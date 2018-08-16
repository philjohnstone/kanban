<template>
  <div class="col-sm">
    <p class="column-title">
      <span v-if="!editTitle" @click="setup">{{ columnName }}</span>
      <input type="text" v-model="titleName" v-if="editTitle" @keyup.enter="changeTitle"/>
      <span class="fa fa-plus" style="float: right" @click="add" title="Add Task"></span>
      <span v-if="isLastColumn && isArchiveVisible"
            class="fa fa-archive"
            style="float: right; padding-right: 0.5rem"
            @click="$emit('view-archive')"
            title="View Archive"></span>
    </p>
    <NewTask :visible="addTaskVisible" @add-task="addTask($event)" @add-cancelled="addTaskVisible = false"></NewTask>
    <draggable v-model="tasks" :options="{ group:'tasks' }" style="min-height: 100px">
      <Task v-for="(task, taskIndex) in tasks"
            v-if="task.archivedDate == null"
            :value="task"
            :key="task.name"
            :canArchive="isLastColumn"
            @update-task="updateTask(taskIndex, $event)"
            @remove-task="removeTask(taskIndex)"
            @archive-task="archiveTask(taskIndex)"></Task>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

import Task from './Task.vue'
import NewTask from './NewTask.vue'

export default {
  props: {
    columnIndex: Number,
    isLastColumn: Boolean,
    isArchiveVisible: false
  },
  components: {
    draggable,
    NewTask,
    Task
  },
  computed: {
    columnName: {
      get () {
        return this.$store.state.columns[this.columnIndex].name
      },
      set (columnName) {
        this.$store.commit('updateColumnName', {
          columnIndex: this.columnIndex,
          columnName
        })
      }
    },
    tasks: {
      get () {
        return this.$store.state.columns[this.columnIndex].tasks
      },
      set (tasks) {
        return this.$store.commit('updateTasks', {
          columnIndex: this.columnIndex,
          tasks
        })
      }
    }
  },
  data () {
    return {
      addTaskVisible: false,
      editTitle: false,
      titleName: '',
      name: '',
      details: ''
    }
  },
  methods: {
    setup: function () {
      this.titleName = this.columnName
      this.editTitle = !this.editTitle
    },
    changeTitle: function () {
      this.columnName = this.titleName
      this.editTitle = !this.editTitle
    },
    add: function() {
      this.addTaskVisible = !this.addTaskVisible
    },
    addTask: function (task) {
      this.addTaskVisible = !this.addTaskVisible
      this.$store.commit('addTask', {
        columnIndex: this.columnIndex,
        task
      })
    },
    archiveTask: function(taskIndex) {
      this.$store.commit('archiveTask', {
        columnIndex: this.columnIndex,
        taskIndex
      })
    },
    removeTask: function(taskIndex) {
      this.$store.commit('removeTask', {
        columnIndex: this.columnIndex,
        taskIndex
      })
    },
    updateTask: function(taskIndex, { taskName, taskDetails }) {
      this.$store.commit('updateTask', {
        columnIndex: this.columnIndex,
        taskIndex,
        taskName,
        taskDetails
      })
    }
  }
}
</script>

<style>

</style>
