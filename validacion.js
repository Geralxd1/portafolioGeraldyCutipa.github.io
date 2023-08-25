document.addEventListener("DOMContentLoaded", function() {
    const botonDescargar = document.getElementById("descargar-cv");
    const rutaPDF = "assets/prueba.pdf";  // Reemplaza con la ruta correcta al archivo PDF

    botonDescargar.addEventListener("click", function() {
        window.location.href = rutaPDF;
    });
});