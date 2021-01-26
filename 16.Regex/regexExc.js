//1-----------------------------------
let text = 'ahla bahla';
let regex1 = /ahla/;
console.log(regex1.test(text));

//2-----------------------------------
let password1 = 'Abcd';
let password2 = 'abcd';
let regex2 = /[A-Z]+/;
console.log(regex2.test(password1));
console.log(regex2.test(password2));

//3-----------------------------------
let password3 = 'A1b2c3';
let password4 = '1Abc';
let password5 = '1234';
let regex3 = /[A-Z][0-9]+/;
console.log(regex3.test(password3));
console.log(regex3.test(password4));
console.log(regex3.test(password5));




