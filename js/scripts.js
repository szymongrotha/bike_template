$(document).ready(function() {
	$('#hamburger-menu').click(function() {
		$('#mobile-menu-list').toggleClass('mobile-content');
		$('.none').toggleClass('block');
	});	

	$('a[href^="#"]').on('click', function() {
	var target = $(this.getAttribute('href'));
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
	});

	$('#work').waypoint(function() {
		$('.bike-logo').css('opacity', 1.0).addClass('animated bounceInLeft');
		$('.vintage-olivia').css('opacity', 1.0).addClass('animated fadeInUp');
	}, { 
		offset: '50%'	
	});

	$('.work2').waypoint(function(){
		$('.la-boriosa').css('opacity', 1.0).addClass('animated fadeInUp');
		$('.bike-logo2').css('opacity', 1.0).addClass('animated bounceInRight');
	}, { 
		offset: '50%'	
	});
	$('.work3').waypoint(function(){
		$('.retro-bike').css('opacity', 1.0).addClass('animated fadeInUp');
		$('.bike-logo3').css('opacity', 1.0).addClass('animated bounceInLeft');
	}, { 
		offset: '50%'	
	});
});

