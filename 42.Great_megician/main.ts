
//Pass the array to a function called show_magicians(),

function show_magicians(megician: string[]){
    megician.forEach(names => {console.log(names);
    })
};

function make_great (megician: string[]){
    return megician.map(name => `THE GREAT ${name}`)
}

//Magicians: Make a array of magician’s names
let megician_name : string[] = ['David Blaine','Shin Lim ', 'Derren Brown' ,'Dynamo'];

//call the function to print each megicain name


let great_megician =make_great(megician_name);

//call the megicians that shows list of megician
show_magicians(great_megician);


