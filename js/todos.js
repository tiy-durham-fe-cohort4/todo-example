$(function () {

  var allTodos = [];

  function loadTodos() {
    allTodos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(allTodos));
  }

  loadTodos();
  app.renderTodos(allTodos);

  $('.todo-form').on('submit', function (e) {
    e.preventDefault();

    var txt = $(this).find('.todo-txt');

    allTodos.push(app.createTodo(txt.val()));

    app.renderTodos(allTodos);
    saveTodos();

    txt.val('');
  });

  $('.todo-list').on('click', '.todo-remove', function () {
    var li = $(this).closest('.todo-item');
    var index = li.data('index');

    allTodos.splice(index, 1);

    app.renderTodos(allTodos);
    saveTodos();
  });

});
