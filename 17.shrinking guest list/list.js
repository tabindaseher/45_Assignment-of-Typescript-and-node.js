"use strict";
//Start with  from Exercise 16
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ['Erum', 'Anum', 'Alisha'];
//modify the list, replacing the name of the guest Erum who can’t make it with the name of the 
//new guest Sadia i am  inviting.
let absentGuest = "Erum";
let newGuest = "Sadia";
//replacing the guest
guestList[0] = newGuest;
//invitation
for (let i = 0; i < guestList.length; i++) {
    console.log('Dear friend  ' + guestList[i] +
        ',\n\nI would like to invite you at my home for birthday party. \n\nThank you!\n\n');
}
// print statement stating the name of the guest who can’t make it
console.log(`Miss ${absentGuest}, is not coming to our birthday party.`);
//print statement to  informing people that you found a bigger dinner table.
console.log('Good News ! We found a big table so we are inviting 3 more guests');
//Add one new guest to the beginning of your array.
guestList.unshift('Tabinda');
// Add one new guest to the middle of your array.
guestList.splice(2, 0, 'Sanam');
//add one new guest to the end of guest list
guestList.push('Summia');
// Print a new set of invitation messages
for (let i = 0; i < guestList.length; i++) {
    console.log('Dear friend ' + guestList[i] + ',\n\n I would like to invite you at my home for birthday party. \n\nThank you!\n\n');
}
;
//print a message to shrink my guest list
console.log('\nSorry! We can not arrange big table, only Two people will be invited.\n');
// remove guest from list
while (guestList.length > 2) {
    let remove_guest = guestList.pop();
    console.log(`Sorry  ${remove_guest}, you are not invited for party.`);
}
//• Print a message to each of the two people, letting them know they’re still invited.
for (let i = 0; i < guestList.length; i++) {
    console.log('Dear friend ' + guestList[i] + ',\n\nYou are still invited. \n\nThank you!\n\n');
}
//Remove the last two names from your list. 
guestList.splice(0, guestList.length);
//print the list that actually have an empty list
console.log('My guest list :', guestList);
