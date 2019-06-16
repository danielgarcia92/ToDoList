<template>
  <form @submit.prevent="create" class="new-task-form">
    <input
      v-model="draft"
      type="text"
      class="form-control text-center"
      placeholder="Nueva tarea"
    />
    <button :disabled="!isFormValid()" class="btn btn-primary submit">
      Crear nueva tarea
    </button>
  </form>
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

