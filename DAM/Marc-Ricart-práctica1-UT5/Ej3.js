'use strict';

function personas(nombres1, nombres2) {
    let posicion = 0;
    let coincidencias = 0;
    nombres1.forEach(nombre => {
        if (nombre == nombres2[posicion]) {
            coincidencias++;
        }
        posicion++;
    });
    if (coincidencias == nombres1.length)console.log('Todos están incluidos');
    else if (coincidencias != 0)console.log('Algunos están incluidos');
    else console.log('Ninguno está incluido');
}

personas(["Juan","Maria", "Pedro", "Samuel"], ["Juan","Maria", "Pedro", "Samuel"]);
personas(["Juan","Maria", "Pedro", "Samuel"], ["Jan","Maia", "Pero", "Samuel"]);
personas(["Juan","Maria", "Pedro", "Samuel"], ["Jun","Maia", "Pdro", "Sauel"]);