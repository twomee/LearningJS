//1-----------------------------------
let myBooleanVar = false;
console.log(myBooleanVar);
myBooleanVar = myBooleanVar.toString();
console.log(myBooleanVar);

//2-----------------------------------
let myBooleanVar2 = true;
myBooleanVar2 = undefined;
console.log(myBooleanVar2);

//3-----------------------------------
let myBooleanVar3 = undefined;
myBooleanVar3 = null;
console.log(myBooleanVar3);


//4-----------------------------------
let foo = 'text';
console.log(typeof foo);//string
foo = 10;
console.log(typeof foo);//number
foo = Symbol();
console.log(typeof foo);//symbol
foo = true;
console.log(typeof foo);//boolean
foo = undefined;
console.log(typeof foo);//undefined
foo = null;
console.log(typeof foo);//object