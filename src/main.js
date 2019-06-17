import Vue from 'vue'
import EventBus from 'event-bus'
import router from 'router'
import App from './components/App'

window.EventBus = EventBus

window.not_found = function () {
   console.log('Not found: ' + router.currentRoute.fullPath)
   router.replace('/404')
}

window.not_found_unless = function (condition) {
   if (!condition)
      not_found()
}

const vm = new Vue({
   el: '#app',
   router,
   render: h => h(App)
});


