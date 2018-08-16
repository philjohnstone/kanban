import Vue from 'vue'
import App from './App.vue'

import store from './store/store';

new Vue({
  el: '#app',
  store,
  beforeCreate () {
    this.$store.commit('initialiseKanban')
  },
  render: h => h(App)
})
