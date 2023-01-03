// metodos de cadenad de texto 
//https://regxr.com mas contenido sobre expresiones regulares


let texto_largo = "hola que tal, hola nos vimos, jeje hola .";


console.log(texto_largo.match(/hola/g));

//includes trae V o F si detecta que existe esa palabra o letra dentro de una cadena
//existe la palabra dentro del texto?

console.log(texto_largo.includes('vimos'));


//saber si un texto comienza por una palabra 


console.log(texto_largo.startsWith("hola"))
//saber si termina por una palabra
console.log(texto_largo.endsWith("."))