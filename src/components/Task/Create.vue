<script>
   import Form from './Form'
   import Store from 'store'

   export default {
      render(createElement) {
         let task = {
            id: '',
            title: '',
            description: '',
            pending: true
         };

         return createElement(Form, {
            props: {
               task: task,
               title: 'Nueva Tarea',
               action: 'Crear Tarea'
            },
            on: {
               save: (newTask) => {
                  Store.createTask(newTask);

                  this.$router.push({
                     name: 'task.details',
                     params: {id: newTask.id}
                  });
               }
            }
         });
      }
   }
</script>


