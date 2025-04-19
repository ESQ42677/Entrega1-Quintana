document.addEventListener("DOMContentLoaded", () => {
    // Bienvenida
    console.log("Bienvenido a RemShop! Navega por nuestro sitio y descubre nuestras remeras.");

    // Slider automático
    const slider = document.querySelector("#slider");
    let scrollAmount = 0;

    setInterval(() => {
        scrollAmount += 300;
        if (scrollAmount >= slider.scrollWidth) {
            scrollAmount = 0;
        }
        slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }, 3000);

    // Barra de búsqueda
    const busqueda = document.querySelector("#busqueda");
    busqueda.addEventListener("input", (e) => {
        console.log(`Buscando: ${e.target.value}`);
    });
});