<template>
   <li @click="select" class="list-group-item task-list-item"
       :class="{completed: !task.pending}">
      <a @click.stop="toggleStatus">
         <icon :img="task.pending ? 'unchecked' : 'check'"></icon>
      </a>

      <span class="description">{{ task.description }}</span>
   </li>

</template>

<script>
   import Icon from 'components/Icon.vue'

   export default {
      props: [
         'task',
         'index'
      ],
      components: {
         'icon': Icon
      },
      data() {
         return {
            draft: ''
         }
      },
      methods: {
         select() {
            //$router -> Representa componente de rutas en general.  $route -> ruta actual
            //En /tasks/:id se recibe así -> this.$route.params.id
            this.$router.push('/tasks/' + this.task.id)
         },
         toggleStatus() {
            this.task.pending = !this.task.pending;
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
   }

</style>

