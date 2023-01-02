let factorial = 1;
let b = 0;
let n = 1;
while (b===0) {
        
        if (n<=10){
            factorial =  factorial * n;
            n++;
        }else{
            break;
        }
}
console.log(factorial);