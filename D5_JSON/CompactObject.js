/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */

var compactObject = function (obj) {
   if (obj === null || typeof obj !== "object") {
      return obj;
   }

   if (Array.isArray(obj)) {
      return obj.filter(Boolean).map(compactObject);
   }

   const compacted = {};
   for (const key in obj) {
      let value = compactObject(obj[key]);
      if (Boolean(value)) {
         compacted[key] = value;
      }
   }

   return compacted;
};

object = {
   "a": 1,
   "b": null,
   "c": {
      "d": 3,
      "e": null
   }
};
console.log(compactObject(object));
