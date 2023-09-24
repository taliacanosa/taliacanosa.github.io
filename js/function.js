// BOTON ENVIAR

function myFunction() {
    document.getElementById("demo").innerHTML = "Tu mensaje ha sido enviado con éxito ";
}


// CAMBIAR COLOR ENLACE VISITADO

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            link.style.color = "var(--visited)"; 
        });
    });
});