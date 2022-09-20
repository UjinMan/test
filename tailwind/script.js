$('#burger').click(function(){
    $('.nav').slideToggle().toggleClass('open');
    $('.nav').hasClass('open') ? $(this).html('&#10006;') : $(this).html('&equiv;');
});

$('.header__video a').click(function(event){
    event.preventDefault();
    var videoSrc = $(this).attr('id');
    $('.modal').html('<iframe width="854" height="480" src="'+videoSrc+'"></iframe>');
// далее показываете модалку
});