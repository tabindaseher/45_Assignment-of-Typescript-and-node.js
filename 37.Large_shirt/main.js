"use strict";
// create a function 
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = 'large', message = "I LOVE TYPESCRIPT") {
    console.log(`Stitch a ${size} shirt with the message print on it  : ${message}`);
}
;
//invoke the function by default value
make_shirt();
//again calling a function with medium size
make_shirt('medium');
//another calling 
make_shirt('small', 'I LOVE CODING');
