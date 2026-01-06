// Selecciona todos los contenedores de imágenes
const fotos = document.querySelectorAll(".foto img");

// Crea referencias al lightbox
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox img");
const closeBtn = document.querySelector(".close-lightbox");

// Abrir lightbox al hacer click en imagen
fotos.forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.classList.add("open");
        document.body.style.overflow = "hidden"; // Evita scroll del fondo
    });
});

// Cerrar lightbox con el botón
closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("open");
    document.body.style.overflow = "auto";
});

// Cerrar lightbox haciendo clic fuera de la imagen
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("open");
        document.body.style.overflow = "auto";
    }
});
