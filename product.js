
// let handlCirle = document.querySelector('')

if(document.readyState == 'loadding') {
    document.addEventListener('DOMContent', start)
} else{
    start();
    
}

function start(){
    let selects = document.querySelectorAll('.select');
    for(let i = 0; i < selects.length; i++){
        selects[i].classList.add(`selects${i+1}`);
    }

    let selectUl = document.querySelectorAll('.select ul');
    for(let i = 0; i < selectUl.length; i++){
        selectUl[i].classList.add(`selectUl${i+1}`);
    }

    let circle = document.querySelectorAll('.circle');
    for(let i = 0; i < circle.length; i++){
        circle[i].classList.add(`circle${i+1}`);
    }

    let circleLi = document.querySelectorAll('.select ul li');
    for(let i = 0; i < circleLi.length; i++){
        circleLi[i].classList.add(`circleLi${i+1}`);
    }
}

// window.onscroll = () => {
//     bar = document.remove('fa-times');
//     menu = document.remove('active');
// }

$(document).ready(() => {

    $(window).scroll(() => {
        if($(this).scrollTop() >= 150){
            $('header').css({
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
        }
    });

    let selects = document.querySelectorAll('.select');
    for(let i = 1; i <= selects.length; i++) {
        $(`.selects${i}`).click(() => {
            $(`.selectUl${i}`).slideToggle();
        });
    }

    let circleLi = document.querySelectorAll('.select ul li');
    for(let i = 0; i < circleLi.length; i++){
        $(`.circleLi${i+1}`).click(() => {
            $(`.circle${i+1}`).toggleClass('fa-check-circle fa-circle'); 
        });
    }

    $('.closeCarts').click(() => {
        $('.cartsModal').hide();
        console.log('hello')
    });

    $('.carts').click(() => {
        $('.cartsModal').show();
    });


});


