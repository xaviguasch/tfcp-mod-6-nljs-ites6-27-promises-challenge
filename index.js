/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 *
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */

let myFirstPromise = new Promise((resolve, reject) => {
  error = false
  setTimeout(function () {
    if (!error) {
      resolve({ firstName: 'Xavi', age: 25 }) // Yay! Everything went well!
    } else {
      reject('This an error!')
    }
  }, 250)
})

myFirstPromise
  .then((userData) => {
    console.log(userData)
  })
  .catch((err) => {
    console.log(err)
  })
