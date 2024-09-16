'use strict';

function alumnos(alumno) {
    for (let i = 0; i < alumno.length; i++) {
        let curso = prompt(`¿De qué curso es ${alumno[i].nombre}?`);
        let asignaturas = prompt(`¿Qué asignaturas cursa ${alumno[i].nombre}?`);
        alumno[i].curso = curso;
        alumno[i].asignaturas = asignaturas.split('-');
    }
    console.log(alumno);
}

alumnos([
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Pedro', edad: 40 }
]);