//- Un nuevo Set con los nombres de tu familia
const array = ["Luis", "Luna", "Carlos", "Rosalina", "Andres", "Adriana"];
const familia = new Set(array);
console.log(familia);
//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
familia.add("Luis");
console.log(familia);
//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
familia.add("Javascript");
console.log(familia);




