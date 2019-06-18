<script>
   import Form from './Form'
   import Store from 'store'

   export default {
      props: ['id'],
      computed: {
         task() {
            return Store.findTask(this.id)
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
                  Store.updateTask(this.id, draft);

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


