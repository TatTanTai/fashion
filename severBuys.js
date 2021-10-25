
var swiper = new Swiper(".contentSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 50,
    loop:true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
        200: {
          slidesPerView: 1,
        },
        400: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 4,
        },
    },
  });



if(document.readyState == 'loadding') {
    document.addEventListener('DOMContent', start)
} else{
    start();
}


function start() {
  let slideProducts = document.querySelectorAll('.slide')
    for(let i = 0; i < slideProducts.length; i++){
        slideProducts[i].classList.add(`slide${i+1}`)
  }

  let descriptionProducts = document.querySelectorAll('.description')
    for(let i = 0; i < descriptionProducts.length; i++){
        descriptionProducts[i].classList.add(`description${i+1}`)
    }

}

console.log('hello')


$(document).ready(() => {
  let slideProduct = document.querySelectorAll('.slide');
    for(let i = 1; i <= slideProduct.length; i++){
        $('.slide' + i).mouseenter(function() {
            $('.description' + i).slideDown();
        });
        $('.slide' + i).mouseleave(function() {
            $('.description' + i).slideUp();
        });
  }

  $('.closeCarts').click(() => {
    $('.cartsModal').hide();
      console.log('hello')
  });

  $('.carts').click(() => {
    $('.cartsModal').show();
  });

  $(window).scroll(() => {
    if($(this).scrollTop() >= 150){
        $('header').css({
            "position": "fixed",
            "top": 0,
            "right": 0,
            "left": 0,
            "border-bottom": "1px solid black",
        });
    }
    else{
        $('header').css({
            "position": "static",
            "border-bottom": "none",
        });
    }
  });
})



