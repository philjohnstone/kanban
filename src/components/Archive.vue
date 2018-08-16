<template>
  <div>
    <h3>Archived Tasks<span class="fa fa-times float-right" @click="$emit('close-archive')" title="Back"></span></h3>

    <table class="table table-sm">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Details</th>
          <th scope="col">Archive Date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, taskIndex) in value">
          <th>{{ task.name }}</th>
          <td>{{ task.details }}</td>
          <td>{{ task.archivedDate }}</td>
          <td><button type="button "class="btn btn-link" @click="$emit('unarchive-task', taskIndex)" title="Unarchive Task">Unarchive</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  props: {
    value: Array
  }
}
</script>

<style>

</style>
