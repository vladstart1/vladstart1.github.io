$(function() {

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        effect: 'flip',
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });

var owl = $('.slider');
owl.owlCarousel({
    loop:true,
    nav:true,
    items: 1,
    itemElement: 'reviews',
    navText:''
});

$('.rev-next').click(function() {
    owl.trigger('next.owl.carousel');
});
$('.rev-prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
});

$("form").submit(function () {
 var formID = $(this).attr('id');
 var formNm = $('#' + formID);
 $.ajax({
 type: "POST",
 url: 'mail.php',
 data: formNm.serialize(),
 success: function (data) {
 $(formNm).html(data);
 },
 error: function (jqXHR, text, error) {
 $(formNm).html(error);
 }
 });
 return false;
 });


});
