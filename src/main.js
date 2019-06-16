import Vue from 'vue'
import EventBus from 'event-bus'
import router from 'router'
import App from './components/App'

window.EventBus = EventBus;

new Vue({
   el: '#app',
   router,
   render: h => h(App)
});

