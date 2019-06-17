<template>
   <div v-if="task">
      <h3>{{ task.title }}</h3>
      <p>{{ task.description }}</p>

      <div class="well">
         <button @click="toggleTask" class="btn" :class="task.pending ? 'btn-default' : 'btn-primary'">
            <app-icon img="ok"></app-icon> Completar
         </button>
         <button class="btn btn-default">
            <app-icon img="edit"></app-icon> Editar
         </button>
         <button @click="deleteTask" class="btn btn-default">
            <app-icon img="trash"></app-icon> Eliminar
         </button>
      </div>
   </div>
</template>

<script>
   import Store from 'store'

   export default {
      props: ['id'],
      created() {
         this.findTask()
      },
      watch: {
         id: 'findTask'
      },
      methods: {
         findTask() {
            this.task = Store.findTask(this.id);

            not_found_unless(this.task)
         },
         toggleTask() {
            Store.toggleTask(this.task)
         },
         deleteTask() {
            Store.deleteTask(this.id);

            this.$router.replace({name: 'tasks'})
         }
      },
      data() {
         return {
            task: null
         }
      },
   }
</script>


