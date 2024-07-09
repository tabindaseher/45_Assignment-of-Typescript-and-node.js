// create a function 

function make_shirt(size : string = 'large' , message : string = "I LOVE TYPESCRIPT"){
    console.log(`Stitch a ${size} shirt with the message print on it  : ${message}`);
    
};
//invoke the function by default value
make_shirt();
//again calling a function with medium size
make_shirt('medium');
//another calling 
make_shirt('small', 'I LOVE CODING')
