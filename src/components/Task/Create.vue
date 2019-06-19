<script>
   import Form from './Form'
   import Store from 'store'

   export default {
      render(createElement) {
         return createElement(Form, {
            props: {
               title: 'Nueva Tarea',
               action: 'Crear Tarea',
               task: {
                  title: '',
                  description: ''
               },
            },
            on: {
               save: (draft) => {
                  Store.dispatch('createTask', draft).then(newTask => {
                     this.$router.push({
                        name: 'task.details',
                        params: {id: newTask.id}
                     });
                  }).catch(error => {
                     alert(error)
                  });
               }
            }
         });
      }
   }
</script>


