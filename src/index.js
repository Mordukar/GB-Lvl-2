import Vue from 'vue'
import App from './App.vue'
import './styles/style.css'
import store from './store/store.js'

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')



