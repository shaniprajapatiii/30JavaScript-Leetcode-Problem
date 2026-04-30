/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {

   filterArray = [];
   for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
         filterArray.push(arr[i]);
      }
   }
   return filterArray;
};

// Example usage:
console.log(filter([0, 10, 20, 30], x => x > 10)); // [20, 30]
// function for first index
console.log(filter([1, 2, 3], (x, i) => i === 0)); // [1]