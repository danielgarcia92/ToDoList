<template>
  <li class="list-group-item task-list-item"
      :class="{editing: editing, completed: !task.pending}">
      <a @click="toggleStatus">
        <icon :img="task.pending ? 'unchecked' : 'check'"></icon>
      </a>

    <template v-if="!editing">
      <span class="description">
        {{ task.description }}
      </span>

      <div>
        <a @click="edit">
          <icon img="edit"></icon>
        </a>
        <a @click="remove">
          <icon img="trash"></icon>
        </a>
      </div>
    </template>

    <template v-else>
      <input v-model="draft" type="text"/>
      <div>
        <a @click="update">
          <icon img="ok"></icon>
        </a>
        <a @click="discard">
          <icon img="remove"></icon>
        </a>
      </div>
    </template>
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

</style>

