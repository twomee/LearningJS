//1-----------------------------------
function myFunc(){
    return null;
}

console.log(myFunc());

//2-----------------------------------
function ahlaBahla(){
    return 100;
}

console.log(ahlaBahla());

//3-----------------------------------
function yay(){
    return 'yay';
}

console.log(yay());

//4-----------------------------------
function addMe(arg1){
    console.log(arg1);
    return arg1+1;
}

console.log(addMe(10));

//5-----------------------------------
function whoAmI(arg1){
    if(arg1 > 0){
        console.log('+');
    }else if(arg1 < 0){
        console.log('-');
    }else{
        console.log('?');
    }
}

whoAmI(1); // +
whoAmI(-1); // -
whoAmI(0); // ?

//6-----------------------------------
function checkNumber(number){
    if(typeof number === "number"){
        if(number % 2 === 0){
            return true;
        }else{
            return false;
        }
    }else{
        console.log('n/a');
    }
}

console.log(checkNumber(2));
console.log(checkNumber(3));
console.log(checkNumber('2'));

//7-----------------------------------
function myFunction(arg1){
    if(typeof arg1 !== "function"){
        console.log("error");
        return;
    }
    console.log(arg1());
}

myFunction(() => {
    let a = 1;
    let b = 1;
    return a + b;
})

myFunction(() => {
    let a = 'Hello';
    let b = 'World';
    return a + b;
})

myFunction(1);
