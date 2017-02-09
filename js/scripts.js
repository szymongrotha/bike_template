$(document).ready(function() {
	$('#hamburger-menu').click(function() {
		var jsMenu = $('.none').css('display');
		$('#mobile-menu-list').toggleClass('mobile-content');
		$('.none').toggleClass('block');

	});	
});