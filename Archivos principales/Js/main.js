const productos = [
    { id: "remera1", titulo: "Remera 1", img: "../imagenes/12005113195_1.jpg.webp", precio: 5500 },
    { id: "remera2", titulo: "Remera 2", img: "../imagenes/11249099121_2.jpg", precio: 4500 },
    { id: "remera3", titulo: "Remera 3", img: "../imagenes/11003601101134_3.jpg", precio: 4500 },
    { id: "remera4", titulo: "Remera 4", img: "../imagenes/12245132199100_4.jpg", precio: 4500 },
    { id: "remera5", titulo: "Remera 5", img: "../imagenes/12255824191_5.jpg", precio: 5500 },
    { id: "remera6", titulo: "Remera 6", img: "../imagenes/12255824191100_6.jpg", precio: 6500 },
    { id: "remera7", titulo: "Remera 7", img: "../imagenes/11249613102_7.jpg", precio: 6500 },
    { id: "remera8", titulo: "Remera 8", img: "../imagenes/11239225156_8.jpg", precio: 6500 },
    { id: "remera9", titulo: "Remera 9", img: "../imagenes/11239225170101_9.jpg", precio: 4500 },
    { id: "remera10", titulo: "Remera 10", img: "../imagenes/120051131011_10.jpg", precio: 5000 }
];

let carrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {
    contenedorProductos.innerHTML = ""; // Limpia el contenedor antes de cargar los productos
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.img}" alt="${producto.titulo}">
            <div class="producto-detalle">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    });

    actualizarBotonesAgregar();
}

function actualizarBotonesAgregar() {
    const botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

function agregarAlCarrito(e) {
    const idProducto = e.currentTarget.id;
    const producto = productos.find(p => p.id === idProducto);

    const productoEnCarrito = carrito.find(p => p.id === idProducto);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem("productos-en-carrito", JSON.stringify(carrito));
    alert(`Producto "${producto.titulo}" agregado al carrito.`);
}

cargarProductos();