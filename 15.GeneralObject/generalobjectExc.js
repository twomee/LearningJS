//1-----------------------------------
let randomNumberFunction = () => {
    return Math.round(Math.random()*100);
}
console.log(randomNumberFunction());

//2-----------------------------------
let randomNumberFunctionUntilNumber = (number) => {
    return Math.round(Math.random()*number);
}
console.log(randomNumberFunctionUntilNumber(10));

//3-----------------------------------
let verify21 = (ageYear, ageMonth) => {
    const currentDate = new Date();
    const customerDate = new Date(ageYear,ageMonth);
    let age  = currentDate-customerDate;
    age = age / (1000 * 60 * 60 * 24 * 365);
    if(age > 21){
        return true;
    }
    return false;
}

console.log(verify21(1996,7));
console.log(verify21(2000,7));

//4-----------------------------------
let timeoutedFunction = (x) => {
    let delayedSecond = x * 1000;
    setTimeout(() => {
        console.log(`Running after ${x} seconds`);
    },delayedSecond)
}

timeoutedFunction(5);