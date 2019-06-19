<template>
   <div>
      <h3>{{ title }}</h3>
      <form @submit.prevent="save">
         <div class="form-group">
            <label for="title">Título</label>
            <input
                    required
                    id="title"
                    type="text"
                    autocomplete="off"
                    class="form-control"
                    placeholder="Título"
                    v-model="draft.title"
            />
         </div>
         <div class="form-group">
            <label for="description">Descripción</label>
            <textarea
                    rows="6"
                    cols="30"
                    id="description"
                    class="form-control"
                    placeholder="Descripción"
                    v-model="draft.description"
            ></textarea>
         </div>
         <button class="btn btn-primary">{{ action }}</button>
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
            return this.draft.title;
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


