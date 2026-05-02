/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {

   return async function (...args) {
      // Create a promise that rejects after t milliseconds
      const timeoutPromise = new Promise((_, reject) => {
         setTimeout(() => {
            reject("Time Limit Exceeded");
         }, t);
      });

      // Race the actual function call against the timeout
      return Promise.race([fn(...args), timeoutPromise]);
   }
};
/*
Promise.race: This built-in method takes an array of promises and returns a new promise that resolves or rejects as soon as one of the promises in the array settles.
*/

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms


const limited2 = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited2(50).then(() => console.log("Success")) // "Success" at t=50ms