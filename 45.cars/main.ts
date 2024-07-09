//define a function to create a car object with optional object
 
interface Car {
    Manufacturer : string;
    model : string;
    [key : string] : string|number;

};


function create_car(Manufacturer : string , model : string , others: Record<string, any>): Car{
//initialize car object with manufacture and model and others
    return {
        Manufacturer , 
        model, 
        ...others,

    }

};
//call the function
const myCar = create_car('Toyota', 'Corolla' , {color :'black' , years : '2023'}  );
console.log(myCar);
