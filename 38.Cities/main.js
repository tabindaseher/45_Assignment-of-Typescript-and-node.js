"use strict";
//create a function 
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city = 'Karachi', country = 'Pakistan') {
    console.log(`${city} is in ${country}`);
}
//invoke the function
describe_city();
// again  invoke but different city
describe_city('Murree');
//again invoke but city and country are different
describe_city('Berlin', 'German');
