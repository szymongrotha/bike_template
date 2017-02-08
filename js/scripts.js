$(document).ready(function() {
	$('#hamburger-menu').click(function() {
		var jsMenu = $('.none').css('display');
		$('#mobile-menu-list').toggleClass('mobile-content');
		
		if (jsMenu === 'none') {
			$('.none').css( "display", "block" );
		} else {
			$('.none').css( "display", "none" );
		}	
	});	
});