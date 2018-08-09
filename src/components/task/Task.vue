<template>
  <div class="card">
    <!--
    <div class="card-header">

    </div>
    -->
    <div class="card-body">
      {{ value.name }}
      <i class="fa fa-trash" style="cursor: pointer; float: right" @click="$emit('remove-task')" title="Remove Task"></i>
      <i v-if="canArchive" class="fa fa-archive" style="cursor: pointer; float: right; padding-right: 0.5rem" @click="archive" title="Archive Task"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    canArchive: Boolean,
    value: Object
  },
  methods: {
    archive: function() {
      this.value.isArchived = true;
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
</style>
