//Principales operaciones aritmeticas

let a = 3.2;
let b = 3.8;

//suma(+)
console.log(a+b)
//resta(-)
console.log(a-b);
console.log(b-a);
//multiplicacion(*)
console.log(a*b);
//division(/)
console.log(a/b);

///representacion de los numeros en cadenas de texto o cambiar a texto un numero
console.log(typeof a);
let a_s = a.toString();
console.log(typeof a_s);

//redonde de numeros decimales
let c = 3.3;
let d = c*3;
console.log(d);
console.log(typeof d);
//toFixed() para redondear a cuantas cifras decimales, pero lo convierte a string
console.log(d.toFixed(0));
console.log(d.toFixed(1));
console.log(typeof d.toFixed(2));

// toPrecision(x) Limitar el numero de decimales al valor X
// a cuantas cifras significativas
// tambien devuelve el valor en string
let z = 1291823123.12
let w = 12.12
console.log(z.toPrecision(1));
console.log(w.toPrecision(3));
console.log(z.toPrecision(1));
console.log(typeof z.toPrecision(1));
// aunque no tenga decimales
let abc = 123123123123;
console.log(abc.toPrecision(7));

