$(document).ready(function() {
	$('#hamburger-menu').click(function() {
		$('#mobile-menu-list').toggleClass('mobile-content');
		$('.none').toggleClass('block');
	});	
});