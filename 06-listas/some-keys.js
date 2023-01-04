// si algunos elementos de una lista cumplen una condicion
//some()
const array = [1,2,3,4,"Hola"]
const resultado = array.some(valor => typeof valor ==="string")
console.log(resultado)


//tambien se puede usar en lista de objetos
const listaObjetos =  [
    {nombre: "Luis", apellido: "Portillo", edad:25},
    {nombre: "Carlos", apellido: "Portillo", edad:30},
    {nombre: "Luna", apellido: "Portillo", edad:17}
]

const nombre = listaObjetos.some(persona => persona.nombre ==="Luis")
console.log(nombre)


// como obtener una lista a partir de un objeto iterable

const str = "hola soy kike"
const ar_str = Array.from(str);
console.log(ar_str)
const set =  new Set([2,3,"hola",4])
const ar_set = Array.from(set);
console.log(ar_set);

//iterador keys

const keys = array.keys();
console.log(keys);
const ar_keys = Array.from(keys);
console.log(ar_keys)