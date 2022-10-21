// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, and Async/Await

// 2nd parameter of Fetch is a object

// maybe from a form
const getDataFromForm = () => {
  const requestObject = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"],
  };
  return requestObject;
};

const buildRequestUrl = (requestData) => {
  return `http://api.icndb.com/jokes/random?firstName=
  ${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

// Procedural "workflow" fucntion
const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finished!");
};

processJokeRequest();

// Promises

// 3 states: Pending, fulfilled, rejected; Async / Await

/* const myUsers = {
  userList: [],
};

const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
};

const anotherFunc = async () => {
  const data = await myCoolFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
};

anotherFunc();
console.log(myUsers.userList); */

/* const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  }); */

/* const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes! resolved the promise!");
  } else {
    reject("No! rejected the promise.");
  }
});

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("myNextPromise resolved!");
  }, 3000);
});

myNextPromise.then((value) => {
  console.log(value);
});

myPromise.then((value) => {
  console.log(value);
}); */

/* myPromise // thenables chain
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => {
    console.log(err);
  }); */

// Callbacks

/* function firstFunction(parameters, callback) {
  // do stuff
  callback();
}

// AKA "callback hell"
/firstFunction(para, function () {
  // do stuff
  secondFunction(para, function () {
    // do stuff
    thirdFunction(para, function () {
      // so on
    });
  });
}); */
