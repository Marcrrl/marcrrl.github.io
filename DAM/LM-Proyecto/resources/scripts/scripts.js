document.querySelector(".abre-nav-tablet").addEventListener("click", openNavTablet);
document.querySelector(".abre-nav-movil").addEventListener("click", openNavMovil);

document.querySelector(".cierra-nav").addEventListener("click", closeNav);


function openNavTablet() {
    document.getElementById("botones").style.width = "35vw";
    document.getElementById("espacio-blanco").style.display = "block";
}
function openNavMovil() {
    document.getElementById("botones").style.width = "75vw";
    document.getElementById("espacio-blanco").style.display = "block";
}

function closeNav() {
    document.getElementById("botones").style.width = "0";
    document.getElementById("espacio-blanco").style.display = "none";
}