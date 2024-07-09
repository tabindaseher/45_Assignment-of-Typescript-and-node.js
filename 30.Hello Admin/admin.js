"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//create an array of five usrnames including admin
const userNames = ['Admin', 'Sajid ', 'Arif', 'Sohail', 'Samad'];
// the user is admin print a special message
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
