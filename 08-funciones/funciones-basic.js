//funciones para js


// los p son los parametros que va a recibir
function saludar(p1,p2,p3){
    console.log("hola");
}
// asi lo llamamos

saludar(2,"adios",false);

//


//saludar con nombre


function saludando(nombre){
    console.log(`hola ${nombre}`)
}
saludando("kike");


//

const n = "Luis";

function saludito(nombre){
    console.log(`hola ${nombre}`)
}
saludito(n);

let nombre_2 = "juan"

despedir(nombre_2);
function despedir(nombre){
    console.log(`Adios ${nombre}`)
}

/// si le paso un objeto

let persona = {
    nombre : "Luis",
    apellido : "Portillo"
}

function saludarobjeto(objeto){
    console.log(`hola objeto ${objeto.nombre} ${objeto.apellido}`)
}


///
//parametros opcionales(si no le paso nada se hace automatico)
function imprimirNmasuno(n=7){
    console.log(n)
}
imprimirNmasuno()


// factor propagacion de todos los parametros que recibe
function imprimir(...parametros){
    console.log(parametros);

}
imprimir(1,2,3,"hola", {id : 1, apellido : "Portillo", nombre : "Luis"})

//
//function suma(...nums){
//    console.log(nums.reduce((a,b)=>a+b))
//}
//const s = suma(1,2,3,4,5,6,7,8,9,10)
//console.log(s);
// da undefined asi porque no tiene un retorno de valor
function suma(...nums){
    return nums.reduce((a,b)=>a+b)
}
const s = suma(1,2,3,4,5,6,7,8,9,10)
console.log(s);

////
function multiplicar(a=0, b=0){
    return a*b

}
console.log(multiplicar(4,4))
