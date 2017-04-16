$(function() {

	$("#phone").mask("+38 (999) 999-99-99");

	$('.carousel-portfolio').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="icon-chevron-left"></i>','<i class="icon-chevron-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items:3
			}
		}
	});

	function carouselService() {
		$('.carousel-portfolio-item').each(function(){
			var ths = $(this)
			thsh= ths.find('.carousel-portfolio-cont').outerHeight();
			ths.find('.carousel-portfolio-image').css('min-height', thsh);
		});
	}carouselService();

});
