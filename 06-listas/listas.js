// como trabajar con listas, arrays, vectores, arreglos lo mismo que igual.
// formas de inicializar
let var1 = 45;
let bool =  true;
let array = new Array(1,2,3,4,5,6, null, undefined, "hola", var1, bool);
console.log(array)
// el contenido puede ser tanto string, cadena, bool, objeto, null, undefined, variables,
// para acceder a los valores de un array, se utiliza el indice [x]
//para listar podemos usar el desde


// metodos para introducir nuevos parametros dentro de arrays

//.push() y unshift() => mutan el valor de nuestro array
// .push sirve para agregar al final del vector un nuevo valor

array.push("hola","que tal");
console.log(array);
// .unshift para agregar al principio
array.unshift("inicio","inciando");
console.log(array);

// metodos para eliminar valores
//.pop() .shift() => mutan igual

//pop eliminal el ultimo parametro

array.pop();
console.log(array);
//shift eliminal el primer parametro
array.shift();
console.log(array);

let array2 = [1,2,4,5,6]
console.log(array2);

//splice para elimiar de forma (x,y,z)
// x(es lugar de donde se comienza), y(lugar en donde se va a comenzar a hacer), z(y que hacer)

//eliminar valores .splice(indice, numvaloresAeliminar)
array2.splice(2,3)
console.log(array2);

// para añadir .splice (2,0, "contenido a agregar")
array2.splice(1,0,"hola")
// el 1 es la posicion donde va a iniciar a agregar o eliminar
console.log(array2);

// para modificar valores
array2.splice(1,1,"chau");
console.log(array2);