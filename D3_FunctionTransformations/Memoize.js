/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {

   const cache = new Map();

   return function (...args) {
      // Create a unique key for the arguments
      const key = JSON.stringify(args);

      // If the result is already in the cache, return it
      if (cache.has(key)) {
         return cache.get(key);
      }

      // Otherwise, call the function and store the result
      const result = fn(...args);
      cache.set(key, result);
      return result;
   }
}


let callCount = 0;
const memoizedFn = memoize(function (a, b) {
   callCount += 1;
   return a + b;
})
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5
console.log(callCount) // 1


/*
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]
Output: [4,4,1,3,2]
*/

