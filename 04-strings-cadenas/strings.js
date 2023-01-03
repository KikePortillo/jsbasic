//strings
//se puede definir con comillas dobles y simples

let str = "Hola con comillas dobles";
console.log(str);
let str_cs = 'Hola con comillas simples';
console.log(str_cs);
// para agregar comillas dentro de las comillas
let str_comillas = "hola \"que tal\"";
console.log(str_comillas);
// para las comillas simples no hace falta por ejemplo
let str_comillas_simples = "hola 'que tal'";
console.log(str_comillas_simples);

////////
//comillas invertidas(backticks) " ` ` "
// 
let srt_backticks = `CON BCK`;
console.log(srt_backticks);
let nombre = "kike";
let saludo = "Hola, nombre BIENVENIDO"
// se puede usar ` ` para agregar varibales
let saludoS = `HOLA, ${nombre} BIENVENIDO`;

console.log(saludoS)
//
//plantilla html
let plantilla = `
<html>
    <h1>PAGINA WEB</h1|
    <p>Este parrafo</p>
</html>`;
console.log(plantilla);
let libros = ["empieza por el porque", "el monje vendio su ferrari", "el poder del ahora"];
