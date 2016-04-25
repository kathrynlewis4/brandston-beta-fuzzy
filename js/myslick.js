// JavaScript 
(function(document , window , $){
	$(document).ready(function(){
      $(".slider").slick	({
        autoplay: true,
		autoplaySpeed: 0,
		//centerMode: true,
		//centerPadding: '0px',
		variableWidth: true,
		slidesToShow: 3,
		slidesToScroll: 1000,
		speed: 45000,
		waitForAnimate: false,
		respondTo: 'slider',
		
      });
	  });
	    })(document, window, jQuery);

	  
  