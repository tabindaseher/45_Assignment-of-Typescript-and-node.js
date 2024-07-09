var guestList = ['Erum', 'Anum', 'Alisha'];
// for(let i=0; i<guestList.length; i++){
// console.log('Dear friend  '   + guestList[i] + ',\n\ni would invite you at my home for iftar party. \n\nThank you!\n\n');
//}
var absentGuest = "Erum";
var newGuest = "Sadia";
guestList[0] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log('Dear friend  ' + guestList[i] + ',\n\ni would invite you at my home for iftar party. \n\nThank you!\n\n');
}
console.log("Miss ".concat(absentGuest, ", is not coming to our iftar party."));
console.log('good news ! we find big table so we are inviting 3 more guests');
guestList.unshift('Tabinda');
guestList.splice(2, 0, 'baby');
guestList.push('Summia');
for (var i = 0; i < guestList.length; i++) {
    console.log('Dear friend  ' + guestList[i] + ',\n\ni would invite you at my home for iftar party. \n\nThank you!\n\n');
}
