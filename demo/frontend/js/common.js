$(function() {

	$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$('a[href^="#"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});

   $(window).scroll( function(){

    /* Check the location of each desired element */
    $('.chart').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){

        $('.chart').easyPieChart({
          size: 140,
          lineWidth: 6,
          lineCap: "square",
          barColor: "#ff5252",
          trackColor: "#ffffff",
          scaleColor: !1,
          easing: 'easeOutBounce',
          animate: 5000,
          onStep: function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
          }
        });

        }

    }); 

});

$(".review-car").owlCarousel({
	items:1,
	loop:true,
	nav: false,
	animateOut: 'slideOutDown',
    animateIn: 'flipInX',
	autoplay: true,
	autoplaySpeed: 1000,
	smartSpeed: 900,
	navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
});

$(".portfolio-car").owlCarousel({
	loop:true,
	nav: true,
	autoplay: true,
	autoplaySpeed: 500,
	smartSpeed: 500,
	responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1.5,
            nav:false
        }
    },
	navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
});


jQuery(".player").YTPlayer();


var $menu = $("#menu");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > ($('.main-logo').height() - 10) && $menu.hasClass("default") ){
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("default")
                           .addClass("fixed transbg")
                           .fadeIn('fast');
                });
            } else if($(this).scrollTop() <= ($('.main-logo').height() - 10) && $menu.hasClass("fixed")) {
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("fixed transbg")
                           .addClass("default")
                           .fadeIn('fast');
                });
            }
        });

$.fn.animated = function(inEffect) {
		$(this).each(function() {
			var ths = $(this);
			ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
				if (dir === "down") {
					ths.addClass(inEffect).css("opacity", "1");
				};
			}, {
				offset: "90%"
			});

		});
	};


	$(".iconbox-item").animated("zoomInUp");
	$(".work-head-title").animated("fadeInDown");
	$(".work-head-description").animated("fadeInUp");
	$(".review-block").animated("flipInX");
	$(".buis-item").animated("zoomIn");
	$(".form-control").animated("fadeInDown");

$('.menu-toggle').click(function() {
	$('.main-nav ul').slideToggle(500);
});

$(window).resize(function() {		
		if (  $(window).width() > 992 ) {			
			$('.main-nav ul').removeAttr('style');
		 }
	});

});
