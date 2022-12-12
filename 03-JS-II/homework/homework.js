// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if ( x > y ) {    return x;    }
  else {if( x < y ) {return y } else return x };  
  }

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (edad >= 18) {return "Allowed"} else return "Not allowed";
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
switch (status) {
  case 1: return "Online";
  case 2: return "Away";
  default: return "Offline";  
}
  
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  switch (idioma ) {
    case "aleman": return "Guten Tag!";
    case "mandarin": return "Ni Hao!";
    case "ingles": return "Hello!";
    default: return "Hola!";  
  }
  return "Hola!";
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  pre = "This is ";
  switch (color) {    
    case "blue": return pre + "blue";
    case "red": return pre + "red";
    case "green": return pre + "green";
    case "orange": return pre + "orange";
    default: return "Color not found";  
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  n=numero;

  //if ( n === 5 | n === 10) {return true;} else {return false;};     //anda
  //return n === 5 | n === 10      //MEJOR SOLUCION: SIMPLEZA

  switch (n) {
  case (10): return true;    //anda
  case (5): return true;    //anda

    default: return false ;  
  }

}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  n=numero;

    if ( ( n > 20 ) && ( n < 50) ) {return true;} else {return false;};

}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  // if (Number.isInteger(numero)) return true; else return false;   //funciona
  // return Number.isInteger(numero)  // funciona
  return numero % 1 === 0 // funciona y es GENIAL
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  n = numero;

  if ( n % 3 === 0 && n % 5 === 0 ) return "fizzbuzz"; // OJO TRAMPA EN EL ORDEN........
  if ( n % 3 === 0 ) return "fizz";
  if ( n % 5 === 0 ) return "buzz";
  
  return n;
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  n1=num1; n2=num2; n3=num3;



if ( n1 < 0 || n2 < 0 || n3 < 0 ) return "Hay negativos";
if ( n1 === 0 || n2 === 0 || n3 === 0 ) return "Error";  // OJO TRAMPA EN EL ORDEN........

if ( n1 > n2 && n1 > n3 && n1 > 0 ) return "Número 1 es mayor y positivo";
if ( n3 > n1 && n3 > n2 ) return (n3 + 1);

return false; // si llego acá es xq ninguna condición anterior se cumplió y no retornaron

}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  // Google: Los 25 primeros números primos son 2, 3, 5, 7, 11, 13, 17, 19,
  //     23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 y 97
  // Para saber si un número es primo o compuesto basta con dividirlo por
  // los números primos menores que él hasta llegar a un cociente igual o menor que el divisor. 
  // Si ninguna de estas divisiones es exacta, el número es primo. 
  // Si alguna de las divisiones es exacta el número es compuesto y podemos interrumpir el proceso.
  for ( var k = 2; k < numero; k++)  {  if ((numero % k) === 0 )  return false;  }
  if (numero===0 )  return false;
  if (numero===1)  return false;

  return true;
  
}
function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor === true) return "Soy verdadero"; else return "Soy falso";

}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí  
  var array = new Array(11).fill(0); // FUNCIONA TAMBIEN
  var arrayMultiplos =  array.map(   ( e, index ) => index * 6   );  
  return arrayMultiplos;
  /* FUNCIONA
  let  array=[];
  for (i = 0;  i < 1000; i++ ) {
    if ( ( i*6 ) <= 60 ) { array.push( i*6 ); console.log(i*6);} else break;
  }
  return array;    FUNCIONA */
}


function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  let texto = numero.toString();   // toString() es metodo lleva ()
  largo = texto.length;           // length es propiedad no lleva () no es metodo.
  if (largo === 3) return true; else return false;
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var i = 1;
  while ( i <= 8 ) {
    numero = numero + 5;
    i++
  }
return numero;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
