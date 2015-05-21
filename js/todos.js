// todo-list.js
app.todos = {
  all: [],

  get active () {
    return this.all.filter(function (todo) {
      return !todo.isDone;
    });
  },

  get completed () {
    return this.all.filter(function (todo) {
      return todo.isDone;
    });
  },
  
  id: 0,

  add: function (todo) {
    todo = todo.trim();

    if (!todo.length) return;

    this.all.push({
      text: todo,
      isDone: false,
      id: ++this.id
    });
  },

  getById: function (todoId) {
    var result;
    todoId = parseInt(todoId);

    this.all.some(function (todo) {
      result = todo;
      return todo.id === todoId;
    });

    return result;
  },

  remove: function (todoId) {
    if (typeof todoId === 'function') {
      var filterFn = todoId;
      this.all = this.all.filter(function (todo) {
        return !filterFn(todo);
      });
    } else {
      todoId = parseInt(todoId);

      this.all = this.all.filter(function (todo) {
        return todo.id !== todoId;
      });
    }
  }
};
