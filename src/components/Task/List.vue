<template>
  <ul class="list-group task-list">
    <list-item
      v-for="(task, index) in tasks"
      :key="task.id"
      :task="task"
      :index="index"
      @remove="deleteTask"
    ></list-item>
  </ul>
</template>

<script>
  import ListItem from './ListItem.vue'

  export default {
    components: {
      'list-item': ListItem
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


