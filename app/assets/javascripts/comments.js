$(document).ready(function() {
  $('a.hide').click( function(event) {
  event.preventDefault();
  //alert("yo i got clicked");
  //console.log(this);
  $(this).hide();
  $(this).parent().find('#show_comments').show();
  $(this).parent().parent().find('.comment').empty();
  });
});
