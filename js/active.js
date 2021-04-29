$('.nav__section-button').on('click',function(e){
    e.preventDefault;
    $('.nav__section-button').toggleClass('nav__section-button_active');
    $('.sub-menu__burger-menu').toggleClass('sub-menu__burger-menu_active');

});
$('.sale__close').on('click',function(e){
    e.preventDefault;
    $('.sale').toggleClass('sale_active');
});
