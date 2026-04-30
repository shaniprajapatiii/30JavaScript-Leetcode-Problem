/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
   const returnArray = [];

   for (let i = 0; i < arr.length; i++) {
      returnArray[i] = fn(arr[i], i);
   }
   return returnArray;
};

console.log(map([1, 2, 3], x => x + 1)); // [2,3,4]
console.log(map([1, 2, 3], x => x )); // [1,2,3]