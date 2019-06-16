<template>
  <tr class="list-group-item" :class="{editing: editing, completed: !task.pending}">
    <td>
      <a @click="toggleStatus">
        <i :class="task.pending ? 'far fa-square' : 'fas fa-check-square'"></i>
      </a>
    </td>

    <template v-if="!editing">
      <td class="col">
        <span class="description">
          {{ task.description }}
        </span>
      </td>
      <td>
        <a @click="edit">
          <app-icon img="edit"></app-icon>
        </a>
      </td>
      <td>
        <a @click="remove">
          <app-icon img="trash-alt"></app-icon>
        </a>
      </td>
    </template>

    <template v-else>
      <td class="col">
        <input
          v-model="draft"
          type="text"
          class="form-control editTask"
        />
      </td>
      <td>
        <a @click="update">
          <app-icon img="check"></app-icon>
        </a>
      </td>
      <td>
        <a @click="discard">
          <app-icon img="times-circle"></app-icon>
        </a>
      </td>
    </template>
  </tr>
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

