// Funcitons
// Methods = built-in functions
//Provide reusable code

// Function declaration syntax
function getUserNameFromEmail1(email) {
  return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail1("sid@sidsdomain.com"));

const getUserNameFromEmail2 = function (email) {
  return email.slice(0, email.indexOf("@"));
};

console.log(getUserNameFromEmail2("milo@milosdomain.com"));

const getUserNameFromEmail3 = (email) => {
  return email.slice(0, email.indexOf("@"));
};

console.log(getUserNameFromEmail3("sidney@sidneysdomain.com"));

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("sIDneY"));
