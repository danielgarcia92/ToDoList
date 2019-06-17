<template>
   <div class="row">
      <div class="col-xs-6 col-md-6">
         <div class="top">
            <h3>Tareas:</h3>
            <router-link :to="{name: 'tasks.create'}">Nueva Tarea</router-link>
         </div>
         <h3 class="pb-3 pt-3">Lista de tareas</h3>
         <ul class="list-group task-list">
            <task-item
                    v-for="task in tasks"
                    :key="task.id"
                    :task="task"
            ></task-item>
         </ul>
         <p><a @click="deleteCompleted">Eliminar tareas completadas</a></p>
      </div>
      <div class="col-xs-6 col-md-6">
         <router-view></router-view>
      </div>

   </div>
</template>

<script>
   import Store from 'store'
   import ListItem from './ListItem.vue'

   export default {
      components: {
         'task-item': ListItem
      },
      data() {
         return {
            tasks: Store.state.tasks   // Para luego usar Vuex
         };
      },
      methods: {
         deleteCompleted() {
            this.tasks = this.tasks.filter(task => task.pending);
         }
      }
   }
</script>

<style lang="scss">
   .top {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
   }
   .task-list {
      margin-bottom: 40px;
   }
</style>


