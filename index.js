if(document.readyState == 'loadding') {
    document.addEventListener('DOMContent', start)
} else{
    start();
    
}


function start() {

    let slidebtn = document.querySelectorAll('.image')
    for(let i = 0; i < slidebtn.length; i++){
        let btnClick = slidebtn[i];
        btnClick.addEventListener('click', hanldSlides)
    
    }

    let descriptionProducts = document.querySelectorAll('.description')
    for(let i = 0; i < descriptionProducts.length; i++){
        descriptionProducts[i].classList.add(`description${i+1}`)
    }

    let slideProducts = document.querySelectorAll('.slide')
    for(let i = 0; i < slideProducts.length; i++){
        slideProducts[i].classList.add(`slide${i+1}`)
    }

}


function hanldSlides(e) {
    let slide = e.target.src;
    let slideNext = slide;
    let imgShow = document.getElementById('imageShow');
    // slide = imgShow.src;
    imgShow.src = slideNext;

    // let slidetam = slide;
    // let img = document.querySelector('.imageShow img');
    // let slideHtml = img.src;
    // // let nextSlide = img;
    // slide = slideHtml;
    // slideHtml = slidetam;
    // console.log(slidetam, slideHtml, slide)
    // // showSlide.innerHTML.join('') = slide;
    // // slide = slideHtml;
    // let slidebtn = document.querySelectorAll('.image')
    // for(let i = 0; i < slidebtn.length; i++){
    //     let btnClick = slidebtn[i];
    //     btnClick.addEventListener('click', function(e) {
    //         let slide = this.src;
    //         let imgShow = document.getElementById('imageShow');
    //         // let imgSrc = imgShow.src;
    //         // imgSrc = slide;
    //         // console.log(slide, imgSrc)
    //         imgShow.src = slide;
    //     })
    // }
}



$(document).ready(function() {
    
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
    });

    $('.carts').click(() => {
        $('.cartsModal').show();
    });

    $('.bars').click(() => {
        $('.menuPhone').slideToggle();
    });

    $(window).scroll(() => {
        if($(this).scrollTop() >= 150){
            $('header').css({
                "position": "fixed",
                "top": 0,
                "right": 0,
                "left": 0,
            });
            $('.headerPhone').css({
                "position": "fixed",
                "top": 0,
                "right": 0,
                "left": 0,
            });
        }
        else{
            $('header').css({
                "position": "static",
            });
            $('.headerPhone').css({
                "position": "static",
            });
        }
        // if($(this).scrollTop() >= 170){
        //     $('.headerPhone').css({
        //         "position": "fixed",
        //         "top": "10%",
        //         "right": 0,
        //         "left": 0,
        //     });
        // }
        // else{
            // $('.headerPhone').css({
            //     "position": "static",
            // });
        // }
    });

})









