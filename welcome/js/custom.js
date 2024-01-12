function setPage(){
	var screenWidth = jQuery( window ).width();
	if(screenWidth < 991){
		var page_url	=	'http://' + window.location.hostname + window.location.pathname;
		if(page_url.indexOf('hero.html') == -1){
			window.location.href = page_url.replace("hero.html", "hero.html");
		}
	}else{
		var page_url	=	'http://' + window.location.hostname + window.location.pathname;
		if(page_url.indexOf('xhtml') > -1){
			window.location.href = page_url.replace('hero.html', '');
		}
	}
	
	/* var screenWidth = jQuery( window ).width();
	var re = new RegExp(/^.*\//);
	var page_url = re.exec(window.location.href);
	
	if(screenWidth < 991){
		window.location.href = page_url+'xhtml/index.html';
	}else{
		var page_url	=	'http://' + window.location.hostname + window.location.pathname;
		if(page_url.indexOf('xhtml/index.html') > -1){
			window.location.href = page_url;
		}
	} */
}

var Gaya = function(){
	/* Search Bar ============ */
	siteUrl = '';
	
	var screenWidth = $( window ).width();
	
	/* Scroll To Top ============ */
	var scrollTop = function (){
		'use strict';
		var scrollTop = jQuery("button.scroltop");
		/* page scroll top on click function */	
		scrollTop.on('click',function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		})
		jQuery(window).bind("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
				jQuery(".theme-btn").fadeIn(1000).css("display","inline-block");
			} else {
				jQuery("button.scroltop").fadeOut(1000);
				jQuery(".theme-btn").fadeOut(1000);
			}
		});
		/* page scroll top on click function end*/
	}
	
	var handleCustomScroll = function(){
		/* all available option parameters with their default values */
		if($(".content-scroll").length)
		{ 
			$(".content-scroll").mCustomScrollbar({
				setWidth:false,
				setHeight:false,
				axis:"y"
			});	
		}
	}

	var handleSupport = function(){
		var support = '<a href="https://marouananouar.github.io/Space/" target="_blank" class="bt-buy-now theme-btn"><span>MySpace</span></a><a href="https://marouananouar.github.io/RedTeamSpace/" class="bt-demo theme-btn"><span>RED TEAM</span></a><a href="https://marouananouar.github.io/book/" target=_blank" class="bt-doc theme-btn"><span>MY BOOK</span></a>';
		jQuery('body').append(support);
	}
	
	/* Function ============ */
	return {
		init:function(){
			scrollTop();		
			handleSupport();
			handleCustomScroll();
		}
	}
	
}();

/* Document.ready Start */	
jQuery(document).ready(function() {
    'use strict';
	Gaya.init();
	
	//jQuery('#loading-area').find('div').addClass('la-animate');
	$(".dez-page").on('click',function(){
		if ($(this).attr('href') != '#' || $(this).attr('href') != '') 
		{
			jQuery('#loading-area').find('div').addClass('la-animate');			
		}
	});
});

jQuery(window).on('load',function(){
	setPage();
});
jQuery(window).on('resize',function(){
	setPage();
});
