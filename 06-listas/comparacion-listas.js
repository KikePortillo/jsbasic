// comparar listas
//every()


const array = [0,1,2,3,4,5,6];
const resultado = array.every(valor=>{
    if(valor >=0){ 
        return true;
    }else{
        return false;
    }
})
console.log(resultado);

const nArray = ["hola, 1,2,3"];
const comparacion = nArray.every(valor =>{
    if(typeof valor==="number"){
            return true;
    }else{
        return false;
    }

})
// forma simplicada lo que comparo retorna siempre true or false
console.log(comparacion)
const result = array.every(valor=> typeof valor ==="number")
console.log(result)

//comparacion de listas

const l1= [1,2,3,4,5];
const l2= [1,2,3,4,5];
console.log(l1===l2)
// las listas no pueden compararse de forma normal

const compararArrays = (l1,l2)=>{
    if(l1.lenght !== l2.lenght)return false
    const res = l1.every((valor,i)=> valor ===l2[i])
    return res
}
console.log(compararArrays(l1,l2))

const l3 = [1,4,5,6];
console.log(compararArrays(l1,l3))