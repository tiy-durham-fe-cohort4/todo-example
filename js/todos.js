$(function () {

  $('.todo-form').on('submit', function (e) {
    e.preventDefault();

    var txt = $(this).find('.todo-txt');

    $('.todo-list').append($('<li class="todo-item"></li>').text(txt.val()));

    txt.val('');
  });

});
