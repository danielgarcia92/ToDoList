<template>
   <div>
      <form @submit.prevent="create" class="new-task-form">
         <input
                 v-model="draft"
                 type="text"
                 class="form-control"
                 placeholder="Nueva tarea"
         />
         <button :disabled="!isFormValid()" class="btn btn-primary">
            Crear nueva tarea
         </button>
      </form>
   </div>
</template>

<script>
   export default {
      methods: {
         isFormValid() {
            return this.draft !== "";
         },
         create() {
            this.$emit('created', {
               description: this.draft,
               pending: true,
               editing: false
            });

            this.draft = "";
         },
      },
      data() {
         return {
            draft: ''
         }
      },
   }
</script>

<style lang="scss">
  .new-task-form {
     display: flex;

     input {
        margin-right: 10px;
     }
  }
</style>



