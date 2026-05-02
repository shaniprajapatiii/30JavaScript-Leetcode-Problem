/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {

   // Promise.all waits for both to resolve and returns an array of results
   const [val1, val2] = await Promise.all([promise1, promise2]);

   // Return the sum (async functions automatically wrap the return in a promise)
   return val1 + val2;
};

// example usage 1:
addTwoPromises(Promise.resolve(2), Promise.resolve(2))
   .then(console.log); // 4

// example usage 2:
addTwoPromises(Promise.resolve(2), Promise.resolve(3)).then(console.log); // 5