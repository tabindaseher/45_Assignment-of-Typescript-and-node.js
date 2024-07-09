"use strict";
//store a name in variable 
Object.defineProperty(exports, "__esModule", { value: true });
let personName = 'Seher';
//print a name in lowercase
console.log("lowercase:", personName.toLowerCase());
//print a name in uppercase
console.log("uppercase:", personName.toUpperCase());
// print a name in titlecase
console.log("titlecase:", personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
