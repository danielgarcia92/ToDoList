<template>
   <div>
      <h3>{{ title }}</h3>
      <form @submit.prevent="save">
         <div class="form-group">
            <label for="title">Título</label>
            <input
                    v-model="draft.title"
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="Título"
            />
         </div>
         <div class="form-group">
            <label for="description">Descripción</label>
            <textarea
                    v-model="draft.description"
                    class="form-control"
                    id="description"
                    cols="30"
                    rows="6"
                    placeholder="Descripción"
            ></textarea>
         </div>
         <button :disabled="!isFormValid()" class="btn btn-primary">{{ action }}</button>
         <button @click="$router.replace({ name: 'tasks' })" class="btn btn-link">Cancelar</button>
      </form>
   </div>
</template>

<script>
   export default {
      props: [
         'title',
         'action',
         'task'
      ],
      methods: {
         isFormValid() {
            return this.draft.title && this.draft.description !== "";
         },
         save() {
            this.$emit('save', this.draft)
         }
      },
      data() {
         return {
            draft: clone(this.task)
         }
      }
   }
</script>


