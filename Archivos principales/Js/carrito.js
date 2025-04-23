const app = document.querySelector("#app");
let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];

const contenedorCarritoProductos = document.querySelector(".contenedor-carrito");
const botonVaciar = document.querySelector(".carrito-acciones-vaciar");
const botonComprar = document.querySelector(".carrito-acciones-comprar");

function cargarProductosCarrito() {
    contenedorCarritoProductos.innerHTML = ""; // Limpia el contenedor antes de cargar los productos

    if (productosEnCarrito.length > 0) {
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.img}" alt="${producto.titulo}">
                <div class="carrito-producto-detalles">
                    <h3>${producto.titulo}</h3>
                    <p>Precio: $${producto.precio}</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <p>Subtotal: $${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}">Eliminar</button>
            `;
            contenedorCarritoProductos.append(div);
        });

        actualizarBotonesEliminar();
    } else {
        contenedorCarritoProductos.innerHTML = `<p class="carrito-vacio">Tu carrito aún está vacío <i class="bi bi-emoji-frown"></i></p>`;
    }
}

function actualizarBotonesEliminar() {
    const botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", e => {
            const idProducto = e.currentTarget.id;
            productosEnCarrito = productosEnCarrito.filter(producto => producto.id !== idProducto);

            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
            cargarProductosCarrito();
        });
    });
}

botonVaciar.addEventListener("click", () => {
    productosEnCarrito = [];
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
});

botonComprar.addEventListener("click", () => {
    if (productosEnCarrito.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de comprar.");
        return;
    }

    alert("¡Gracias por tu compra!");
    productosEnCarrito = [];
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
});

cargarProductosCarrito();