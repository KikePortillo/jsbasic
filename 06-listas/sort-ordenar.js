//ejercicios
// metodo sort() ordernar listas

// el sort -> MODIFICA EL ARRAY
const array = [2,1,4,0,20,10]
console.log(array);


array.sort((a,b)=>{
    //si pasa un numero negativo significa que a es menor que b 
    if (a<b){
        return -1
    }else if(a>b) {
        return +1
    }else{// a===b
        return 0
    }
})
console.log(array)

//ordenar unicamente arrays numericos

const arrayNumerico = [4,3,2,1];
arrayNumerico.sort((a , b) => a - b)
console.log(arrayNumerico);


/// Interesante en arrays de objetos

const listaObjetos =  [
    {nombre: "Luis", apellido: "Portillo", edad:25},
    {nombre: "Carlos", apellido: "Portillo", edad:30},
    {nombre: "Luna", apellido: "Portillo", edad:17}
]

//ordenar listas de objetos de menor a mayor 


const ordenarlista = listaObjetos.sort((a,b)=>{
    if (a.edad<b.edad){
        return -1
    }else if (a.edad>b.edad){
        return +1
    }else{
        return 0
    }
})
console.log(ordenarlista);


// mas simplificado

const orderList = listaObjetos.sort((a,b)=>a.edad-b.edad)
console.log(orderList)