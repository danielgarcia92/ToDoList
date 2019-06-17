<template>
   <div v-if="task">
      <h3>Editar Tarea</h3>
      <form @submit.prevent="update">
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
         <button :disabled="!isFormValid()" class="btn btn-primary">Editar tarea</button>
         <button @click="$router.push({ name: 'tasks' })" class="btn btn-link">Cancelar</button>

      </form>
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
            this.task = clone(Store.findTask(this.id));

            not_found_unless(this.task)
         },
         isFormValid() {
            return this.task.title && this.task.description !== "";
         },
         update() {
            Store.updateTask(this.id, this.task);

            this.$router.replace({
               name: 'task.details',
               params: {id: this.task.id}
            });
         }
      },
      data() {
         return {
            task: null
         }
      }
   }
</script>


