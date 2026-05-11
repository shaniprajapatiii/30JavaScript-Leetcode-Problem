/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {

   const result = {};

   // add elements from arr1 to map
   for (const obj of arr1) {
      result[obj.id] = obj;
   }

   // merge elements from arr2 into map
   for (const obj of arr2) {
      if (result[obj.id]) {
         //  ID exists krti hai to, merge properties (arr2 overrides arr1)
         result[obj.id] = { ...result[obj.id], ...obj };
      }
      else {
         result[obj.id] = obj;
      }
   }

   return Object.values(result).sort((a, b) => a.id - b.id);
};


const arr1 = [
   { id: 1, name: "Alice" },
   { id: 2, name: "Bob" },
   { id: 3, name: "Charlie" }
];
const arr2 = [
   { id: 2, age: 30 },
   { id: 3, age: 25 },
   { id: 4, name: "David", age: 40 }
];
console.log(join(arr1, arr2));
