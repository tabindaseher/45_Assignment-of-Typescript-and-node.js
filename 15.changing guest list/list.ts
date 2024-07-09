//starting program with ex no.14

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

