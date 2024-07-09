//store animals name in array

let pet_animals : string[] = ['Dog' , 'Cat' , 'Rabbit'];
//using for loop

for(let pet_names of pet_animals){
    console.log(pet_names);
    
};
//statement about pet animal
for(let animal of pet_animals){
    console.log(`A ${animal} would make a great pet!`);
    
};
//print a messsage outside the loop

console.log("\nAny of these animals would make a great pet.");
