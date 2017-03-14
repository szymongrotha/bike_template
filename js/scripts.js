(function modularBikeTemplate() {
	var bikeObject = {
		init: function() {
			this.cacheDom();
			this.bindEvents();
			this.breakPoints();
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
			this.$mobileMenuList = $('#mobile-menu-list');
			this.$none = $('.none');	
			this.$htmlBody = $('html, body');
			this.$html = $('html');									
		},

		bindEvents: function() {
			this.$mobileMenu.on('click', this.hamburgerMenu.bind(this));
			this.$menuLink.on('click', this.hrefSlide.bind(this));
		},

		hamburgerMenu: function() {
			this.$mobileMenuList.toggleClass('mobile-content');
			this.$none.toggleClass('block');
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

		hrefSlide: function(e) {
			var $target = $(e.currentTarget.attributes["0"].nodeValue);
			var $widthJs = this.$html.width();
				this.$mobileMenuList.removeClass('mobile-content');
				this.$none.removeClass('block');
				event.preventDefault();
				if ($widthJs <= 899) {
					this.$htmlBody.stop().animate({
						scrollTop: $target.offset().top - 300
					}, 1000);
				} else {
					this.$htmlBody.stop().animate({
						scrollTop: $target.offset().top
					}, 1000);				
				}
		},
	}

	bikeObject.init();

})()

var counter = 2;

function carousel(counter) {
	var h2_1 = 'AOD New York  @aod<span class="thin"> /  35 min</span>';
	var h2_2 = 'PNG Warsaw  @png<span class="thin"> /  15 min</span>';
	var h2_3 = 'ERR London  @err<span class="thin"> /  5 min</span>';
	var result = eval('h2_' +counter);

	$('.tweet h2, .tweet p').fadeOut(1000, function () {
		$('.tweet h2').html(result).fadeIn(1000);
		$('.tweet p').html("Second One").fadeIn(1000);
   	});
}

function getCounter() {
	if (counter === 4) {
		counter = 1;
		setTimeout(carousel(counter), 2000)
		counter++;
	} else {
		setTimeout(carousel(counter), 2000)
		counter++;
	}
}

setInterval(getCounter, 4000);