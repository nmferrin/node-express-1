### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
    A couple options for handling async operations include using promises as well as
    aync/await


- What is a Promise?
  Promises are objects that 'promise' the eventual completion of an asynchronous operation. It is used to avoid callback hell and provide cleaner, more manageable code.


- What are the differences between an async function and a regular function?
  it always returns a promise while a regular function does not. Async functions can pause execution of a function at each 'await' expression and resume execution when the promise is resolved.

    
- What is the difference between Node.js and Express.js?
  Node is a runtime environment used for executing JavaScript server-side. Express is a framework for building web applications.


- What is the error-first callback pattern?
  The error-first callback pattern is a common pattern in Node.js. It is a function that takes a callback as an argument. The callback function is then called with two arguments: an error object and a result object.

- What is middleware?
  Middleware is a function that is called before a route is executed. It is used to perform tasks such as authentication and authorization.

- What does the `next` function do?
  The next function is used to call the next middleware function in the chain.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)


```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
await used inefficiently
usernames hardcoded
return order different than order of requests


