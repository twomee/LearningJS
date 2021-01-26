//1-----------------------------------
let myVar1 = 10;
if(myVar1 === 10){
    console.log('its a Ten!');
}

//2------------------------------------

let myVar2 = 'I am correct';
if(myVar2 === 'I am correct'){
    console.log('He is correct');
}else{
    console.log('He is NOT correct');
}

//3------------------------------------

let myVar3 = 3;
if(myVar3 === 1){
    console.log('Sunday');
} else if(myVar3 === 2){
    console.log('Monday');
} else if(myVar3 == 3){
    console.log('Tuesday');
} else if(myVar3 === 4){
    console.log('Wednsday');
} else if(myVar3 === 5){
    console.log('Thursday');
} else if(myVar3 === 6){
    console.log('Friday');
} else if(myVar3 === 7){
    console.log('Saturday');
} else{
    console.log('Not between 1 - 7');
}

//4------------------------------------
 let bmi = 20;

 if(bmi <= 18){
     console.log('BMI is too low');
 } else if(bmi >= 25){
     console.log('BMI is too high');
 } else{
     console.log('BMI is good');
 }

//5------------------------------------

let first = 10 === 10;
let second = 10 !== 10;
let third = 10 >= 9;
let fourth = 10 <= 9;
let fifth = 10 > 9;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(fifth);

//6------------------------------------
let day = 'Thursday';
if(day === 'Thursday' || day === 'thursday' || day === 5){
    console.log('Yay! Thursday!');
}

//7------------------------------------
let foo = 5
let bar = 'text';
if(foo === 5 && bar == 'Thursday'){
    console.log('Yay! Thursday!');
}

//8------------------------------------
let myVar4 = null;
if(myVar4 === 0 || myVar4 === null){
    console.log('I am not here');
}

//8------------------------------------
let myVar5 = 2;
let myVar6 = '2';

if(myVar5 == myVar6){
    console.log("They are equal!");
}