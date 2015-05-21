ui.afterUIEvent(function renderTodoList () {
  var todoList = document.querySelector('.todo-list');
  todoList.innerHTML = todosToHtml(app.todos[app.currentList]);

  function todosToHtml(todos) {
    return todos.map(function (todo) {
      return '<li class="todo ' + (todo.isDone ? 'done' : '') + '">' +
        '<input data-todo-id="' + todo.id + '" ' + (todo.isDone ? 'checked' : '') + ' type="checkbox" class="todo-done">' +
        '<span>' + todo.text + '</span>' +
        '<button data-todo-id="' + todo.id + '" class="todo-remove">' +
        'X</button>' +
        '</li>';
    }).join('');
  }
});
