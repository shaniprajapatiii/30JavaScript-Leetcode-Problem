/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {

   return arr.sort((a, b) => fn(a) - fn(b));
};

// arr = [5, 4, 1, 2, 3], fn = (x) => x
console.log(sortBy([5, 4, 1, 2, 3], x => x)); // [1,2,3,4,5]


// arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
console.log(sortBy([{ x: 1 }, { x: 0 }, { x: -1 }], obj => obj.x)); // [{x:-1},{x:0},{x:1}]


// arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
console.log(sortBy([[3, 4], [5, 2], [10, 1]], x => x[1])); // [[10,1],[5,2],[3,4]]