<template>
   <div v-if="task">
      <h3>{{ task.title }}</h3>
      <p>{{ task.description }}</p>
   </div>
</template>

<script>
   import Store from 'store'

   export default {
      props: ['id'],
      data() {
         return {
            task: null
         }
      },
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
         }
      }
   }
</script>


