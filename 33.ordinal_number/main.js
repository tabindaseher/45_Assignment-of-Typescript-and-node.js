"use strict";
//• Store the numbers 1 through 9 in a array.
Object.defineProperty(exports, "__esModule", { value: true });
let ordinal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// loop through the array
for (let num of ordinal) {
    let ordinalEnding;
    // Use an if-else chain inside the loop to print the proper ordinal ending for each number
    if (num === 1) {
        ordinalEnding = "st";
    }
    else if (num === 2) {
        ordinalEnding = "nd";
    }
    else if (num === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    //print the ordinal number 
    console.log(`${num}${ordinalEnding}`);
}
;
