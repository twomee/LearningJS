//1-----------------------------------
let computer = {
    id : 1,
    modelName : 'macbook',
    price : 10000,
}

console.log(computer);

//2-----------------------------------
let myFunction1 = (number) => {
    let date = {
        dayName: '',
        dayNumber : number,
    }
    switch(number){
        case 1:
            date.dayName = 'Sunday';
            break;
        case 2:
            date.dayName = 'Monday';
            break;
        case 3:
            date.dayName = 'Tuesday';
            break;
        case 4:
            date.dayName = 'Wendsday';
            break;
        case 5:
            date.dayName = 'Thursday';
            break;
        case 6:
            date.dayName = 'Friday';
            break;
        case 7:
            date.dayName = 'Saturday';
            break;
        default:
            date.dayName = 'N/A';
            date.dayNumber = -1;
            break;
    }
    return date;
}

console.log(myFunction1(6));
console.log(myFunction1('6'));

//3-----------------------------------
let myFunction2 = (object, key, value) => {
    object[key] = value;
    return object;
}

let myObject = {other : 'other'};
myObject = myFunction2(myObject, 'name', 'someName');
myObject = myFunction2(myObject, 'id', '5');
console.log(myObject)


//4-----------------------------------
let myObject2 = {
    func1 : (arg1) => {
        console.log(arg1);
    },
    func2 : () => {
        return {id: 1, name: 'Moshe'};
    },
}

myObject2.func1(10);
console.log(myObject2.func2());

