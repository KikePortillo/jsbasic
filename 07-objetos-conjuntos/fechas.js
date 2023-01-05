//fechas
const hoy = new Date();
console.log(hoy);
// los meses comienzan en 0

const fecha2 = new Date(1997,0,27,18,30);
console.log(fecha2);


const f3 = new Date("January 27, 1997");
console.log(f3);


console.log(f3<hoy)
console.log(f3===fecha2)// no se pueden compara fechas de esta forma
// para compararlas se deben de convertir a milisegundos
//forma correcta de comparar fechas
console.log(f3.getTime());
console.log(fecha2.getTime())


/// obtener el dia, mes , año de una fecha

console.log(hoy.getDate());
//obtener dia
console.log(f3.getDate());
//se le suma uno al mes por el posicionamiento del vector
console.log(f3.getMonth()+1);
//obtener año
console.log(f3.getFullYear());

// .toLocaleDateString(ACA SE PONE EL METODO DE DE ORDEN )
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
//"en-GB" EN ESTE METODO UTILIZA EL ORDEN DE DIA MES AÑO
console.log(hoy.toLocaleDateString("en-GB"));
