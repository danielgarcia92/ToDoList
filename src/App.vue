<template>
   <div id="app" class="container">

      <h3 class="pb-3 pt-3">Lista de tareas</h3>
      <app-task-list :tasks="tasks"></app-task-list>

      <p><a @click="deleteCompleted">Eliminar tareas completadas</a></p>

      <h3>Crear Tarea</h3>
      <app-task-form @created="createTask"></app-task-form>

      <footer class="footer">
         <p>&copy Daniel García</p>
      </footer>

   </div>
</template>

<script>
   import TaskForm from './TaskForm'
   import TaskList from './TaskList'

   export default {
      components: {
         'app-task-list': TaskList,
         'app-task-form': TaskForm
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
   };

</script>

<style lang="scss">
   @import "./sass/app";

   body {
      margin: 10px;
   }

   .container {
      max-width: 650px;

      a {
         cursor: pointer;
      }

      h2 {
         margin-bottom: 20px;
      }

      footer {
         margin: 40px 0;
         padding-top: 20px;
         border-top: 1px solid #ccc;
         color: #999;
      }
   }

</style>

