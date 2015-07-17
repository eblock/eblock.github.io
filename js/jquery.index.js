/* jquerydemo.com */

$(document).ready(function() {

	$('.photos img').css('opacity', 1);
	$('.photos li').hover(
	  function(){
		$(this).find('img').stop().fadeTo('slow', 0.6);
	  },
	  function(){
		$(this).find('img').stop().fadeTo('medium', 1);
	  });

});