// Higher Order Fucntions

// A higher orde function is a funciton that does at leas one
// of the following:
// ** Takes one or more functions as an argument (parameter)
// ** Returns a function as the result

import { posts } from "./posts.js"; // forEach()

posts.forEach((posts) => {
  console.log(posts);
});
console.clear();

const filteredPosts = posts.filter((post) => {
  return post.userId === 1;
});
console.log(filteredPosts);

const mappedPosts = filteredPosts.map((post) => {
  return post.id * 10;
});
console.log(mappedPosts);

const reducedPostsValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
});
console.log(reducedPostsValue);
