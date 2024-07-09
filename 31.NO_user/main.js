"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//create an array of five usrnames including admin
let userNames = ['Admin', 'Sajid ', 'Arif', 'Sohail', 'Samad'];
// array list is empty
if (userNames.length === 0) {
    console.log('We need to find some users!');
}
else {
    for (let i = 0; i < userNames.length; i++) {
        if (userNames[i] === 'Admin') {
            console.log('Hello Admin, would you like to see a status report?');
        }
        //print a generic message to all username except admin
        else {
            console.log(`Hello ${userNames[i]}, thank you for logging in again!`);
        }
    }
    ;
}
;
userNames = [];
console.log('All userNames have been removed, array is empty like  ' + userNames.length);
