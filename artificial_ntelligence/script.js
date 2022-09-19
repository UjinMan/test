$('#burger').click(function(){
    $('.header__nav').slideToggle().toggleClass('open');
    $('.header__nav').hasClass('open') ? $(this).html('&#10006;') : $(this).html('&equiv;');
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel(); 
});

$('.owl-carousel').owlCarousel({
	loop: true,
    nav: true,
	center: true,
	items: 3,
	margin: 0,
	dots: true,
	autoplay: true,
    autoplayTimeout: 3000,
	smartSpeed: 450,
	responsive: {
		0: {
			items: 1
		},
		800: {
			items: 3
		}
	}
});