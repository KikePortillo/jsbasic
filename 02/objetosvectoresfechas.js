//listas, array, arreglos, vectores, matrices lo mismo
const vector1=[1, "hola", true, undefined, null];
console.log(vector1);
const lista = new Array(1,2,3);
console.log(lista);
const lista2 = new Array(3);
//acceder al dato 0 del array y agregarle datos
lista2[0]="dato1"
console.log(lista2);
const ns= [vector1, lista, lista2];
console.log(ns);


//objetos
const movil={
    altura : 10,
    anchura : 5,
    marca : "Xiaomi",
    color : "Blanco",
    contactos : ["Yo","Tu", "El"],
    tarjeta:{
        marca : "sandisk",
        tamañoSD : 32,
    },
    //para agregar un atributo que contenga caracteres no permitidos se agrega ""
    "fecha_nacimiento":4
}
// se puede agregar propiedades del objeto o modificar
movil.anyo = 2019;
movil.marca="iPHONE"
console.log(movil);
console.log(movil.tarjeta.tamañoSD);


//fechas
const ahora = new Date();
console.log(ahora)

const fecha_cadena = new Date("march 25 2022")
console.log(fecha_cadena);

const fechadefefinida = new Date(2022, 13, 29);
console.log(fechadefefinida);
//por separado y traer todo
const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear();
console.log(dia,mes,anyo);