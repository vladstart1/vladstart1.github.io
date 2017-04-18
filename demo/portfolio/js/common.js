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


        var $menu = $(".menu");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > ($('.main-head').outerHeight()-100) && $menu.hasClass("default") ){
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("default")
                           .addClass("fixed")
                           .fadeIn('fast');
                });
            } else if($(this).scrollTop() <= ($('.main-head').outerHeight()-100) && $menu.hasClass("fixed")) {
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("fixed")
                           .addClass("default")
                           .fadeIn('fast');
                });
            } else if($(window).width() <= '768') {
              
                    $menu.removeClass("fixed")
                           .removeClass("default");
            }
        });//scroll

$(".menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

$("#my-menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

$("#my-menu").mmenu({
               "slidingSubmenus": false,
               "extensions": [
                  "pagedim-black"
               ],
               "navbars": [
                  {
                     "position": "bottom",
                     "content": [
                        "<a class='fa fa-envelope' href='#/'></a>",
                        "<a class='fa fa-twitter' href='#/'></a>",
                        "<a class='fa fa-facebook' href='#/'></a>"
                     ]
                  }
               ]
            });

$(".mobile-menu").click(function() {
	var mmAPI = $("#my-menu").data( "mmenu" );
	mmAPI.open();
  var thiss = $(this).find(".toggle-mnu");
  $(this).toggleClass("on");
  $(".main-mnu").slideToggle();
  return false;
});


});
