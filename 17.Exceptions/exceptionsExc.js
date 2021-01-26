//1-----------------------------------
let sumNumbers = (a,b) => {
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }else{
        const error = new Error('One of the nubmers is not number');
        throw error;
    }
}

let a = '1', b = 2;
try{
    console.log(sumNumbers(a,b));
}catch(error){
    console.log(error);
}

//2-----------------------------------
let negativeNumber = (c) => {
    if(c < 0){
        throw new error('The number is negative');
    }
    return c;
}

let c = -1;
try{
    console.log(negativeNumber(c));
}catch(error){
    c = 0;
    console.log(error);
    console.log(c)
}
