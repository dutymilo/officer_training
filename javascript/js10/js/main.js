// User Input

// alert("Hello World!");

// let myBoolean = confirm("Ok  === True\nCancel === False");
// console.log(myBoolean);

let name = prompt("Please enter your name.");
if (name) {
  console.log(name.length);
  console.log(name.trim().length);
  console.log(name.trim());
  console.log(name);
} else {
  console.log("You didn't enter your name.");
}
