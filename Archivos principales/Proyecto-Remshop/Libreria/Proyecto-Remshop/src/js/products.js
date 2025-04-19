// File: /Proyecto-Remshop/Proyecto-Remshop/src/js/products.js

const products = [
    {
        id: 1,
        name: "Camiseta Estilo 1",
        price: 19.99,
        image: "./images/camiseta1.jpg",
        description: "Camiseta de alta calidad con diseño moderno."
    },
    {
        id: 2,
        name: "Camiseta Estilo 2",
        price: 24.99,
        image: "./images/camiseta2.jpg",
        description: "Camiseta cómoda y elegante para cualquier ocasión."
    },
    {
        id: 3,
        name: "Sudadera Estilo 1",
        price: 39.99,
        image: "./images/sudadera1.jpg",
        description: "Sudadera suave y cálida, perfecta para el invierno."
    },
    {
        id: 4,
        name: "Pantalones Estilo 1",
        price: 34.99,
        image: "./images/pantalones1.jpg",
        description: "Pantalones de corte moderno y material duradero."
    }
];

function displayProducts() {
    const productContainer = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Precio: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
        `;
        productContainer.appendChild(productCard);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Assuming there's a function in cart.js to handle adding items to the cart
        Cart.addItem(product);
        alert(`${product.name} ha sido agregado al carrito.`);
    }
}

document.addEventListener('DOMContentLoaded', displayProducts);