$(function () {

  app.todoList.load();
  app.renderTodos(app.todoList.all);

  $('.todo-form').on('submit', function (e) {
    e.preventDefault();

    var txt = $(this).find('.todo-txt');

    app.todoList.add(txt.val());

    app.renderTodos(app.todoList.all);

    txt.val('');
  });

  $('.todo-list').on('click', '.todo-remove', function () {
    var li = $(this).closest('.todo-item');
    var index = li.data('index');

    app.todoList.remove(index);

    app.renderTodos(app.todoList.all);
  });

});
