


if(document.readyState == 'loadding') {
    document.addEventListener('DOMContent', start);
} else{
    start();
}


function start() {

    let btnPush = document.querySelector('.addProductCart');
    btnPush.addEventListener('click', pushProductCart);


    let close = document.querySelectorAll('.close');
    for(var i = 0; i < close.length; i++) {
        var buttonClose = close[i];
        buttonClose.addEventListener('click', closeCart);
    }

}


function pushProductCart(e) {
    let push = e.target;
    let product = push.parentElement;
    let nameProduct = product.querySelector('h3').textContent;
    let priceProduct = product.querySelector('.price').textContent;
    let imageProduct = document.querySelector('.imageProduct');
    let img = imageProduct.querySelector('img').src;
    displayCarts(nameProduct, priceProduct, img);
    // console.log(nameProduct, priceProduct, img);
}


function displayCarts(nameProduct, priceProduct, img) {
    let cartsModal = document.querySelector('.cartsModal');
    let contentProducts = cartsModal.querySelector('.contentProducts');
    var cart = document.createElement('ul');
    let contentProduct = `
        
            <li>
                <div class="image"><img src="${img}"/></div>
                <div class="close"><i class="fal fa-times"></i></div>
            </li>
            <li class="nameProduct">${nameProduct}</li>
            <li><input type="number" max="5" min="1" value="1"/></li>
            <li>${priceProduct}</li>
            <li><input type="button" value="Mua"/></li>
        
    `;
    cart.innerHTML = contentProduct;

    contentProducts.append(cart);

    cart.getElementsByClassName('close')[0].addEventListener('click', closeCart);

}



function closeCart(event) {
    var closes = event.target;
    closes.parentElement.parentElement.parentElement.remove();
    // sumToTal();
    closeNumberCart();
}

function closeNumberCart(){
    // let cartsModal = document.querySelector('.cartsModal');
    let closeNumbers = document.getElementsByClassName('close');
    let closeSpanNumber = document.getElementsByClassName('number')[0].innerText = closeNumbers.length;
}



$(document).ready(function (){
    $('.addProductCart').click(function(){
        let cartsModal = document.querySelector('.cartsModal');
        let cartItemNumber = cartsModal.querySelectorAll('.nameProduct');
        let count = 1;
        for(let i = 0; i < cartItemNumber.length; i++){
            $('.number').text(count++);
        }
        
    });
});



