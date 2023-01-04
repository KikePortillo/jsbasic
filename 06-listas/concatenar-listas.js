// unir dos listas .concat
const l1 = [1,2,"hola"];
const l2 = [3,4,"chau"];
console.log(l1.concat(l2));
const l3 = l1.concat(l2);
console.log(l3);

// como unir dos listas con el factor de propagacion

//otra forma de concatenar(factor de propagacion)
console.log(...l3)
const l4 = [...l1,...l2]
console.log(l4)