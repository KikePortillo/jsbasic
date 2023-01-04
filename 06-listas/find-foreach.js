// como iterar a los valores de una lista
let array= [1,2,3,4,5,6,7,8,9,10];
//forma antigua(poco eficiente)
for(let i= 0 ; i<array.length; i++){
    console.log(array[i]);
}

// forma mas moderna ES6 forEach y mas eficiente
let suma = 0;
const arrayNums = [1,2,3,4,5,6,20];
arrayNums.forEach(valor => {
    //suma=suma+valor;
    suma+=valor
    console.log(valor)
});
console.log(suma);

// buscar un valor dentro de una lista

//encontrar el elemento 7 en una lista
const variable = array.find(valor=>{
    if (valor===7) {
        return true;
    }
})
console.log(variable);
//se crea una lista de objetos
const listaObjetos =  [
    {nombre: "Luis", apellido: "Portillo", edad:25},
    {nombre: "Carlos", apellido: "Portillo", edad:30},
    {nombre: "Luna", apellido: "Portillo", edad:17}
]
// forma normal de buscar en una lista de objetos
const objeto = listaObjetos.find(o=>{
    if (o.apellido==="Portillo"){
        return true;
    }
})
//forma mas resumida

const nobjeto = listaObjetos.find(o =>o.nombre==="Carlos")
console.log(nobjeto);
//forma nueva de obtener la edad en una lista de objetos
const {edad} = listaObjetos.find(o=>o.nombre==="Luna")
console.log(edad)