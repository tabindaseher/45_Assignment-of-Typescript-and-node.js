

//store guestname in array

let guestList : string[] = ['Erum', 'Anum', 'Alisha'];

//print a message to each person, inviting them to dinner.
for(let i=0; i<guestList.length; i++){

    console.log('Dear friend  '   + guestList[i] + 
    ',\n\nI would  like to invite you at my home for birthday party. \n\nThank you!\n');

};

//print the message indicating the number of inviting people
console.log(`Total number of guest list are: ${guestList.length}`);