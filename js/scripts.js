$(document).ready(function() {
	$('#hamburger-menu').click(function() {
		$('#mobile-menu-list').toggleClass('mobile-content');
		$('.none').toggleClass('block');
	});	

	$('a[href^="#"]').on('click', function() {
		var target = $(this.getAttribute('href'));
		var widthJs = $('html').width();
			$('#mobile-menu-list').removeClass('mobile-content');
			$('.none').removeClass('block');
			event.preventDefault();
			if (widthJs <= 899) {
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 300
				}, 1000);
			} else {
				$('html, body').stop().animate({
					scrollTop: target.offset().top
				}, 1000);				
			}
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

	function carousel() {
		setTimeout (function(){
			$('.tweet-one').css('opacity', '0', 'transtion', 'transition: opacity 0.5s linear');
		},3000)
		setTimeout (function(){
			$('.first-slide').removeClass('active');
			$('.sec-slide').addClass('active');
			$('.first').removeClass('fa-circle').addClass('fa-circle-thin');
			$('.sec').removeClass('fa-circle-thin').addClass('fa-circle');
		},3500)
		setTimeout (function(){
			$('.tweet-two').css('opacity', '1.0');
		},3600)
		setTimeout (function(){
			$('.tweet-two').css('opacity', '0');
		},6600)
		setTimeout (function(){
			$('.sec-slide').removeClass('active');
			$('.third-slide').addClass('active');
			$('.sec').removeClass('fa-circle').addClass('fa-circle-thin');
			$('.third').removeClass('fa-circle-thin').addClass('fa-circle');
		},7100)		
		setTimeout (function(){
			$('.tweet-three').css('opacity', '1.0');					
		},7400)
		setTimeout (function(){
			$('.tweet-three').css('opacity', '0');
		},10400)
		setTimeout (function(){
			$('.third-slide').removeClass('active');
			$('.first-slide').addClass('active');
			$('.third').removeClass('fa-circle').addClass('fa-circle-thin');
			$('.first').removeClass('fa-circle-thin').addClass('fa-circle');
		},11000)
		setTimeout (function(){
			$('.tweet-one').css('opacity', '1.0');					
		},11100)		
	}

	carousel()
	setInterval(carousel, 11100)
});

