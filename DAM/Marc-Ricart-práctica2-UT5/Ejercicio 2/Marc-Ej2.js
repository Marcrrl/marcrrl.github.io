'use strict';
let mensajesMostrados = [];
function gestionarFicheroTXT(textoTXT) {
    let contenedor = document.getElementById('mensajeDiv');
    let mensajes = textoTXT.trim().split('\n');
    let nuevosMensajes = mensajes.filter(mensaje => !mensajesMostrados.includes(mensaje));

    nuevosMensajes.forEach((elemento) => {
        let elementoMensaje = document.createElement('div');
        let icono = document.createElement('i');
        icono.className = 'fa-solid fa-check-double check';
        elementoMensaje.textContent = elemento.slice(1, elemento.length).trim();
        elementoMensaje.appendChild(icono);
        elementoMensaje.className = elemento.slice(0, 1) === 'r' ? 'derecha' : 'izquierda';
        contenedor.appendChild(elementoMensaje);
    });
    mensajesMostrados = mensajesMostrados.concat(nuevosMensajes);
    contenedor.scrollTo(0, 999999);
}

loadLDocA('wasap.txt');

setInterval(function () {
    loadLDocA('wasap.txt');
}, 10000);

function loadLDocA(fichero) {
    let http = new XMLHttpRequest();
    http.open("GET", fichero, true);
    http.send();
    http.addEventListener('load', (event) => {
        if (http.status === 200) {
            if (fichero.split(".")[1] == "xml") {
                gestionarFicheroXML(http.responseXML);
            } else {
                gestionarFicheroTXT(http.responseText);
            }
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    var boton = document.querySelector('.boton');
    var input = document.querySelector('.introducir');

    function agregarMensaje() {
        var mensajeNuevo = document.createElement('div');
        mensajeNuevo.textContent = input.value;
        document.getElementById('mensajeDiv').appendChild(mensajeNuevo);
        mensajeNuevo.className = 'derecha';
        let icono = document.createElement('i');
        icono.className = 'fa-solid fa-check-double check';
        mensajeNuevo.appendChild(icono);
        input.value = '';
        document.getElementById('mensajeDiv').scrollTo(0,99999);
    }
    boton.addEventListener('click', agregarMensaje);
    input.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            agregarMensaje();
        }
    });
});
