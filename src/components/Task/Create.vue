<script>
   import Form from './Form'
   import Store from 'store'

   export default {
      render(createElement) {
         return createElement(Form, {
            props: {
               task: {},
               title: 'Nueva Tarea',
               action: 'Crear Tarea'
            },
            on: {
               save: (draft) => {
                  // let newTask = Store.dispatch('createTask', draft);
                  /*this.$router.push({
                     name: 'task.details',
                     params: {id: newTask.id}
                  });*/
                  Store.dispatch('createTask', draft);
                  this.$router.push({name: 'task'});
               }
            }
         });
      }
   }
</script>


