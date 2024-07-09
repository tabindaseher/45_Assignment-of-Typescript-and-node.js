

//Pass the array to a function called show_magicians(),

function show_magicians(megician: string[]){
    megician.forEach(names => {console.log(names);
    })
};

function make_great (megician: string[]){
    return megician.map(name => `THE GREAT ${name}`)
}

//Magicians: Make an array of magician’s names
let megician_name : string[] = ['David Blaine','Shin Lim ', 'Derren Brown' ,'Dynamo'];


//make a copy of array through slice method 
let copy_magician_name = megician_name.slice()

// modified copied array to include "the great " with their names
let copy_megician = make_great(copy_magician_name);

//print both array original and copy

//original
console.log('\norginal array');

show_magicians(megician_name);

//copy
console.log('\ncopy');

show_magicians(copy_megician);
