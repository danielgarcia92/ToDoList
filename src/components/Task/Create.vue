<template>
   <div>
      <h3>Nueva Tarea</h3>
      <form @submit.prevent="create">
         <div class="form-group">
            <label for="title">Título</label>
            <input
                    v-model="task.title"
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="Título"
            />
         </div>
         <div class="form-group">
            <label for="description">Descripción</label>
            <textarea
                    v-model="task.description"
                    class="form-control"
                    id="description"
                    cols="30"
                    rows="6"
                    placeholder="Descripción"
            ></textarea>
         </div>
         <button :disabled="!isFormValid()" class="btn btn-primary">Crear nueva tarea</button>
      </form>
   </div>
</template>

<script>
   import Store from 'store'

   export default {
      methods: {
         isFormValid() {
            return this.task.title && this.task.description !== "";
         },
         create() {
            Store.createTask(this.task);

            this.$router.push({
               name: 'task.details',
               params: {id: this.task.id}
            });
         }
      },
      data() {
         return {
            task: {
               id: '',
               title: '',
               description: '',
               pending: true
            }
         }
      }
   }
</script>


