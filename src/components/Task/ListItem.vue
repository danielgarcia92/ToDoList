<template>
   <li @click="select" class="list-group-item task-list-item"
       :class="{active: isActive, completed: !task.pending}">
      <a @click.stop="toggleStatus">
         <app-icon :img="task.pending ? 'unchecked' : 'check'"></app-icon>
      </a>

      <span class="description">{{ task.title }}</span>
   </li>

</template>

<script>
   import Store from 'store'

   export default {
      props: ['task'],
      methods: {
         select() {
            let route = this.isActive
               ? {name: 'tasks'}
               : {name: 'task.details', params: {id: this.task.id}};

            this.$router.push(route)
         },
         toggleStatus() {
            Store.toggleTask(this.task);
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

      &.active, &.active a {
         color: white;
      }
   }

</style>


