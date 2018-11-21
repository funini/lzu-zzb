jQuery(document).ready(function($) {
	"use strict"; 
	
	$('body').addClass('sticky-header');

	// Sticky header
	$(window).scroll(function() {
		var scrolled = $(this).scrollTop(),
		headerHeight = $('#navigation-wrapper').height(),
		headerOffset = $('#navigation-wrapper').offset().top;
		
		if(scrolled > headerOffset) {
			$('#navigation-container').css({ 'position' : 'fixed', 'top' : '0px', 'opacity':'1' });
			$('#navigation-container').css({'width':'100%','margin':'0 auto','position' : 'fixed', 'top' : '0px', 'opacity':'1'});
			$('#navigation-inner').css({ 'background-color': 'rgba(193,0,0)'});
//			$('.collapse .navbar-collapse').css({ 'padding-left':'0px','padding-right':'0px'});

		} else {
			$('#navigation-container').css({'width':'100%', 'position' : 'static', 'top' : 'auto','opacity':'1','z-index':'9'});
			$('#navigation-inner').css({'width':'100%','margin':'0 auto', 'background-color': 'rgba(193,0,0)','z-index':'9'});
			$('.navbar-collapse').css({ 'background-color': 'rgba(193,0,0)','padding-left':'0px','padding-right':'0px','z-index':'9'});
		}
		
	});	
	
	// Trigger scroll
	setTimeout( function(){ 
		$(window).scroll();
	},0 );
	
});
