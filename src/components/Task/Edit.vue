<script>
   import Form from './Form'
   import Store from 'store'

   export default {
      props: ['id'],
      render(createElement) {
         if (!this.task)
            return createElement('h3', 'Cargando ...');

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
      },
      created() {
         this.findTask()
      },
      watch: {
         id: 'findTask'
      },
      methods: {
         findTask() {
            setTimeout(() => {
               this.task = clone(Store.findTask(this.id));

               not_found_unless(this.task)
            },2000);
         }
      },
      data() {
         return {
            task: null
         }
      }
   }

</script>


