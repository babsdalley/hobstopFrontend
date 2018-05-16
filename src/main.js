import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import {routes} from './routes'
import VueSession from 'vue-session'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueSession)

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
