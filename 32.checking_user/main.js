"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//list of five user name in array
let current_users = ['Ahmed', 'Abdullah', 'Asad', 'Seher', 'Arsalan'];
//list of five new user  in array
let new_users = ['Samad', 'Seher', 'Saad', 'Ali', 'Asad'];
//loop through username to other usename avaibility
new_users.forEach(new_ones => {
    //makinng a condition for username already exist and  save in condition
    let my_condition = (current_users.some(current_ones => current_ones.toLowerCase() === new_ones.toLowerCase()));
    if (my_condition) {
        console.log(`SORRY! ${new_ones} is already taken..`);
        //print different message using if else statement   
    }
    else {
        console.log(`This userName ${new_ones} is available`);
    }
});
