// mayusculas y minusculas
let cadena= "Hola que tal, Hola que tal, hola que tal"
let input = "Acuario"
let db = "acuario"
console.log(input===db)

//toLowerCase() // toUpperCase()
console.log(input.toLowerCase());
console.log(db.toLowerCase());
console.log(input.toUpperCase());
console.log(db.toUpperCase());
console.log(input.toLowerCase()===db.toLowerCase())

// formas de concatenar dos o mas cadenas de caracteres, opcion 1
let s1 = "primera";
let s2 = "segunda";
//dentro del concat puedo concatenar lo que quiera, como simbolos y espacios
console.log(s1.concat(" ",s2));

//opcion 2(en caso de numeros se puede sumar en lugar de concatenar)
console.log(s1+" "+s2);

//opcion 3
console.log(`${s1} ${s2}`);

//como eliminar espacion al inicio y al final
let s3 = " hola tengo espacios "
console.log(s3.length)
//metodo trim()
console.log(s3.trim().length);
//solo espacios del principio
console.log(s3.trimStart().length)
//solo espacios al final
console.log(s3.trimEnd().length)


//obtener letras que hay en cierta posicion
let s4 = "Hola numero 4";
//opcion 1 charAt(posicion(la posicion siempre comienza en cero ))
console.log(s4.charAt(0));
//opcion 2 utilizarla como vector
console.log(s4[0]);

//obtener una palabra dentro de una cadena de caracteres
//para la primera coincidencia
let palabra = "Hola my name is, jejeje is";
console.log(palabra.length)
console.log(palabra.indexOf("is"))
console.log(palabra.charAt(13))
//para la ultima
console.log(palabra.lastIndexOf("is"))