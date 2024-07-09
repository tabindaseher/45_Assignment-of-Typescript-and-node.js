"use strict";
//create a function which return a value of string
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city, country) {
    return `${city} , ${country}`;
}
//calling the function
let result = city_country('lahore', 'Pakistan');
//print the returned value
console.log(result);
//again invoke the function with different city and country
console.log(city_country('Tokyo', 'Japan'));
// another city or country
console.log(city_country('Paris', 'Europe'));
