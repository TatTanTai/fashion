if(document.readyState == 'loadding') {
    document.addEventListener('DOMContent', start);
} else{
    start();
    // numberCart();
}


function start() {


    let slideProducts = document.querySelectorAll('.addCarts');



    for(let i = 0; i < slideProducts.length; i++) {
        let btnPushCarts = slideProducts[i];
        btnPushCarts.classList.add(`addCart${i+1}`);
        btnPushCarts.addEventListener('click', pushCarts);
    }

    let close = document.querySelectorAll('.close');
    for(var i = 0; i < close.length; i++) {
        var buttonClose = close[i];
        buttonClose.addEventListener('click', closeCart);
    }


}




function pushCarts(e) {
    // let arrayCarts = [];
    let carts = e.target;

    let slideProduct = carts.parentElement.parentElement;
    let nameProduct = slideProduct.querySelector('h3').textContent;
    let priceProduct = slideProduct.querySelector('p:last-child').textContent;
    // let handlPrice = priceProduct.replace('đ', '');
    let imgProduct = slideProduct.querySelector('img').src;
    // let formData = {
    //     name: nameProduct,
    //     price: priceProduct,
    //     img: imgProduct,
    // }
    // arrayCarts.push(formData);
    displayCarts(nameProduct, priceProduct, imgProduct);
    // numberCart();
}

// console.log(arrayCarts);

function displayCarts(nameProduct, priceProduct, imgProduct) {
    let cartsModal = document.querySelector('.cartsModal');
    let contentProducts = cartsModal.querySelector('.contentProducts');
    var cart = document.createElement('ul');
    let contentProduct = `
        
            <li>
                <div class="image"><img src="${imgProduct}"/></div>
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
    $('.addCarts').click(function(){
        let cartsModal = document.querySelector('.cartsModal');
        let cartItemNumber = cartsModal.querySelectorAll('.nameProduct');
        let count = 1;
        for(let i = 0; i < cartItemNumber.length; i++){
            $('.number').text(count++);
        }
        
    });
});



