import Vue from 'vue'
import router from 'router'
import EventBus from 'event-bus'
import App from './components/App'
import Icon from './components/Icon'

window.EventBus = EventBus

window.not_found = function () {
   console.log('Not found: ' + router.currentRoute.fullPath)
   router.replace('/404')
};

window.not_found_unless = function (condition) {
   if (!condition)
      not_found()
};

Vue.component('app-icon', Icon);

const vm = new Vue({
   el: '#app',
   router,
   render: h => h(App)
});


