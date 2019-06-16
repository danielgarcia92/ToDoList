<template>
   <div>
      <h3 class="pb-3 pt-3">Lista de tareas</h3>
      <task-list :tasks="tasks"></task-list>

      <p><a @click="deleteCompleted">Eliminar tareas completadas</a></p>

      <h3>Crear Tarea</h3>
      <task-form @created="createTask"></task-form>
   </div>
</template>

<script>
   import Store from 'store'
   import List from './List'
   import Form from './CreateForm'

   export default {
      components: {
         'task-list': List,
         'task-form': Form
      },
      data() {
         return {
            tasks: Store.state.tasks   // Para luego usar Vuex
         };
      },
      methods: {
         createTask(task) {
            this.tasks.push(task);
         },
         deleteTask(index) {
            this.tasks.splice(index, 1);
         },
         deleteCompleted() {
            this.tasks = this.tasks.filter(task => task.pending);
         }
      }
   }
</script>

