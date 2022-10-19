// Web storage API

// Not part of the DOM - refers to the window API
// available to JS via the gloabal variable: window

// we do not have to type window. it's implied

const myArray = ["eat", "sleep", "code"];
const myObject = {
  name: "Sidney",
  hobbies: ["eat", "sleep", "code"],
  logName: function() {
    console.log(this.name)
  }
};

/*sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);*/
localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const storeLength = localStorage.length;
const myLocalStore = JSON.parse(localStorage.getItem("myLocalStore"));

console.log(storeLength)