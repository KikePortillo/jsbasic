//bucles while-for


//bucle for

//  for (iniciar; condicionar; actualizar){
//
//  }
// formas alternativas de escribir i++
//i=i+1
//i+=1
//
for(let i=1; i<=10; i++){
    console.log(i)
}

let lista=[1,2,3,4,5,6,7,8,9,10]
for(let i=0; i<lista.length; i++){
    // se puede hacer acciones dentro como multiplicar sumar o restar
    console.log(lista[i]*2)
}
//lista.lenght para saber la longitud de datos que contiene la lista
//for of  para lista
for(let valor of lista){
    console.log(valor)
}
// lo mismo pero con estructura foreach
lista.forEach(valor=>{
    console.log(valor);
})
// for in, pora objetos
let persona = {
    nombre : "Luis",
    apellido : "Portillo",
    edad : 29,
    isDeveloper : true,
}
// para acceder a un atributo del objeto sin "."
let prop = "edad";
console.log(persona[prop])
for (let propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad])
    
}

//while y do while
let i = 0;
let max = 10;
while (i<max) {
    console.log(i);
    i++;
    
}

//do while
let a = 0;
do {
    i++;
    console.log("estoy en el do while")
} while (a < max);