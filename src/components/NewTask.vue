<template>
  <div class="card" v-if="visible">
    <div class="card-body">

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Name</span>
        </div>
        <input type="text" v-model="name" class="form-control" id="task-name" aria-describedby="basic-addon3">
      </div>

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Details</span>
        </div>
        <textarea class="form-control" v-model="details"></textarea>
      </div>

      <div style="text-align: right; margin-top: 0.5rem">
        <button type="button" class="btn btn-primary" @click="addTask">Add</button>
        <button type="button "class="btn btn-link" @click="$emit('add-cancelled')">Cancel</button>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  props: {
    visible: Boolean
  },
  watch: {
    visible: function () {
      this.name = ''
      this.details = ''
    }
  },
  data () {
    return {
      name: '',
      details: ''
    }
  },
  methods: {
    addTask: function () {
      this.$emit('add-task', { name: this.name, details: this.details })
    }
  }
}
</script>

<style>

</style>
