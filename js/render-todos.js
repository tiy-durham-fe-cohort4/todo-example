app.renderTodos = function (todos) {
  $('.todo-list').html(todosToHTML(todos));

  function todosToHTML(todos) {
    return todos.map(function (todo, index) {
      var li = $('<li class="todo-item">' +
        '<span class="todo-label"></span>' +
        '<button class="todo-remove">X</button>' +
        '</li>');

      li.data('index', index);
      li.find('.todo-label').text(todo.text);

      return li;
    });
  }
};
