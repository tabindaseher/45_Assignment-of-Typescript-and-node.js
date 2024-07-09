//create a function  which has include rest parameter that accepts a array of items a person wants on a sandwich. 

function make_sandwich (...items : string[]){
    
console.log('\nMake a sandwich with the help of these items..\n');

items.forEach(singleItem => console.log(singleItem));

console.log('\nSandwich is ready , now enjoy your sandwich..\n');

}
//call the function  three times with different arguement 

console.log('sandwich1');

make_sandwich('Chicken','Egg', 'Mayo');

console.log('sanwich2');

 make_sandwich('Vegetable' , 'Mayo' , 'Ketchup' , 'Black pepper' , 'butter');
 
 console.log('sandwich3');
 
 make_sandwich('chicken', 'Cheese' , 'Egg', 'Cucumber' , 'Mayo' , 'Ketchup');



