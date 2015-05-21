ui.afterUIEvent(function renderTodoStatus () {
  var status = document.querySelector('.todo-status');
  var activeCount = app.todos.active.length;
  status.textContent = activeCount + ' active';
});
