import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    columns: [
               { name: 'To Do', tasks: [] },
               { name: 'Doing', tasks: [] },
               { name: 'Done', tasks:  [] }
             ]
  },
  getters: {
    archivedTasks: (state, getters) => {
      return state.columns[getters.numberOfColumns - 1].tasks.filter(task => task.archivedDate != null)
    },
    numberOfColumns: state => {
      return state.columns.length
    }
  },
  mutations: {
    initialiseKanban (state) {
      if (localStorage.getItem('kanban')) {
        this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('kanban'))))
      }
    },
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

store.subscribe((mutations, state) => {
  localStorage.setItem('kanban', JSON.stringify(state))
});

export default store
