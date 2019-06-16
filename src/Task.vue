<template>
  <li class="list-group-item task-list-item"
      :class="{editing: editing, completed: !task.pending}">
      <a @click="toggleStatus">
        <app-icon :img="task.pending ? 'unchecked' : 'check'"></app-icon>
      </a>

    <template v-if="!editing">
      <span class="description">
        {{ task.description }}
      </span>

      <div>
        <a @click="edit">
          <app-icon img="edit"></app-icon>
        </a>
        <a @click="remove">
          <app-icon img="trash"></app-icon>
        </a>
      </div>
    </template>

    <template v-else>
      <input v-model="draft" type="text"/>
      <div>
        <a @click="update">
          <app-icon img="ok"></app-icon>
        </a>
        <a @click="discard">
          <app-icon img="remove"></app-icon>
        </a>
      </div>
    </template>
  </li>
</template>

<script>
  import Icon from './Icon.vue'
  import EventBus from './event-bus.js'

  export default {
    template: '#task-template',
    props: [
      'task',
      'index'
    ],
    components: {
      'app-icon': Icon
    },
    data() {
      return {
        draft: '',
        editing: false
      }
    },
    created() {
      EventBus.$on('editing', (index) => {
        if (this.index !== index) {
          this.discard();
        }
      });
    },
    methods: {
      toggleStatus() {
        this.editing = false;
        this.task.pending = !this.task.pending;
      },
      edit() {
        this.editing = true;
        this.task.pending = true;
        this.draft = this.task.description;
        EventBus.$emit('editing', this.index);
      },
      update() {
        this.editing = !this.editing;
        this.task.description = this.draft;
      },
      discard() {
        this.editing = false;
        this.task.pending = true;
      },
      remove() {
        this.$emit('remove', this.index);
      },
    }
  }
</script>

<style lang="scss">
  .task-list-item {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
    }

    &.editing {
      box-shadow: inset 0 0 5px #999999;
    }

    input, .description {
      flex: 1;
      padding: 0 5px;
    }

    input {
      border: 0;

      &:focus {
        outline: none;
      }
    }

    &.completed {
      &, a {
        color: #999999;
      }

      .description {
        text-decoration: line-through;
      }
    }
  }

  /*.completed {
    background: #c6c8ca;
    color: #dee2e6;
    text-decoration: line-through;
  }

  .editTask {
    border-color: rgb(0,123,255,0.2);
  }

  .editing {
    color: #007bff;
    -webkit-box-shadow: 3px -3px 4px -2px rgba(0,0,0,0.54);
    -moz-box-shadow: 3px -3px 4px -2px rgba(0,0,0,0.54);
    box-shadow: 3px -3px 4px -2px rgba(0,0,0,0.54);
  }*/
</style>

