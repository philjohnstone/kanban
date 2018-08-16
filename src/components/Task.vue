<template>
  <div class="card">
    <div class="card-body" v-if="!isEditing">
      <span @click="editTask()"
            class="task-name">{{ value.name }}</span>
      <span class="fa fa-trash"
            style="float: right"
            @click="$emit('remove-task')"
            title="Remove Task"></span>
      <span v-if="canArchive"
            class="fa fa-archive"
            style="float: right; padding-right: 0.5rem"
            @click="$emit('archive-task')"
            title="Archive Task"></span>
    </div>
    <div class="card-body" v-else>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Name</span>
        </div>
        <input type="text" v-model="taskName" class="form-control" id="task-name" aria-describedby="basic-addon3">
      </div>

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Details</span>
        </div>
        <textarea class="form-control" v-model="taskDetails"></textarea>
      </div>

      <div style="text-align: right; margin-top: 0.5rem">
        <button type="button" class="btn btn-primary" @click="update">Update</button>
        <button type="button "class="btn btn-link" @click="isEditing = !isEditing">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    canArchive: Boolean,
    value: Object
  },
  data () {
    return {
      isEditing: false,
      taskName: '',
      taskDetails: ''
    }
  },
  methods: {
    editTask: function () {
      this.taskName = this.value.name
      this.taskDetails = this.value.details
      this.isEditing = !this.isEditing
    },
    update: function () {
      this.$emit('update-task', { taskName: this.taskName, taskDetails: this.taskDetails })
      this.isEditing = !this.isEditing
    }
  }
}
</script>

<style>
.card {
  background-color: #F7F7F7;
  margin-bottom: 1.25rem;
}
.card-header, .card-body {
  padding: 0.5rem;
}
.fa, .task-name {
  cursor: pointer;
}
</style>
