//1-----------------------------------
for(let i=0; i<3; i++){
    console.log('i know how to use for loop');
}

//2-----------------------------------
const customersArray = ['Moshe', 'Yaakov', 'Yossi', 'Baruch', 'Yael'];
customersArray.forEach((key,value) => {
    console.log(`key is: ${value}, name is ${key}`);
})
//or
for(let customer of customersArray){
    console.log(`${customer}`);
}

//3-----------------------------------
const invoices = [{ id: 1, price: 10 }, { id: 2, price: 32 }, { id: 3,price: 40 }];
let sumInvoices1 = 0;
for(let invoice of invoices){
    console.log(invoice.price);
    sumInvoices1 += invoice.price;
}
console.log(sumInvoices1);
//or
let sumInvoices2 = 0;
invoices.forEach((value) => {
    sumInvoices2 += value.price;
})

console.log(sumInvoices2);

//4-----------------------------------
let number1 = 10;
while(number1 >= 0){
    console.log(`number is ${number1}`);
    number1--;
}

//5-----------------------------------
let number2 = -1;
do{
    console.log(`number is ${number2}`);
    number2--;
}
while(number2 >= 0);

//6-----------------------------------
let myArray = [
    { userName: 'Moshe', age: 20, }, { userName: 'Yaakov', age: 25, }, { userName: 'Ran', age: 40, },
    ];
myArray.forEach((value) => {
    if(value.age < 30){
        console.log(`${value.userName} with age ${value.age}`);
    }
})
//or
let myFilterArray1 = myArray.filter((value) => {
    if(value.age < 30){
        return true;
    }else{
        return false;
    }
})
console.log(myFilterArray1);

//7-----------------------------------
let myArray1 = [
    { userName: 'Moshe', age: 20, }, 
    { userName: 'Yaakov', age: 25, },
    { userName: 'Ran', age: 40, },
];
let myFilterFunction = (requestedAge, people) => {
    let newFilteredPeople = people.filter((value) => {
        if(value.age < requestedAge){
            return false;
        }else{
            return true;
        }
    })
    return newFilteredPeople;
}

console.log(myFilterFunction(40, myArray1));


