//formas de declarar variables
var a = 1;
console.log(a);
a=5;
console.log(a);
//const constante;
//no permite cambiar el valor
const constante="Hola soy una constante";
console.log(constante);

let b = 6;
console.log(b);
b=3;
console.log(b);

//diff entre let y var
// el var afecta a todo el codigo y el let solo en donde se está declarando
//Ejemplo
var variable="Hola soy una variable VAR"
for (var i = 0; i<3; i++){
    var variable="Hola soy la segunda variable";
}
console.log(variable);


let variableLET="Hola soy una variable LET"
for (var i = 0; i<3; i++){
    let variable="Hola soy la segunda variable LET";
}
console.log(variableLET);
//////////////////////////////////////////////////////////
//typeof sirve para saber el tipo de dato primitivo que es
var num=4;
var num="hoola"
console.log(typeof num);
