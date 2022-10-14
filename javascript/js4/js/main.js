// Numbers

const myNumber = 42;

const myFloat = 42.0;

const myString = "42.123abc";

console.log(myString);
console.log(myNumber === myFloat);
console.log(myNumber === myString);

console.log(Number(myString) === myNumber)
console.log(Number("Sid"));

// Number Methods
// The Number.isInteger() method determines whether the passed value is an integer

// The Number.parseFloat() method parses an argument and returns a floating point number.
// If a number cannot be parsed from the argument, it returns NaN

// The toFixed() method formats a number according to how many deciaml points you provide
// as the parameter

// The Number.parseInt() method parses a string argument and returns an integer

// The toString() method returns a string representing the number

// The Number.isNaN() method determines whether the passed value is NaN AND its type is Number

// The global isNaN() function determines whether a value is NaN or not

console.log(Number.isInteger(myString));
console.log(Number.parseFloat(myString));
console.log(myFloat.toFixed(2));
console.log(Number.parseInt(myFloat).toFixed(2));
console.log(myFloat.toString());
console.log(Number.isNaN("Sid"));