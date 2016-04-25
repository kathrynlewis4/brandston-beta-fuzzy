// JavaScript Document

(function(document , window , $){

	$(document).ready(function(){
		$('.slider').slick	({
			appendArrows: $('.slider'),
			prevArrow: $('.slick-prev'),
			nextArrow: $('.slick-next'),
			//centerMode: true,
			//centerPadding: '200px',
			cssEase: 'linear',
			edgeFriction: 0.2,
			initialSlide: 0,
			//focusOnSelect: true,
			//direction: 'rtl',
			//rtl: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			speed: 300,
			//swipeToSlide: false,
			variableWidth: true,
			waitForAnimate: true,
      		});
		});

		})(document, window, jQuery);
