
//store a name in a vaiable with whitespace at the beginning and the end of the name

let personName: string = `\n\t Tabinda seher \t\n`;
//print the name once
console.log(personName);


//remove the whitespaces with the use of trim method
let stripped: string = personName.trim();
//print the name after striping the white spaces.
console.log(stripped);