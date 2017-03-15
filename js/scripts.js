(function modularBikeTemplate() {
	var bikeObject = {
		counter: 1,
		init: function() {
			this.cacheDom();
			this.bindEvents();
			this.breakPoints();
			this.interval();
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
			this.$tweet = $('.tweet h2, .tweet p');				
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
			var $target = $(e.currentTarget.attributes["0"].nodeValue),
				$widthJs = this.$html.width();
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

		carousel: function() {
			var h2_1 = 'AOD New York  @aod<span class="thin"> /  35 min</span>',
				h2_2 = 'PNG Warsaw  @png<span class="thin"> /  15 min</span>',
				h2_3 = 'ERR London  @err<span class="thin"> /  5 min</span>',
				p_1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus ac nulla semper rhoncus. Nullam a odio porttitor, dictum turpis vitae, pretium ante amet.',
				p_2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus ac nulla semper rhoncus.',
				p_3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus ac nulla semper rhoncus. Nullam a odio porttitor.',
				result = eval('h2_' +this.counter),
				result2 = eval('p_' +this.counter);

			this.$tweet.fadeOut(1000, function () {
				$('.tweet h2').html(result).fadeIn(1000);
				$('.tweet p').html(result2).fadeIn(1000);
   			});
		},

		getCounter: function() {
			if (this.counter == 3) {
				this.counter = 0;
				setTimeout(this.carousel.bind(this), 2000)
				this.counter++;
			} else {
				setTimeout(this.carousel.bind(this), 2000)
				this.counter++;
			}			
		},

		interval: function() {
			setInterval(this.getCounter.bind(this), 4000);
		},
	}

	bikeObject.init();

})()
