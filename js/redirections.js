document.addEventListener("DOMContentLoaded", function () {
    const redirects = {
        "/home": "/#section1",
        "/portafolio": "/#portafolio",
        "/sobre-nosotros": "/#sobre-nosotros",
        "/soporte": "/#precios",
        "/basico": "/#precios",
        "/avanzado": "/#precios",
        "/personalizado": "/#precios",
        "/servicios": "/#service",
        "/habilidades": "/#habilidades",
        "/estadisticas": "/#stat",
        "/testimonios": "/#testimonials",
        "/nuestros-clientes": "/#client",
        "/contacto": "/#contact"
    };

    const currentPath = window.location.pathname;
    if (redirects[currentPath]) {
        window.location.replace(redirects[currentPath]);
    }
});
