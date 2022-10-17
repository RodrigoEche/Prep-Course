// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for ( i = 0; i < array.length; i++) {array[i]=array[i]+1;}
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:  
  array.push(elemento); 
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento); 
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var arrayNuevo= [];
  arrayNuevo[0] = palabras[0];

  for ( i = 1; i < palabras.length; i++) {
    arrayNuevo.push(' ');
    arrayNuevo.push(palabras[i]);  }

  var cadena = '';
  for ( i = 0; i < arrayNuevo.length; i++)  cadena = cadena + arrayNuevo[i];   

  return cadena;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for ( i = 0; i < array.length; i++){
    if (elemento === array[i] ) return true; 
  }
  return false;  
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma =0;
  for (i = 0; i < numeros.length; i++) suma = suma + numeros[i];
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  function mostrar(msg) {console.log(msg);};

  var n  = resultadosTest.length;  
  var suma = 0;
  var promedio = 0;

  for (i = 0; i < n ; i++ ) {	
      ai = resultadosTest[i]; mostrar(ai);
      suma = suma + ai;
      mostrar(' ');
  }

  mostrar(' suma: ' + suma);
  mostrar(' n:    ' + n);

  promedio = suma / n; 
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  function mostrar(msg) {console.log(msg);};

  var n  = numeros.length;  
  var mayor = numeros[0];
  
  for (i = 1; i < n ; i++ ) {	
      valor  = numeros[i]; 
      if (mayor < valor ) mayor = valor;      
  }

  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  n = arguments.length;
  if ( n === 0) {return 0;} else {
    producto = arguments[0];
    for(i = 1; i < n; i++) {    producto = producto * arguments[i];}
    return producto;
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  n = arreglo.length;
  contador = 0; 
  for (i = 0; i < n; i++ ) { 
      valor = arreglo[i];
      if ( valor > 18 ) contador = contador + 1;
  }

  return contador; 
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
    codigo  = [1, 2,  3,  4,  5,  6,  7];
  //dia     = [d, l,  m,  x,  j,  v,  s];
    queEs   = [0, 1,  1,  1,  1,  1,  0];
    dia2     = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

  i = codigo.indexOf(numeroDeDia);
  var laboral = queEs[i];

  /*las comillas de mi teclado no eran iguales a la del test y no me daba 
  copie lo esperado en el test y ahí me dio */
  if (laboral == 0) {return "Es fin de semana"; } else {return "Es dia Laboral";}                                                                
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var s = n.toString();       // OJO NO USAR s = Number.toString(n); es cualquier cosa
  if (s[0] === '9' ) return true; else return false;
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  n = arreglo.length;
  valor = arreglo[0] ; 

  for (i = 1; i < n; i++ ) {       
      if ( valor !== arreglo[i] ) return false; else return true;
  }
 
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
n = array.length;
nuevoArray = [];
mesBuscado = ["Marzo", "Noviembre", "Enero"];

for ( k = 0; k < 3; k++ ) {
indice = array.indexOf(mesBuscado[k]);
mes = array[indice];
if ( indice !== -1) nuevoArray.push(mes); else return "No se encontraron los meses pedidos";

}

return nuevoArray;

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  n = array.length;
  nuevoArray = [];
  
  for (i = 0; i < n; i++ ) {       
    valor = array[i] ;
    if ( valor > 100 ) nuevoArray.push(valor);
  }
 return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  n = numero;
  nuevoArray = [];   

  for (i = 0; i < 10; i++ ) {       
    n  = n + 2;
    if (n != i+1) nuevoArray.push(n); else return "Se interrumpió la ejecución";
  }
 return nuevoArray;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  n = numero;
  nuevoArray = [];   

  for (i = 0; i < 10; i++ ) {       
    
    if (5 != i+1) n  = n + 2; else {n = n; continue;}
    nuevoArray.push(n);
  }
 return nuevoArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
