//sets o conjuntos

const array = [1,3,4,5];
const miSet = new Set(array);
//array conjunto de valores no ordenados
console.log(array);
//conjunto ordenado e irrepetibles
console.log(miSet);

// .add para añadir valoraes
miSet.add(10);
miSet.add("hola");
console.log(miSet);
//  delete para eleminar
miSet.delete("hola");
console.log(miSet);
// para eliminar todos los valores del set

//miSet.clear();
console.log(miSet);

// comos saber si mi set contiene un valor

//para el array se usa include y para el set se usa has()

//ejemplos
console.log(miSet.has(3))
console.log(array.includes(2));


// para saber el tamaño es size
console.log(miSet.size);

// para recorrrer

miSet.forEach(valor=>{
    console.log(valor)
})
const it_miSet = miSet.values()
console.log(it_miSet);
const ar_miSet=[...it_miSet];
console.log(ar_miSet)
