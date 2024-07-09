"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//store 5 places in array
let places = ['Dubai', 'Pakistan', 'Turkey', 'Saudia', 'Japan',];
//print this message
console.log('original form : ', places);
//print in alphabetical order without modifying the list`
console.log('Alphabetical order : ', [...places].sort());
//show that  array still in original places
console.log('original  ', places);
//print  array in reverse alphabetical order without changing
console.log('Reverse order : ', [...places].sort().reverse());
//again array in original order
console.log('original order :  ', places);
//reverse the order  and print tha array that order has changed
console.log('original form reverse: ', places.reverse());
//reverse the order again and print back it in original list
console.log('original form: ', places.reverse());
//sort your array in alphabetical order and print the array that the order has changed
console.log('original but alphabetical : ', places.sort());
//sort the message in reverse alphabetical order
console.log('reverse but alphabetical order  :', places.sort().reverse());
