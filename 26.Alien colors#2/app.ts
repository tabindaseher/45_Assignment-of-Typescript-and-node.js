//store a color in variable
let alienColor : string = "green";

//write an if-else chain
//if the alien is green then print the statement that the player just 
//earned 5 point for shooting alien.
//if the alien's color is not green ,print a statement that the player just earned 10 points
if(alienColor === "green"){
    console.log(' Player just earned 5 point for shooting alien.');
}else{
    console.log('Players just earned 10 points');
};

//another version`
alienColor = "yellow";

//runs the else block
if(alienColor === "green"){
    console.log('the player just earned 5 point for shooting alien.');
}else{
    console.log('players just earned 10 points');
    
};  