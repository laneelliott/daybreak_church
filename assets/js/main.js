$('#givingIcons').hover( function(){
	$('.badge.giving span').hide();
	$('.badge.giving .fa.fa-money').fadeIn("slow");
}, function(){
	$('.badge.giving .fa.fa-money').hide();
	$('.badge.giving span').fadeIn("slow");
});
