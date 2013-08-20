$(document).ready(function() {
  $('a.hide').click( function(event) {
  event.preventDefault();
  $(this).hide();
  $(this).parent().find('#show_comments').show();
  $(this).parent().parent().find('.comment').empty();
  });
});
