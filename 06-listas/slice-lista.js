// como obtener una lista a partir de otra .slice

const array = ["hola",1,2,3,4,5,6,null, "adios"];

// no modifica el valor del array original
console.log(array.slice(1,7))
const narray = array.slice(1,7);
console.log(narray);