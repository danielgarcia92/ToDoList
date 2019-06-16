<template>
  <table class="table table-borderless">
    <app-task
      v-for="(task, index) in tasks"
      :key="task.id"
      :task="task"
      :index="index"
      @remove="deleteTask"
    ></app-task>
  </table>
</template>

<script>
  import Task from './Task.vue'

  export default {
    components: {
      'app-task': Task
    },
    props: [
      'tasks'
    ],
    methods: {
      deleteTask(index) {
        this.tasks.splice(index, 1);
      }
    }
  }
</script>

<style lang="scss">
  .task-list{
    margin-bottom: 40px;
  }
</style>

<style lang="scss" module>
  @import "sass/variables";

  .subtitle {
    color: $error-color;
  }
</style>


