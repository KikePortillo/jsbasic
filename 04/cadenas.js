//metodos mas utilizados en cadenas de caracteres
//obtener la longitud(lenght)
let str = "hola que tal soy un string";

//length sirve para medir el tamaño de la variable

console.log(str.length);

//obtener partes de cadenas de caracteres
//slice() substring() substr

let slice_str = str.slice(0,10);
console.log(slice_str);
let substring_str = str.substring(0,4);
console.log(substring_str);
let substr = str.substr(0,26);
console.log(substr);


//Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es kike";
console.log(cadena);
// al utilizar string solo reemplaza la primera que encuentra
console.log(cadena.replace('kike', 'Luis'));

let muchotexto = "hola que tal hola que tal hola que tal hola que tal"

console.log(muchotexto.replace('hola','cinco'));

// al utilizar la expresion regular /g, reemplaza todas las coincidencias
// ejemplo
console.log(muchotexto.replace(/hola/g,'cinco'));