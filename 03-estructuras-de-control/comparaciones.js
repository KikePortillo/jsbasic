//comparaciones 
//igualdad debil "==" igualdad fuerte "==="
// "==" compara solo el valor
//"===" compara el valor y el tipo 
//ejemplo
let a = 5;
let b = "6"
if (a===b){
    console.log("igualisimos");
}

if (a==b){
    console.log("iguales");
}
//recordatorio de como saber el tipo
console.log(typeof b);
// diferente debil "!="
//diferente fuerte "!=="
if (a!=b){
    console.log("valores diferentes");
}
if (a!==b){
    console.log("son de diferentes valores y tipos");
}

//comparadores mayor que, menor que, mayor o igual, menor o igual
let max = 10;
let min = 5;

if(max<min){
    console.log("menor")
}
if(max>min){
    console.log("mayor")
}
if(max>=min){
    console.log("mayor o igual")
}