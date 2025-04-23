const app = document.querySelector("#app");
let carrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];

// Renderizar la estructura principal de la página
function renderApp() {
    app.innerHTML = `
        <div class="contenedor-principal">
            <aside>
                <header>
                    <h1 class="logo">RemShop</h1>
                    <nav>
                        <ul>
                            <li><button class="boton-menu active" data-section="productos"><i class="bi bi-bag-heart"></i>Todos los productos</button></li>
                            <li><button class="boton-menu" data-section="carrito"><i class="bi bi-cart2"></i>Carrito</button></li>
                        </ul>
                    </nav>
                    <footer class="texto-footer">© 2025 Todos los derechos reservados</footer>
                </header>
            </aside>
            <main>
                <h2 class="titulo-principal">Todos los productos</h2>
                <div id="contenedor-productos" class="contenedor-productos"></div>
            </main>
        </div>
    `;
    cargarProductos();
}

// Cargar productos desde productos.json
function cargarProductos() {
    fetch("./Js/productos.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar los productos");
            }
            return response.json();
        })
        .then(productos => {
            const contenedorProductos = document.querySelector("#contenedor-productos");
            contenedorProductos.innerHTML = "";
            productos.forEach(producto => {
                const div = document.createElement("div");
                div.classList.add("producto");
                div.innerHTML = `
                    <img class="producto-imagen" src="${producto.img}" alt="${producto.titulo}">
                    <div class="producto-detalle">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">$${producto.precio}</p>
                        <button class="producto-agregar" data-id="${producto.id}">Agregar al carrito</button>
                    </div>
                `;
                contenedorProductos.append(div);
            });
            setupAgregarAlCarrito();
        })
        .catch(error => console.error("Error al cargar los productos:", error));
}

// Configurar botones para agregar productos al carrito
function setupAgregarAlCarrito() {
    const botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", e => {
            const idProducto = e.currentTarget.getAttribute("data-id");
            agregarAlCarrito(idProducto);
        });
    });
}

// Agregar productos al carrito
function agregarAlCarrito(idProducto) {
    fetch("./Js/productos.json")
        .then(response => response.json())
        .then(productos => {
            const producto = productos.find(p => p.id === idProducto);
            const productoEnCarrito = carrito.find(p => p.id === idProducto);

            if (productoEnCarrito) {
                productoEnCarrito.cantidad++;
            } else {
                carrito.push({ ...producto, cantidad: 1 });
            }

            localStorage.setItem("productos-en-carrito", JSON.stringify(carrito));
            alert("Producto agregado al carrito");
        });
}

// Inicializar la aplicación
renderApp();