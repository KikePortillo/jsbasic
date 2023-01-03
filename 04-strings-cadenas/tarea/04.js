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


