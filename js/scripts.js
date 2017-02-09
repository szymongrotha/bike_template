$(document).ready(function() {
	$('#hamburger-menu').click(function() {
		$('#mobile-menu-list').toggleClass('mobile-content');
		$('.none').toggleClass('block');
	});	

	$('.about').waypoint(function() {
		$('.bike-logo').css('opacity', 1.0).addClass('animated bounceInLeft');
		$('.vintage-olivia').css('opacity', 1.0).addClass('animated fadeInUp');
	});

	$('.work').waypoint(function(){
		$('.la-boriosa').css('opacity', 1.0).addClass('animated fadeInUp');
		$('.bike-logo2').css('opacity', 1.0).addClass('animated bounceInRight');
	});

	$('.bike-logo2').waypoint(function(){
		$('.retro-bike').css('opacity', 1.0).addClass('animated fadeInUp');
		$('.bike-logo3').css('opacity', 1.0).addClass('animated bounceInLeft');
	});
});

