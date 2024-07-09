"use strict";
//define a function to create a car object with optional object
Object.defineProperty(exports, "__esModule", { value: true });
;
function create_car(Manufacturer, model, others) {
    //initialize car object with manufacture and model and others
    return {
        Manufacturer,
        model,
        ...others,
    };
}
;
//call the function
const myCar = create_car('Toyota', 'Corolla', { color: 'black', years: '2023' });
console.log(myCar);
