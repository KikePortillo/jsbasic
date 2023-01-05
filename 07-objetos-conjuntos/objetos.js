//objetos

const obj = {
    id : 4,
    nombre : "kike",
    isDeveloper : true,
    libros_favoritos : ["El dia despues de mañana", "Los vengadores"],
    "3-juegos" : ["lol", "valorant", "csgo"]
}

console.log(obj.libros_favoritos);
console.log(obj["3-juegos"]);
// para llamar propiedades directamente
const prop = "nombre";
console.log(obj[prop])

const obj2 = obj;
console.log(obj2);

obj2.nombre="Luis";
console.log(obj2.nombre);
console.log(obj.nombre);

// hace una igualacion de objetos en memoria, son mismas variables para ambos. pasa en objetos
let val1 = 4;
let val2 = val1;
val2 = 6;
console.log(val2);
console.log(val1);
//forma correcta de copiar el valor
const obj3 = {...obj}
console.log(obj3);

obj3.nombre = "Carlos";
console.log(obj3);
console.log(obj);


////////////////////////
//como ordenar listas de objetos en funcion de una propiedad

const listaObjetos = [
    {titulo : "avenger", anyo: 2010 },
    {titulo : "el dia despues de mañana", anyo: 2004},
    {titulo : "mufasa", anyo: 2003},
    {titulo : "titanic", anyo: 1997},
    {titulo : "ted", anyo: 2012},
]

console.log(listaObjetos);
// el metodo sort muta el valor de la lista original
// para ordenar tanto por A><Z o 1><10 
listaObjetos.sort((a,b)=>a.titulo - b.titulo);
console.log(listaObjetos)
