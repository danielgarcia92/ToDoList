import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './Tasks'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      tasks
   },
   actions: {
      createTask(context, { title, description }) {
         console.log(title);
         let newTask = {
            id: context.state.tasks.length + 1,
            title,
            description,
            pending: true
         };

         context.commit('createTask', newTask)

         // return newTask; TODO: revisar!
      },
      deleteTask: (context, payload) => context.commit('deleteTask', payload),
      toggleTask: (context, payload) => context.commit('toggleTask', payload),
      updateTask: (context, payload) => context.commit('updateTask', payload),
      deleteCompletedTasks: (context) => context.commit('deleteCompletedTasks')
   },
   getters: {
      findTask(state) {
         return function (id) {
            let task = state.tasks.find(task => task.id == id);
            not_found_unless(task);

            return task;
         }
      }
   },
   mutations: {
      toggleTask: (state, task) => task.pending = !task.pending,
      createTask: (state, newTask) => state.tasks.push(newTask),
      updateTask: (state, {id, draft}) => {
         let index = state.tasks.findIndex(task => task.id == id)

         state.tasks.splice(index, 1, draft);
      },
      deleteTask: (state, id) => {
         let index = state.tasks.findIndex(task => task.id == id)

         state.tasks.splice(index, 1);
      },
      deleteCompletedTasks: (state) => state.tasks = state.tasks.filter(task => task.pending)
   }
});


