$(function () {

  $('.todo-form').on('submit', function (e) {
    e.preventDefault();

    var txt = $(this).find('.todo-txt');
    var li = $('<li class="todo-item"><span class="todo-label"></span><button class="todo-remove">X</button></li>');

    li.find('.todo-label').text(txt.val());

    //// This is a way to handle remove... There's another
    // li.find('.todo-remove').on('click', function () {
    //   li.remove();
    // });

    $('.todo-list').append(li);

    txt.val('');
  });

  $('.todo-list').on('click', '.todo-remove', function (e) {
    $(e.target).closest('.todo-item').remove();
  });


});
