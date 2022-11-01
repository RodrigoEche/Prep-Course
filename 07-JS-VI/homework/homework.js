// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

  /* solución mía anduvo, pruebo la de los profesores */
  let primerCarEnMayuscula  = String(nombre[0]).toUpperCase();
  let siguientesCar         = String(nombre).substring(1);

  return primerCarEnMayuscula + siguientesCar; 

  //return nombre[0].toUpperCase() + nombre.slice(1); //solución Henry

} //pasó 1 de 7


function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
 cb();
} //pasó 2 de 7

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:

  return cb( n1, n2 );
} // pasó 3 de 7

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

// forma de funcion Callbak
function sumar(acc,elemento) {return acc + elemento;}
cb(numeros.reduce(sumar )); //pasó el test

/* solución con funcion anónima inline
cb(numeros.reduce(function (acc,elemento) {return acc + elemento;} )); //RARISIMO....pero pasó el test

// solución con función arrow
cb(numeros.reduce((acc,elemento) => {return acc + elemento;} )); // pasó el test */

} // pasó 4 de 7

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  function miaFuncione(elemento,indice) { cb(elemento); };
  array.forEach(miaFuncione);
} // sorprendentemente me pasó 5 de 7 Vamoooos!!!

function map(array, cb) {
  // Crea un nuevo array (OK)
  // Itera sobre cada valor en "array"(OK), pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:   ------------------>>>>> ME COSTÓ MUCHISIMO interpretar "pásalo a cb" etc
nuevo = [];
nuevo = array.map( (elemento,indice) => { return cb(elemento) }  ); 
return nuevo;
}   // PASÓ EL TEST 7 DE 7

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:  
  
    // Solución clásica bucle For(): PASÓ EL TEST
      var nuevo = [];
      for (let i = 0; i < array.length; i++){  if ( array[i][0] === 'a') nuevo.push(array[i]);     }      

   //Solución con función Callback: PASÓ EL TEST 
    var nuevo = [];
    function procesar(elemento,indice,arreglo) {  if (elemento[0] === 'a')   nuevo.push(elemento );  }
    array.forEach( procesar );
    return nuevo; 

    //Solución con función Arrow: PASÓ EL TEST
    var nuevo = [];
    array.forEach(elem => {  if ( elem[0] === 'a') nuevo.push( elem )  });
    return nuevo; 
   
    // Solución con función Inline anónima: PASÓ EL TEST 
   var nuevo = [];
    array.forEach( function (elemento) { if (elemento[0] === 'a')   nuevo.push(elemento );} );
    return nuevo;

} // PASÓ EL TEST 6 DE 7

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
