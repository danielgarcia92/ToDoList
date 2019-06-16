import Vue from 'vue'
import Router from 'vue-router'
import EventBus from 'event-bus'
import App from './components/App'
import DashBoard from './components/Dashboard'
import Tasks from './components/Task/Tasks'

Vue.use(Router)

var router = new Router({
   routes: [
      {
        path: '/',
        component: DashBoard
      },
      {
         path: '/tasks',
         component: Tasks
      }
   ]
});

window.EventBus = EventBus;

new Vue({
   el: '#app',
   router,
   render: h => h(App)
});

