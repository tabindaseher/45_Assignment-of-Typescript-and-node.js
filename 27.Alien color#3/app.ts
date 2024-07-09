 //store the alien color 
 let alienColor : string = "green";
//version 1 of this program
//using if or else if statement
 if(alienColor === "green"){
    console.log(' version 1 :players just earned 5 points for shooting alien.');
 }

 else if ( alienColor === "yellow"){
    console.log('players just earned 10 points.');
 }

 else if( alienColor === "red" ){
    console.log('players just earned 15 points.');

 }
  else{
    console.log('please select one color')

 };

 //version 2 of this program

 alienColor = 'yellow';
 if(alienColor === "green"){
    console.log('players just earned 5 points.');
 }

 else if ( alienColor === "yellow"){
    console.log('version :2 players just earned 10 points.');
 }

 else if( alienColor === "red" ){
    console.log('players just earned 15 points.');

 }
  else{
    console.log('please select one color')

 };

  //version 3 of this program

  alienColor = 'red';
  if(alienColor === "green"){
     console.log('players just earned 5 points.');
  }
 
  else if ( alienColor === "yellow"){
     console.log('players just earned 10 points.');
  }
 
  else if ( alienColor === "red" ){
     console.log('version : 3 players just earned 15 points.');
 
  };