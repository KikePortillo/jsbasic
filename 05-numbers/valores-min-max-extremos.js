//Operador .valueOf() - obtener valores numericos a partir de literales
let a = 2;
//normalmente no se hace pero se puede
let b = new Number(3);
//

console.log(a);
console.log(b);
console.log(a+b);
//no hace falta porque de por si hace
console.log(a.valueOf()+b.valueOf());
console.log(b.valueOf());

let str =  new String("Hola")
console.log(str);
console.log(str.valueOf());



//NaN (no es un numero o (not a number)) - infinity
let n = Number("holi");
console.log(n);
//para ver si es o no un numero
console.log(isNaN(n));

let numerador = 20;
let divisor = 0 ;
let divisor_2 = null;
console.log(numerador/divisor);
console.log(numerador/divisor_2)

//como convertir los strings a valores numericos con number, parseInt y parseFloat
let n1 = "5.890";
let n2 = 2;
console.log(typeof n1);
//al sumar un string mas un numero se concatenan los datos
console.log(n1+n2)

console.log(Number(n1)+n2)

console.log(typeof parseInt(n1))
console.log(parseInt(n1))
//parsInte lo convierte a entero real
//y parseFloat a un float
console.log(typeof parseFloat(n1))
console.log(parseFloat(n1))
//numeros hexadecimales(BASE16)
let nhex='0x3a5b7';
console.log(parseInt(nhex))

//obtener los valores maximo y minimo en js, para saber como gestiona la memoria js
let minprecision = Number.EPSILON
let min_valor_js = Number.MIN_VALUE;
let max_valor_js = Number.MAX_VALUE;
//el minimo valor con el que se puede trabajar
console.log(minprecision);
//el minimo valor posible
console.log(min_valor_js);
//maximo valor posible
console.log(max_valor_js);
//
console.log(2**5000)