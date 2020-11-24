$('.section8-slider').owlCarousel({

    loop:true,
    autoplay : true,
    margin:0,
    nav:false,
    dots: true,
    dotsData: true,
    responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
}
});

$('.open-menu-mobie').click(function(){
    $('.fixed-mobie').show();
    $('.menu-mobie-content').show(400);
    $('.header__logo-close-mobie').show();
});
$('.fixed-mobie').click(function(){
    $('.fixed-mobie').hide();
    $('.menu-mobie-content').hide(300);
    $('.header__logo-close-mobie').hide();
});
$('.header__logo-close-mobie').click(function(){
    $('.fixed-mobie').hide();
    $('.menu-mobie-content').hide(300);
    $('.header__logo-close-mobie').hide();
});
$('.item-drop-right').click(function(){
    $(this).find('.menu-mobie-drop').toggle();
    $(this).find('.menu-mobie-up').toggle();
    $(this).parent().parent().find('.header_menumobie-child').toggle(200);
})
