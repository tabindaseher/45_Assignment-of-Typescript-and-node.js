//Start with  from Exercise 15

let guestList : string[] = ['Erum', 'Anum', 'Alisha'];


//modify the list, replacing the name of the guest Erum who can’t make it with the name of the 
//new guest Sadia i am  inviting.

let absentGuest : string = "Erum";

let newGuest : string = "Sadia";
//replacing the guest
guestList[0] = newGuest;

//invitation
for(let i=0; i<guestList.length; i++){

    console.log('Dear friend  '   + guestList[i] +
         ',\n\nI would like to invite you at my home for birthday party. \n\nThank you!\n\n');

}
// print statement stating the name of the guest who can’t make it
console.log(`Miss ${absentGuest}, is not coming to our birthday party.`);

//print statement to  informing people that you found a bigger dinner table.

console.log('Good News ! We found a big table so we are inviting 3 more guests');
//Add one new guest to the beginning of your array.
guestList.unshift('Tabinda');
// Add one new guest to the middle of your array.
guestList.splice(2 , 0 ,'Sanam');
//add one new guest to the end of guest list
guestList.push('Summia');

// Print a new set of invitation messages
for(let i=0; i<guestList.length; i++){

    console.log('Dear friend '   + guestList[i] + ',\n\n I would like to invite you at my home for birthday party. \n\nThank you!\n\n');

};
