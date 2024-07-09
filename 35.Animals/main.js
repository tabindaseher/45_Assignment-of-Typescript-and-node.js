"use strict";
//store animals name in array
Object.defineProperty(exports, "__esModule", { value: true });
let pet_animals = ['Dog', 'Cat', 'Rabbit'];
//using for loop
for (let pet_names of pet_animals) {
    console.log(pet_names);
}
;
//statement about pet animal
for (let animal of pet_animals) {
    console.log(`A ${animal} would make a great pet!`);
}
;
//print a messsage outside the loop
console.log("\nAny of these animals would make a great pet.");
