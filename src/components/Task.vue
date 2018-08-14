<template>
  <div class="card">
    <div class="card-body">
      <span @click="$emit('view-task')" class="task-name">{{ value.name }}</span>
      <span class="fa fa-trash" style="float: right" @click="$emit('remove-task')" title="Remove Task"></span>
      <span v-if="canArchive" class="fa fa-archive" style="float: right; padding-right: 0.5rem" @click="$emit('archive-task')" title="Archive Task"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    canArchive: Boolean,
    value: Object
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
