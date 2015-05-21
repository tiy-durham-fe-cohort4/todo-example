app.todoList = {
  all: [],

  add: function (txt) {
    this.all.push(app.createTodo(txt));
    this.save();
  },

  remove: function (index) {
    this.all.splice(index, 1);
    this.save();
  },

  load: function () {
    this.all = JSON.parse(localStorage.getItem('todos')) || [];
  },

  save: function () {
    localStorage.setItem('todos', JSON.stringify(this.all));
  }
};
