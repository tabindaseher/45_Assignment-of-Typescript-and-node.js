

//create a variable called alien_color 
let alien_color : string = 'green';

//if statement to test wheather the alien color is green .
//if it is green ,print a message that the player earned 5 points.
if(alien_color === 'green'){
    console.log('player just earned 5 points!');
};

//write one versionof this program that passes if test and another that fails.
 alien_color  = 'yellow';

// the version that fails will have no output
if(alien_color === 'green'){
    console.log('player just earned 5 points!');
};