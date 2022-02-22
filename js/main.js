$(function(){
    $('.slider__inner').slick({
        prevArrow: '<button type="button" class="slider-arrow slider-arrow__prev"><img src="images/slider-prev.png" alt=""></button>',
        nextArrow: '<button type="button" class="slider-arrow slider-arrow__next"><img src="images/slider-next.png" alt=""></button>'
    })

    $('.gamburger-btn').on('click', function(){
        $('.menu__list').toggleClass('gamburger-btn--close')
    })
})