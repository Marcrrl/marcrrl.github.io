'use strict';

function verAsignaturas(...persona) {
    if (persona.length == 0) {
        console.log('No hay datos para mostrar')}
    else persona.forEach(alumno => {
        console.log(alumno[0] + "-" + alumno[1] + "-asignaturas:" + alumno.splice(2).join("/"))
    });}
verAsignaturas(["Marcos","DAMA","Programación","ED","LM","BBDD"]);
verAsignaturas(["Roberto","DAMB","SIN","LM","BBDD"]);
verAsignaturas();