(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		
			
		/*---------------------------------------------*
		 * Sticky Menu
		 ---------------------------------------------*/
	 
				$(".header-area").sticky({stopSpacing: 0 });
			
		
		/*---------------------------------------------*
		 * Scrollspy
		 ---------------------------------------------*/
		
				$('body').scrollspy({
					target: '.navbar-collapse',
					offset: 100
				});
		
		
		
		/*---------------------------------------------*
		 * Add smooth scrolling to all links
		 ---------------------------------------------*/
		 
				$(".smooth-scroll a").on('click', function(event) {

				// Make sure this.hash has a value before overriding default behavior
				if (this.hash !== "") {
				  // Prevent default anchor click behavior
				  event.preventDefault();

				  // Store hash
				  var hash = this.hash;

				  // Using jQuery's animate() method to add smooth page scroll
				  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				  $('html, body').animate({
					scrollTop: $(hash).offset().top
				  }, 800, function(){
			   
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				  });
				} // End if
			  });
		
        
		  
	  
		/*---------------------------------------------*
		 * Navbar Remove Class
		 ---------------------------------------------*/
	 
			$(".main-menu ul.nav.navbar-nav li a").click(function(){
				$(".navbar-collapse").removeClass("in");
			});
        
        
		
	
        
		/*---------------------------------------------*
		 * Scroll to Top
		 ---------------------------------------------*/
			
			
			jQuery("#backtotop").click(function () {
				jQuery("body,html").animate({
					scrollTop: 0
				}, 600);
			});
			jQuery(window).scroll(function () {
				if (jQuery(window).scrollTop() > 250) {
					jQuery("#backtotop").addClass("visible");
				} else {
					jQuery("#backtotop").removeClass("visible");
				}
			});
			

			
			
		
			

     

		/*---------------------------------------------*
		 * Nicescroll
		 ---------------------------------------------*/
			
			$("body").niceScroll({
				cursorcolor:"#2ECC71",
				cursorwidth:"8px"
			})
			

			
	});	

}(jQuery));	
