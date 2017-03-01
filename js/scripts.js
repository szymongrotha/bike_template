(function modularBikeTemplate() {
	var bikeObject = {
		init: function() {
			this.cacheDom();
			this.bindEvents();
			this.breakPoints();
			console.log("I'm modular!")
		},
		cacheDom: function() {
			this.$mobileMenu = $('#hamburger-menu');
			this.$menuLink = $('a[href^="#"]');
			this.$workSection = $('#work');
			this.$workSection2 = $('.work2');
			this.$workSection3 = $('.work3');				
			this.$bikeLogo = $('.bike-logo');
			this.$bikeTitle = $('.vintage-olivia');
			this.$bikeLogo = $('.bike-logo');
			this.$bikeTitle = $('.vintage-olivia');
			this.$bikeLogoTwo = $('.bike-logo2');
			this.$bikeTitleTwo = $('.la-boriosa');
			this.$bikeLogoThree = $('.bike-logo3');
			this.$bikeTitleThree = $('.retro-bike');										
		},

		bindEvents: function() {
			this.$mobileMenu.on('click', this.hamburgerMenu);
			this.$menuLink.on('click', this.hrefSlide);
		},

		breakPoints: function() {
			this.$workSection.waypoint(this.breakPointOne.bind(this), { 
				offset: '50%'
			}),

			this.$workSection2.waypoint(this.breakPointTwo.bind(this), { 
				offset: '50%'	
			}),
			
			this.$workSection3.waypoint(this.breakPointThree.bind(this), { 
				offset: '50%'	
			});
		},

		breakPointOne: function(){
				this.$bikeTitle.css('opacity', 1.0).addClass('animated fadeInUp');
				this.$bikeLogo.css('opacity', 1.0).addClass('animated bounceInLeft');
		}, 

		breakPointTwo: function(){
				this.$bikeTitleTwo.css('opacity', 1.0).addClass('animated fadeInUp');
				this.$bikeLogoTwo.css('opacity', 1.0).addClass('animated bounceInLeft');
		},

		breakPointThree: function(){
				this.$bikeTitleThree.css('opacity', 1.0).addClass('animated fadeInUp');
				this.$bikeLogoThree.css('opacity', 1.0).addClass('animated bounceInLeft');
		},

		hamburgerMenu: function() {
			$('#mobile-menu-list').toggleClass('mobile-content');
			$('.none').toggleClass('block');
		},

		hrefSlide: function() {
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
		},
	}

	bikeObject.init();

})()


$(document).ready(function() {

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

