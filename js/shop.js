// JavaScript for fetching and displaying products
document.addEventListener('DOMContentLoaded', function() {
    // Sample products data
    const products = [
        { name: 'Product 1', description: 'Description of Product 1.', price: 10.00, image: 'product1.jpg' },
        { name: 'Product 2', description: 'Description of Product 2.', price: 20.00, image: 'product2.jpg' }
        // Add more products here if needed
    ];

    const productsContainer = document.getElementById('products');

    // Function to create product HTML elements
    function createProductElement(product) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        `;
        return productDiv;
    }

    // Function to render products
    function renderProducts() {
        products.forEach(product => {
            const productElement = createProductElement(product);
            productsContainer.appendChild(productElement);
        });
    }

    // Render products when the page is loaded
    renderProducts();
});
