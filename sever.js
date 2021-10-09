const buysApi = "http://localhost:3000/buyProducts";

const productsApi = "http://localhost:3000/products";



function start() {
    hanldProducts();
}

start();



function pushProduct(data, callback) {
    let opsion = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(buysApi, opsion)
        .then((res) => {
            res.json();
        })
        .then(callback);
}

function hanldProducts() {
    let addCart = document.querySelectorAll('.addCarts');
    for(let i = 0; i < addCart.length; i++){
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
        pushProduct(formData);
    }
}
