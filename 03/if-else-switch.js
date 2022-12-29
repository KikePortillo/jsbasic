
//bifurcaciones if-else
if(false){
    console.log("Verdadero");
}else{
    console.log("Falso")
}


let saldo = 50;
let efectivo = 20;
// if else basico
if(efectivo>saldo){
    console.log("se puede");
}else{
    console.log("saldo insuficiente");
}

// if else concatenado
let nota = 5;
if(nota==5){
    console.log("5");   
}else if(nota==4){
    console.log("4");
}else if(nota==3){
    console.log("3");
}else if(nota==2){
    console.log("2");
}else if (nota==1){
    console.log("1");
}else{
    console.log("nota invalidad");
}


//sentencias con switch
let n = 5;
switch (n){
    case 5:
        console.log("5"); 
        break;
    case 4:
        console.log("4"); 
        break;
    case 3:
        
        console.log("3");
        break;
    case 2:
        console.log("2"); 
        break;
    case 1:
        console.log("1"); 
        break;
    default :
        console.log("error")
        break;
}