const nombres1 = "Bienvenidos a Remshop";
console.log(nombres1);
console.log('Gracias por tu tiempo!');

let opcionIngresado = prompt("Bienvenido/a a nuestra tienda RemShop!, ¿Es tu primera vez en RemShop?");
let Ingresar = prompt("Ingresa tu nombre");
let edad = parseInt(prompt("Ingresa tu edad"));
if (edad === 17) {
    console.log('la condición es verdadera');
}
let opcionConfirmar = confirm("Gracias por tus respuestas");
//Ciclos
if (edad >= 17) {
    console.log('la condición es verdadera');
} else {
    console.log('Como no es mayor, recomendamos limite su entrada al sitio web');
}
const productos = [
    { id: 1, nombre: 'Producto 1', precio: 19.99 },
    { id: 2, nombre: 'Producto 2', precio: 21.99 },
    { id: 3, nombre: 'Producto 3', precio: 15.99 },
    { id: 4, nombre: 'Producto 4', precio: 18.99 },
    { id: 5, nombre: 'Producto 5', precio: 22.99 },
    { id: 6, nombre: 'Producto 6', precio: 16.99 },
];

let carrito = [];

function agregarAlCarrito(productId) {
    const producto = productos.find(p => p.id === productId);
    carrito.push(producto);
    alert(`Producto "${producto.nombre}" agregado al carrito!`);
    console.log(`Producto agregado:`, producto);
    console.log(`Carrito actual:`, carrito);
}

function verCarrito() {
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
    } else {
        let carritoContenido = 'Carrito de Compras:\n';
        carrito.forEach(producto => {
            carritoContenido += `- ${producto.nombre}: $${producto.precio}\n`;
        });
        alert(carritoContenido);
    }
}

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    console.log('Página cargada completamente');
});