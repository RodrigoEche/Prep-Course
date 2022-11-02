// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  matriz = [];
  for (let clave in objeto) {
    let par = [ clave, objeto[clave] ];
    matriz.push(par);    
  };

  return matriz;
} 
// paso 1 de 8


function numberOfCharacters(string) {
    //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
    //en formato par clave-valor.
    //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
    //Escribe tu código aquí
    alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z '];
    //string = "adsjfdsfsfjsdjfhacabcsbajda"
    
    objeto = {};
    for (i = 0; i < alfabeto.length; i++) {
        repeticion = 0;
        for (j = 0; j < string.length; j++) {
            if (alfabeto[i] === string[j]) {repeticion++;}
        }
        //agrega la propiedad y el valor solo si existe el caracter es decir repetición tomó un valor distinto de 0
        if (repeticion != 0) {objeto[alfabeto[i]] = repeticion;}
    }        
    //retorna el objeto con la estadística de caracteres
    return objeto ;
} //PASÓ EL TEST 2 DE 8

//..............................................................................
function esMayuscula(caracter){
  /* 0: no es mayuscula   1: es mayuscula   2: otro caracter
  usada por function capToFront(s)*/
  const codigo = caracter.charCodeAt(0);
  if (codigo >= 65 && codigo <= 90) return true;
  if (codigo >= 97 && codigo <= 122) return false; else return 2; //tercer estado qubit
}
//..............................................................................
 function string2array(cadena){
  /* usada por function capToFront(s) */
  array = cadena.split('');
  return array;
}
 //..............................................................................

 function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  //convierto la cadena a Array de caracteres. CREO QUE NO ES NECESARIO
  array = string2array(s);

  //rellenar nuevo array con mayusculas solamente y en orden
  //rellenar otro array con minusculas solamente
  //unir array mayusculas luego array minusculas
  arrayMayusculas = []; arrayMinusculas = [];

  for (i = 0; i< s.length; i++ ){
    if (esMayuscula(array[i]) ) {arrayMayusculas.push(array[i]); } else {arrayMinusculas.push(array[i]); }
  }
  
  arrayFinal = arrayMayusculas;
  for (i = 0; i< arrayMinusculas.length; i++ )   arrayFinal.push(arrayMinusculas[i]);

  cadenaFinal = arrayFinal.reduce( (ac, elem) => {return ac + elem;})

  return cadenaFinal; //////////////////////////////////////////////////////////////
} //PASÓ EL TEST 3 DE 8   ME COSTÓ MUCHISIMMO!!!
////////////////////////////////////////////////////////////////////////////////////

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  array1 = []; 
  array2 = [];

  array1 = str.split(' ');    
  //array1 = [ 'The', 'Henry', 'Challenge', 'is', 'close!' ]
  
  for (i = 0; i< array1.length; i++ ){ 
      palabra = array1[i]; 
      // palabra = 'The'
      arbalap = '';
      for (j = 0; j< palabra.length; j++ ){ arbalap = arbalap + palabra[palabra.length-j-1];     }        
      // arbalap = 'ehT'

      array2.push( arbalap);
  }
  // array2 = [ 'ehT', 'yrneH', 'egnellahC', 'si', '!esolc' ]

  cadenaFinal = array2.reduce( (ac, elem) => {return ac + ' ' + elem;})
  // cadenaFinal = 'ehT yrneH egnellahC si !esolc'

  return cadenaFinal;
} 
//PASÓ EL TEST 4 DE 8   NO ME COSTÓ MUCHO TIPO 30 MIN!!!

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

