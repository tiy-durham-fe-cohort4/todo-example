(function () {
  'use strict';

  app.currentList = 'all';

  ui.when('todo-form', 'submit', function (e) {
    e.preventDefault();
    var txt = e.target.querySelector('input');
    app.todos.add(txt.value);
    txt.value = '';
  });

  ui.when('todo-remove', function (e) {
    app.todos.remove(e.target.dataset.todoId);
  });

  ui.when('todo-done', function (e) {
    app.todos.getById(e.target.dataset.todoId).isDone = e.target.checked;
  });

  ui.when('todo-clear', function (e) {
    app.todos.remove(function (todo) {
      return todo.isDone;
    });
  });

  ui.when('todo-filter', function (e) {
    app.currentList = e.target.value;
  });

})();
