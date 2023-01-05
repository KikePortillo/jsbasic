
//- La fecha de hoy
const fechaHoy = new Date();
console.log(fechaHoy);

//- La fecha de tu nacimiento
const miFecha = new Date(1997,0,27);
console.log(miFecha);

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const hoy = fechaHoy.getTime()
console.log(hoy);
const nacimiento = miFecha.getTime();
console.log(nacimiento)
let comparacion = new Boolean;
if (hoy>nacimiento) {
    comparacion=true;
} else {
    comparacion=false;
}
console.log(comparacion);

//- Una variable que contenga el día de tu nacimiento
const dia = miFecha.getDate();
console.log(dia)
//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = miFecha.getMonth()+1;
console.log(mes);
//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const year = miFecha.getFullYear();
console.log(year);