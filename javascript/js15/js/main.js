// Arrays
// onst myArray = [];

// add elements to an array
// myArray[0] = "Sid";
// myArray[1] = 1001;
// myArray[2] = false;

// myArray.push("school");

// console.log(myArray);

// const lastItem = myArray.pop(); // removes item

// console.log(lastItem);

// const newLenght1 = myArray.unshift(42); // adds item to front

// console.log(newLenght1);

// const newLenght2 = myArray.push(42); // adds item to back

// console.log(newLenght2);

// const firstItem = myArray.shift(); // removes item from front

// console.log(firstItem);

// myArray.splice(1, 0, 42);

// console.log(myArray);
// console.log(myArray[1]);

// const myArrayA = ["A", "B", "C"];
// const myArrayB = ["D", "E", "F"];
// const newArray = myArray.slice(2, 5); // creates new array

// myArray.reverse();

// const newString = myArray.join();

// const newArray = newString.split(",");

// const newArray = [...myArrayA, ...myArrayB]; // spread "..." = new array with six elements

const equipmentShelfA = ["baseball", "football", "volleyball"];
const equipmentShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipmentShelfA[1]);
// or
console.log(clothesShelfB[0]);

const equipDept = [equipmentShelfA, equipmentShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

const sportsStore = [equipDept, clothesDept];
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);
