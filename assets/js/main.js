//NAVBAR SCROLLING CHANGE
if ( $(window).width() >= 768) {
	var scroll_start = 0;
	   var startchange = $('.navbar-inverse');
	   var offset = startchange.offset();
	   $(document).scroll(function() {
	      scroll_start = $(this).scrollTop();
	      if(scroll_start > offset.top + 50) {

					$('#dbLogo').hide( function() {
						$('.navbar-inverse').animate({
							marginTop: '-35px'
						}, 250, function() {
							$('.navbar-inverse').css('background-color', '#ff9900').finish()
						} );
					});

				} else {

					$('.navbar-inverse').css('background-color', 'transparent').finish()
	 				$('.navbar-inverse').animate({
						marginTop: '30px'
					}, 500);
					$('#dbLogo').fadeIn();
	       }

	   });

}
else {
  //Add your javascript for small screens here
};

$('div.belief h3').click( function() {
	$(this).siblings().toggleClass('hidden');
});
