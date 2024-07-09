


//Pass the array to a function called show_magicians(),

function show_magicians(megician: string[]){
    megician.forEach(names => {console.log(names);
    })
};

//Magicians: Make a array of magician’s names
let megician_name : string[] = ['David Blaine','Shin Lim ', 'Derren Brown' ,'Dynamo'];

//call the function to print each megicain name
show_magicians(megician_name);