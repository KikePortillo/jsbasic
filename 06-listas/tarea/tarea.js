//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompra = ["CAFE", "PAN", "GOLOSINAS"];
console.log(listaCompra)

//- Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol");
console.log(listaCompra);

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();
console.log(listaCompra);
//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const libros = [
    {titulo:"Los Vengadores", director:" Anthony Russo, Joss Whedon, Joe Russo, Cate Shortland", fecha:"2012"},
    {titulo:"El dia despues de mañana", director:"Roland Emmerich", fecha:"2004"},
    {titulo:"Avengers: Endgame", director:"Anthony Russo, Joe Russo", fecha:"2019 "},
]
//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const posteriores = libros.filter(filtro => filtro.fecha >2010)
console.log(posteriores);

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = libros.map(director=>director.director)
console.log(directores);

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos =libros.map(nombretitulo=>nombretitulo.titulo)
console.log(titulos);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const titudirector = libros.map((valor, indice)=>{
    return valor.titulo.concat(valor.director)
})
console.log(titudirector);
//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const newList = [...directores,...titulos];
console.log(newList)









