$(function(){
    var mySwiper = new Swiper('.visual-slide', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {delay: 4000},
        speed: 1000,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })
});