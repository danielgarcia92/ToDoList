<template>
   <div>
      <h3 class="pb-3 pt-3">Lista de tareas</h3>
      <task-list></task-list>

      <p><a @click="deleteCompleted">Eliminar tareas completadas</a></p>

      <h3>Crear Tarea</h3>
      <task-form @created="createTask"></task-form>
   </div>
</template>

<script>
   import List from './List'
   import Form from './CreateForm'

   export default {
      components: {
         'task-list': List,
         'task-form': Form
      },
      data() {
         return {
            tasks: [
               {
                  description: "Cepillarse",
                  pending: true
               },
               {
                  description: "Echarse un sueñito",
                  pending: true
               },
               {
                  description: "Ponerse a estudiar",
                  pending: true
               }
            ]
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
      },
      created() {
         this.tasks.forEach((task, index) => {
            this.$set(task, "id", index + 1)
         });
      }
   }
</script>

