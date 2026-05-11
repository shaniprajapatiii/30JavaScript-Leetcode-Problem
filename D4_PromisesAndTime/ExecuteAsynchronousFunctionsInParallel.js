/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
   return new Promise((resolve, reject) => {
      let results = new Array(functions.length);
      let resolvedCount = 0;

      if (functions.length === 0) {
         resolve(results);
         return;
      }

      functions.forEach((fn, index) => {
         fn()
            .then((val) => {
               results[index] = val;
               resolvedCount++;

               if (resolvedCount === functions.length) {
                  resolve(results);
               }
            })
            .catch((err) => {
               // Reject immediately if any function fails
               reject(err);
            });
      });
   });
};


const promise = promiseAll([() => new Promise(res => res(42))])
promise.then(console.log); // [42]