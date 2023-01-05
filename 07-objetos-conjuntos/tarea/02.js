//Crea un archivo llamado objetos.js que contenga las siguientes líneas
//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const lista= {
    nombre : "Luis",
    apellido : "Portillo",
    edad : 25,
    altura : 175,
    eresDesarrollador : true
}
console.log(lista)

//- Una variable que obtenga tu edad a partir del objeto anterior
let edad= lista.edad;
console.log(edad);

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
console.log(lista)
const bfandme = [
    {nombre : "Luis", apellido : "Portillo", edad : 25, altura : 175, eresDesarrollador : true},
    {nombre: "Arturo", apellido : "Duarte", edad : "25", altura : 175,eresDesarrollador :false},
    {nombre: "Juan", apellido : "Acosta", edad : "26", altura : 173,eresDesarrollador :true}
]


//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a meno
const ordenado = bfandme.sort((a,b)=>a.edad - b.edad)
console.log(ordenado)