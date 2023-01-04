//- Una cadena de texto con tu Nombre
//
//- Otra cadena de texto con tu Apellido
//
//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
//
//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
//
//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
//
//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
//
//- Una variable que contenga la primera letra del Nombre
//
//- Otra variable que contenga la última letra del Apellido
//
//- Una cadena de texto que elimine los espacios de la variable "estudiante"
//
//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

let nombre = "Luis";
let apellido = "Portillo";
let estudiante = " ";

estudiante= nombre+" "+apellido;
console.log(estudiante)
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMayus);
console.log(estudianteMinus);
let conteo= estudiante.length;
console.log(nombre.length);
console.log(apellido.length);
console.log(conteo);
let primeradenombre = nombre.charAt(0);
console.log(primeradenombre)
let ultimadeapellido = apellido.charAt(7);
console.log(ultimadeapellido);
let sinespacio = estudiante.replace(" ", "");
console.log(sinespacio);
let fov = false;

if (estudiante.match(`${nombre}`)){
    fov=true;
    console.log(fov);
}else{
    fov=false;
    console.log(fov);
}


