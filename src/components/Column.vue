<template>
  <div class="col-sm">
    <p class="column-title">
      <span v-if="!editTitle" @click="setup">{{ value.name }}</span>
      <input type="text" v-model="titleName" v-if="editTitle" @keyup.enter="changeTitle"/>
      <span class="fa fa-plus" style="float: right" @click="add" title="Add Task"></span>
      <span v-if="isLastColumn && isArchiveVisible"
            class="fa fa-archive"
            style="float: right; padding-right: 0.5rem"
            @click="$emit('view-archive')"
            title="View Archive"></span>
    </p>
    <NewTask :visible="addTaskVisible" @add-task="addTask($event)" @add-cancelled="addTaskVisible = false"></NewTask>
    <draggable :list="value.tasks" :options="{ group:'tasks' }" style="min-height: 100px">
      <Task v-for="(task, taskIndex) in value.tasks"
            v-if="task.archivedDate == null"
            v-model="value.tasks[taskIndex]"
            :key="task.name"
            :canArchive="isLastColumn"
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
    isArchiveVisible: false,
    value: Object
  },
  components: {
    draggable,
    NewTask,
    Task
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
      this.titleName = this.value.name
      this.editTitle = !this.editTitle
    },
    changeTitle: function () {
      this.value.name = this.titleName
      this.editTitle = !this.editTitle
    },
    add: function() {
      this.addTaskVisible = !this.addTaskVisible
    },
    addTask: function (task) {
      this.addTaskVisible = !this.addTaskVisible
      this.value.tasks.push(task)
    },
    archiveTask: function(taskIndex) {
      this.value.tasks[taskIndex].archivedDate = new Date()
    },
    removeTask: function(taskIndex) {
      this.value.tasks.splice(taskIndex, 1)
    }
  }
}
</script>

<style>

</style>
