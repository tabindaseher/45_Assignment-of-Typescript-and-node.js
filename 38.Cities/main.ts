//create a function 

function describe_city(city : string = 'Karachi' , country : string = 'Pakistan'){
    console.log(`${city} is in ${country}`);
    
}
//invoke the function
describe_city();
// again  invoke but different city

describe_city('Murree');
//again invoke but city and country are different
describe_city('Berlin' , 'German');