const secciones = document.querySelectorAll("section, header, footer");
const links = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 150;

    secciones.forEach(sec => {
        if (sec.offsetTop <= scrollPos && 
            sec.offsetTop + sec.offsetHeight > scrollPos) {

            links.forEach(link => link.classList.remove("activo"));

            let id = sec.getAttribute("id");
            let linkActivo = document.querySelector(`nav ul li a[href="#${id}"]`);

            if (linkActivo) linkActivo.classList.add("activo");
        }
    });
});
