document.addEventListener('DOMContentLoaded', function () {
    const products = [
        {
            name: 'water Bottles',
            description: 'descrip',
            price: 5.00,
            images: [
                'https://m.media-amazon.com/images/I/51UWBZFAqxL.jpg',
                'https://m.media-amazon.com/images/I/61+MM-t4-jL._AC_SL1500_.jpg',
                'green_image_url.jpg'
            ]
        },
        {
            name: 'Ocean Whale Surfing Desktop Ornaments',
            description: 'descrip',
            price: 10.00,
            images: [
                'https://m.media-amazon.com/images/I/616Sbff62rL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/61wsIFdGP6L._AC_SL1500_.jpg'
            ]
        },
        {
            name: 'Reusable Bamboo Drinking Straws',
            description: 'descrip',
            price: 15.00,
            images: [
                'https://m.media-amazon.com/images/I/81Juv6p9I1L._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/7180Jhr8f+L._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/71K6e+UcuIL._AC_SL1500_.jpg'
            ]
        },
        {
            name: 'SPF 50 Mineral Sunscreen Made in Maui',
            description: 'descrip',
            price: 15.00,
            images: [
                'https://m.media-amazon.com/images/I/71imSpuriKL._SL1500_.jpg'
            ]
        },
        {
            name: 'Coldest Sports Water Bottle',
            description: 'descrip',
            price: 5.00,
            images: [
                'https://m.media-amazon.com/images/I/61I0o8q8N6L._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/61pJIdn1AjL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/71bcDN0R8lL._AC_SL1500_.jpg'
            ]
        },
        {
            name: 'Thick Beach Sand Toy Shovels',
            description: 'descrip',
            price: 10.00,
            images: [
                'https://m.media-amazon.com/images/I/61LP7ZFaukL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/61ZpB99vEyL._AC_SL1500_.jpg'
            ]
        },
        {
            name: 'FlexSolar 40W Foldable Solar Panel Charger',
            description: 'descrip',
            price: 105.00,
            images: [
                'https://m.media-amazon.com/images/I/813W2pdRoXL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/81LXvx0CrVL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/71xnJCT2FnL._AC_SL1500_.jpg'
            ]
        },
        {
            name: 'Mothers Day Gifts Sea Turtle Tortoise Necklaces',
            description: 'descrip',
            price: 15.00,
            images: [
                'https://m.media-amazon.com/images/I/718jmWvRo4S._AC_SY535_.jpg',
                'https://m.media-amazon.com/images/I/81WYgsszpLS._AC_SY535_.jpg'
            ]
        },
        {
            name: 'Sea Turtle Earrings',
            description: 'descrip',
            price: 15.00,
            images: [
                'https://m.media-amazon.com/images/I/61wYr15dgKL._AC_SY535_.jpg'
            ]
        },
        {
            name: 'Sterling Silver Shark',
            description: 'descrip',
            price: 15.00,
            images: [
                'https://m.media-amazon.com/images/I/61ekCP79ofL._AC_SY535_.jpg',
                'https://m.media-amazon.com/images/I/71xaaYGSfWL._AC_SY535_.jpg'
            ]
        },
        {
            name: 'Mask Fin Snorkel Set',
            description: 'descrip',
            price: 15.00,
            images: [
                'https://m.media-amazon.com/images/I/61LJ8YD42kL.AC_UL320.jpg'
            ]
        },
        {
            name: 'UNBREAKcable Waterproof Phone Pouch',
            description: 'descrip',
            price: 15.00,
            images: [
                'https://m.media-amazon.com/images/I/719jIn6OzTL.AC_UL320.jpg'
                
            ]
        },
        {
            name: 'UNBREAKcable Waterproof Phone Pouch',
            description: 'descrip',
            price: 15.00,
            images: [
                'https://m.media-amazon.com/images/I/61PmgBikAxL.AC_UL320.jpg'
            ]
        }
    ];

    const productContainer = document.getElementById('products');
    const selectedImageBox = document.getElementById('selected-image-box');
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const clearCartBtn = document.getElementById('clear-cart');
    const checkoutBtn = document.getElementById('checkout');
    const orderSummary = document.getElementById('order-summary');
    const orderTotal = document.getElementById('order-total');
    const thankYouMessage = document.getElementById('thank-message'); // New element
    const cart = [];

    function updateCartDisplay() {
        cartContainer.innerHTML = '';
        let totalPrice = 0;
        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name} - $${item.price}</p>
            `;
            cartContainer.appendChild(cartItemDiv);
            totalPrice += parseFloat(item.price);
        });
        cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    }

    function updateOrderSummary() {
        orderSummary.innerHTML = '';
        let totalPrice = 0;
        cart.forEach(item => {
            const orderItemDiv = document.createElement('div');
            orderItemDiv.classList.add('order-item');
            orderItemDiv.innerHTML = `
                <p>${item.name} - $${item.price}</p>
            `;
            orderSummary.appendChild(orderItemDiv);
            totalPrice += parseFloat(item.price);
        });
        orderTotal.textContent = `$${totalPrice.toFixed(2)}`; // Update order total
    }

    function addToCart(index) {
        const productName = products[index].name;
        const mainImageSrc = products[index].images[0];
        const productPrice = products[index].price;
        cart.push({
            name: productName,
            image: mainImageSrc,
            price: productPrice.toFixed(2)
        });
        updateCartDisplay();
        updateOrderSummary();
    }

    function createProductElement(product, index) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <div class="card">
                <figure>
                    <img src="${product.images[0]}" alt="${product.name}" id="main-image-${index}">
                </figure>
                <section class="details">
                    <div class="min-details">
                        <h1>${product.name}</h1>
                        <h1 class="price">$${product.price.toFixed(2)}</h1>
                    </div>
                    <div class="options-images">
                        ${product.images.map((image, imgIndex) => `<img src="${image}" alt="${product.name}" onclick="selectImage(this, ${index}, ${imgIndex})">`).join('')}
                    </div>
                    <button class="btn addToCartBtn">Add to Cart</button>
                </section>
            </div>
        `;
        productDiv.querySelector('.addToCartBtn').addEventListener('click', function () {
            addToCart(index);
        });
        return productDiv;
    }

    function createProducts() {
        products.forEach((product, index) => {
            const productItem = createProductElement(product, index);
            productContainer.appendChild(productItem);
        });
    }

    createProducts();

    clearCartBtn.addEventListener('click', function () {
        cart.length = 0;
        updateCartDisplay();
        updateOrderSummary();
    });

    checkoutBtn.addEventListener('click', function () {
        document.getElementById('checkout-modal').style.display = 'block';
    });

    document.querySelector('.close').addEventListener('click', function () {
        document.getElementById('checkout-modal').style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        const modal = document.getElementById('checkout-modal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    document.getElementById('payment-form').addEventListener('submit', function (event) {
        event.preventDefault();
        document.getElementById('payment-form').style.display = 'none';
        document.getElementById('billing-address-form').style.display = 'block';
    });

    document.getElementById('billing-address-form').addEventListener('submit', function (event) {
        event.preventDefault();
        document.getElementById('billing-address-form').style.display = 'none';
        document.getElementById('contact-details-form').style.display = 'block';
    });

    document.getElementById('contact-details-form').addEventListener('submit', function (event) {
        event.preventDefault();
        document.getElementById('contact-details-form').style.display = 'none';
        document.getElementById('order-summary').style.display = 'none'; 
        document.getElementById('thank-message').style.display = 'block'; 
        updateOrderSummary(); 
    });

});
