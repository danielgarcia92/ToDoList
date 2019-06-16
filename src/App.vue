<template>
  <div id="app">
    <div class="w-50 p-3 mx-auto">
      <h2 class="pb-3 pt-3">Lista de tareas</h2>

      <app-task-list :tasks="tasks"></app-task-list>

      <p class="pb-3">
        <a @click="deleteCompleted">Eliminar tareas completadas</a>
      </p>

      <h4>Crear Tarea</h4>
      <app-task-form @created="createTask"></app-task-form>

      <h4 class="pt-5">Imprimir</h4>
      <app-task-form @created="alertTask"></app-task-form>

    </div>
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
      alertTask(task){
        alert(task.description)
      },
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

