//metodos mas avanzados  => map() filter() reduce()


const array = ["Oviedo", "Caaguazu", "Carayao", "San Jose"];
array.forEach(v=>{
    console.log(v)
    return 4;
})

const val = array.forEach(v=>{
    console.log(v);
    return 4
})
console.log(val);

//1-oviedo

const newArray = array.map((valor, indice)=>{
    return `${indice + 1} - ${valor}`
    
})
console.log(newArray)
// forma mas resumida
const nArray =  array.map((valor, indice)=> `${indice + 1} - ${valor}`)
console.log(nArray);



// filter=filtros


const listaObjetos =  [
    {nombre: "Luis", apellido: "Portillo", edad:25},
    {nombre: "Carlos", apellido: "Portillo", edad:30},
    {nombre: "Luna", apellido: "Portillo", edad:17}
]

const personasMenores = listaObjetos.filter(obj=>{
    if (obj.edad<18){
    return true;
    }else{
        return false;
    }
})
console.log(personasMenores)
// mas resumida
const personasMayores = listaObjetos.filter(obj=>obj.edad>18)
console.log(personasMayores)
// todo menos carlos
const noLuna = listaObjetos.filter(obj => obj.nombre!=="Luna")
console.log(noLuna)


//reduce
const valores = [3,5,70,123,45,5];
const suma = valores.reduce((anterior,siguiente, indice, ArrayOriginal)=>{
    console.log(anterior);
    console.log(siguiente);
    console.log(indice);
    console.log(ArrayOriginal);
    return anterior + siguiente

})
console.log(suma);