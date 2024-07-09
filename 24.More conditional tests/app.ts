// creating avariable

import { log } from "console";

let apple : string = "apple";
let upperCaseApple = "APPLE";
let a = 10 ;
let b = 20;

//check equality  with string
console.log('is apple is equal to apple?');
console.log(apple === 'apple');

//check inequality with string
console.log('\nis apple is not equl to apple');
console.log(apple != 'apple');


//test using the lower case function
console.log('\nis APPLE equal to apple after converting to lowercase?');
console.log(upperCaseApple.toLocaleLowerCase() == 'apple');

console.log('\nis APPLE  not equal to apple after converting to lowercase?');
console.log(upperCaseApple.toLocaleLowerCase() !== 'apple');

//numerical test involving equality 
console.log('\nis a equal to b?');
console.log(a == b);

//numerical test involving  inequality

console.log('\nis a not equal to b?');
console.log(a !=b);


//greater than test
console.log('\nis a greater than b');
console.log(a > b);


//less than test
console.log('\n is a less than b ?');
console.log(a < b);


//greater than or equal to
console.log(" \nis  10 greater than or equal to 20");
console.log(10 >= 20);


//less than or equal to
console.log(" \n is 10 less than or equal to 20"); 
console.log(10 <= 20);


//test using 'and'  operator
console.log('\n a is equal to 10 & b is equal to 20');
console.log(a <  b && b == 20);


//test using  'or' operator
console.log('\n a is equal to 15 OR b is equal to 20');
console.log(a == 15 || b > a);


//test wheather an item is an array
const fruits : string[] = ['pear', 'apple', 'plum'];

console.log('\n is pear is include in array');

console.log(fruits.includes("pear"));

//test wheather an item is an not array
console.log('\n is pear not include in array');

console.log(!fruits.includes("Banana"));






