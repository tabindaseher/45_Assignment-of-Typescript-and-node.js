//create a function which return a value of string

function city_country(city : string , country : string ): string{
    return `${city} , ${country}`;
}
//calling the function
let result = city_country('lahore' , 'Pakistan');

//print the returned value
console.log(result);

//again invoke the function with different city and country

 console.log(city_country('Tokyo', 'Japan'));
 
// another city or country
console.log(city_country('Paris' , 'Europe'));


