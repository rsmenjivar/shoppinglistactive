$(document).ready(function() {
  $('#add').click(function(){
    $('ul').prepend('<li class="text"><span class="item">' + $('input#add-text').val() + '</span> <button class="done">Done</button> <button class="remove">Remove</button></li>');
    $('input#add-text').val("");
  });
  $('ul').on('click', '.done', function() {
	$(this).closest('li').toggleClass('text bought');
	$(this).toggleClass('done new');
	$(this).text('New');
  });
    $('ul').on('click', '.new', function() {
	$(this).closest('li').toggleClass('bought text');
	$(this).toggleClass('new done');
	$(this).text('Done');
  });
    $('ul').on('click', '.remove', function() {
	$(this).closest('li').remove();
  });

    $('#clear').click(function() {
	$('li').remove();
  });
});