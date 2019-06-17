let tasks = [
   {
      title: "Cepillarse",
      pending: true
   },
   {
      title: "Echarse un sueñito",
      pending: true
   },
   {
      title: "Ponerse a estudiar",
      pending: true
   }
];

tasks.forEach((task, index) => {
   task.id = index + 1;

   task.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
});

export default {
   state: {
      tasks    // tasks: tasks, -> ES6
   },
   findTask(id) {
      return this.state.tasks.find(task => task.id == id);
   },
   createTask(task) {
      task.id = this.state.tasks.length + 1;

      this.state.tasks.push(task);
   },
   toggleTask(task) {
      task.pending = !task.pending
   },
   updateTask(id, task) {
      let index = this.state.tasks.findIndex(task => task.id == id)

      this.state.tasks.splice(index, 1, task);
   },
   deleteTask(id) {
      let index = this.state.tasks.findIndex(task => task.id == id)

      this.state.tasks.splice(index, 1);
   },
   deleteCompleted() {
      this.state.tasks = this.state.tasks.filter(task => task.pending);
   }

}


