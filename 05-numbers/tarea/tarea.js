
//- Una variable que contenga tu altura en centímetros (entero)

//- Una variable que contenga tu altura en metros (número de coma flotante)

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)

//- Una variable que contenga tu altura en metros redondeada hacia arriba

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript


let h_cm = 175;
let h_m = 1.75;
let peso = 65.8;
let h_a = h_m.toFixed(0);
console.log(h_a);
let h_b = parseInt(h_m);
console.log(h_b);
let max = Number.MAX_VALUE+1;
console.log(max);