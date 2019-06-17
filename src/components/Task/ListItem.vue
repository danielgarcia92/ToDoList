<template>
   <li @click="select" class="list-group-item task-list-item"
       :class="{active: isActive, completed: !task.pending}">
      <a @click.stop="toggleStatus">
         <icon :img="task.pending ? 'unchecked' : 'check'"></icon>
      </a>

      <span class="description">{{ task.title }}</span>
   </li>

</template>

<script>
   import Icon from 'components/Icon.vue'

   export default {
      props: ['task'],
      components: {
         'icon': Icon
      },
      methods: {
         select() {
            //$router -> Representa componente de rutas en general.  $route -> ruta actual
            //En /tasks/:id se recibe así -> this.$route.params.id
            let route = this.isActive
               ? {name: 'tasks'}
               : {name: 'task.details', params: {id: this.task.id}};

            this.$router.push(route)
         },
         toggleStatus() {
            this.task.pending = !this.task.pending;
         }
      },
      computed: {
         isActive() {
            return this.task.id == this.$route.params.id
         }
      },
      data() {
         return {
            draft: ''
         }
      }
   }
</script>

<style lang="scss">
   .list-group-item.task-list-item {
      display: flex;
      justify-content: space-between;

      a {
         text-decoration: none;
         cursor: pointer;
      }

      &.editing {
         box-shadow: inset 0 0 5px #999999;
      }

      .description {
         flex: 1;
         padding: 0 5px;
      }

      &.completed {
         &, a {
            color: #999999;
            cursor: pointer;
         }

         .description {
            text-decoration: line-through;
         }
      }

      &.active a {
         color: white;
      }
   }

</style>

