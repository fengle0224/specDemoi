$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        speed:300,
        autoplay : {
            delay:3000
          },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })        
})