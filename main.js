$(".button").hover(
  function () {
    $(this).removeClass('out').addClass('over');
  },
  function () {
    $(this).removeClass('over').addClass('out');
  }
);

function changeBC () {
  $('body').css('background', '#B026FF');
}
