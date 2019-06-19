<script>
   import Form from './Form'
   import Store from 'store'

   export default {
      props: ['id'],
      computed: {
         task() {
            return Store.getters.findTask(this.id)
         }
      },
      render(createElement) {
         return createElement(Form, {
            props: {
               task: this.task,
               title: 'Editar Tarea',
               action: 'Editar Tarea'
            },
            on: {
               save: (draft) => {
                  Store.dispatch('updateTask', {id: this.id, draft: draft});

                  this.$router.replace({
                     name: 'task.details',
                     params: {id: this.id}
                  });
               }
            }
         });
      }
   }

</script>


