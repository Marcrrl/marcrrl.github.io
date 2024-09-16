'use strict';
function Ejercicio1(cadena, booleano, funcion, array) 
{
    if (typeof cadena !== 'string' || typeof booleano !== 'boolean' || typeof funcion !== 'function' || !Array.isArray(array)) {
        console.error('Error: Algún parámetro introducido no es correcto');
        return;}
    if (!booleano)funcion();
    let suma = 0;
    array.forEach(elemento => {
        suma += elemento;
    });
    if (suma >= 100) {
        if (cadena.includes("a")) console.error('Error: La letra a no está permitida')
        else{console.log('Muy bien, no has usado la a')}
    }
    else {console.error('Error: El resultado de tu array es insuficiente para comprobar la cadena')}
}
Ejercicio1('hola mundo', false, ()=>{alert('Se acabó el juego');}, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
Ejercicio1('hola mundo', true, ()=>{alert('Se acabó el juego');}, [1, 2, 3, 4, 5, 6, 7, 8, 90, 10]);
Ejercicio1('hole mundo', true, ()=>{alert('Se acabó el juego');}, [1, 2, 3, 4, 5, 6, 7, 8, 90, 10]);