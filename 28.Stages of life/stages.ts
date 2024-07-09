//set a value  in the variable of  age 
let age : number = 26;

// the person is less than 2 years old, print a message that the person is a baby.
if( age < 2 ){
    console.log("Seher is a baby.");

}
//if the person is atleast 2 years old but less than 4 
else if( age >=2 && age <4 ){
    console.log(" Seher is a toddler.");
}
//if the persn is atleast 4 but less than 13 
else if(age >= 4 && age < 13){
    console.log(" Seher is a kid");
}
//if the person is atlleast 13 but less than 20
else if(age >=13 && age < 20){
    console.log("Seher is a teenager");
}
//if the person is atleat 20 but less than 65
else if(age >=20 && age < 65){
    console.log("Seher is  an adult");
}
//if the person is 65 or older
else if(age >= 65){
    console.log("Seher is  an elder")
};
