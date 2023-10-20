let kelvin = 293;
// The forecast today is 293 Kelvin
const celsius = kelvin - 273;
//Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
console.log(kelvin);
console.log(celsius);

let fahrenheit = celsius*(9/5) +32;
//equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.

console.log(fahrenheit);

fahrenheit= Math.floor(fahrenheit);
//the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.


console.log(`The temperature is ${ fahrenheit}  degrees Fahrenheit.`);


// So far i created a code. now i will use the function to make so that any input in to the function will give temp into fahrenheit. 

function convertTemperature(kelvinTemp){

const celsius = kelvinTemp - 273;

let fahrenheit= celsius*(9/5)+32;
fahrenheit= Math.floor(fahrenheit);
//the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.

return fahrenheit;
/*The line return fahrenheit; is not necessary to include in the code if you don't intend to use the converted Fahrenheit value outside of the convertTemperature function.

In the given code, the line is added to provide a way to retrieve the converted Fahrenheit value from the function.*/
}

// view result:
let kelvinTemp = 280;
let result = convertTemperature(kelvinTemp);
console.log(`The temperature is ${result} degrees Fahrenheit.`);
