const productsAPi = "  http://localhost:3000/products";

function start() {
    let addCart = document.querySelectorAll('.addCarts');
    for(let i = 0; i < addCart.length; i++){
        addCart[i].classList.add(`cart${i+1}`)
    }
    let products = document.querySelectorAll('.product');
    for(let i = 0; i < products.length; i++){
        products[i].classList.add(`product${i+1}`)
    }

    getCarts(showCarts);

    // closeCartss(id);

    handlCreate();
}

start();


function getCarts(callback) {
    fetch(productsAPi)
        .then(function(res) {
            return res.json();
        })
        .then(callback);
}

function closeCarts(id) {
    let option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(productsAPi + '/' + id, option) 
        .then(function(res){
            res.json();
        })
        .then(function() {
            let close = document.querySelector('.ul' + id);
            if(close){
                close.remove();
            }
        });
}



function pushCarts(data, callback) {
    let opsion = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(productsAPi,opsion) 
        .then(function(res){
            res.json();
        })
        .then(callback);
}


function showCarts(carts) {
    let contentCart = document.querySelector('.contentProducts');
    let htmlCarts = carts.map((cart) => {
        return `
            <ul class="ul${cart.id}">
                <li>
                    <div class="image"><img src="${cart.img}"/></div>
                    <div class="close" onclick="closeCarts(${cart.id})"><i class="fal fa-times"></i></div>
                </li>
                <li>${cart.name}</li>
                <li><input type="number" max="5" min="1" value="1"/></li>
                <li>${cart.price}</li>
                <li><input type="button" value="Mua"/></li>
            </ul>
        `
    });
    contentCart.innerHTML = htmlCarts.join('');
}


function handlCreate(){
    let addCart = document.querySelectorAll('.addCarts');
    for(let i = 0; i < addCart.length; i++){
        let btnPush = document.querySelector(`.cart${i+1}`);
        btnPush.onclick = function() {
            let product = document.querySelector(`.product${i+1}`);
            let nameProduct = product.querySelector('h3').textContent;
            let priceProduct = product.querySelector('p').textContent;
            let handlPrice = parseInt(priceProduct.replace('đ', ''));
            let imgProduct = product.querySelector('img').src;
            let formData = {
                name: nameProduct,
                price: priceProduct,
                priceMath: handlPrice,
                img: imgProduct,
            }
            pushCarts(formData, function() {
                getCarts(showCarts);
            });
            closeCarts(id);
        }
    }
}