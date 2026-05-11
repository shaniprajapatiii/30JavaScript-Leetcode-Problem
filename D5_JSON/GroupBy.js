/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {

   const result = {};

   for (const item of this) {
      const key = fn(item);

      // if the key doesn't exist, intialize with empty array
      if (!(key in result)) {
         result[key] = [];
      }

      // push the current item into the array for that key
      result[key].push(item);
   }
   return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

console.log([1, 2, 3].groupBy(String)); // { '1': [ 1 ], '2': [ 2 ], '3': [ 3 ] }

let array = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9]
];
let fn2 = function (list) { 
  return String(list[0]); 
}

console.log([[1, 2, 3], [1, 3, 5], [1, 5, 9]].groupBy(fn2)); // { '1': [ [ 1, 2, 3 ], [ 1, 3, 5 ], [ 1, 5, 9 ] ] }
