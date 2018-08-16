import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    columns: [
               { name: 'To Do', tasks: [ { name: 'Task 1', details: 'This is the first task', archivedDate: null },
                                         { name: 'Task 4', details: 'This is the fourth task', archivedDate: null } ] },
               { name: 'Doing', tasks: [ { name: 'Task 2', details: 'This is the second task', archivedDate: null } ] },
               { name: 'Done', tasks:  [ { name: 'Task 3', details: 'This is the third task', archivedDate: null } ] }
             ]
  },
  mutations: {
    updateColumnName (state, { columnIndex, columnName }) {
      state.columns[columnIndex].name = columnName
    },
    updateTask (state, { columnIndex, taskIndex, taskName, taskDetails }) {
      state.columns[columnIndex].tasks[taskIndex].name = taskName
      state.columns[columnIndex].tasks[taskIndex].details = taskDetails
    },
    updateTasks (state, { columnIndex, tasks }) {
      state.columns[columnIndex].tasks = tasks
    },
    archiveTask (state, { columnIndex, taskIndex }) {
      state.columns[columnIndex].tasks[taskIndex].archivedDate = new Date()
    },
    unarchiveTask (state, taskIndex) {
      state.columns[state.columns.length - 1].tasks[taskIndex].archivedDate = null
    },
    removeTask (state, { columnIndex, taskIndex }) {
      state.columns[columnIndex].tasks.splice(taskIndex, 1)
    },
    addTask (state, { columnIndex, task }) {
      state.columns[columnIndex].tasks.push(task)
    }
  }
});
