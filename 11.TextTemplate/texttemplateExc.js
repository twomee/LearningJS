//1-----------------------------------
const timeOfDay = ['Morning', 'Evening'];
console.log(`Good ${timeOfDay[0]}`);

//2-----------------------------------
let coinFunction = (number, type) => {
    return `${number}${type}`;
}

console.log(coinFunction(30,'$'));