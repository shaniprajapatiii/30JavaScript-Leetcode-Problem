class EventEmitter {

   /**
    * @param {string} eventName
    * @param {Function} callback
    * @return {Object}
    */

   constructor() {
      this.events = new Map();
      // storing event names as a key ans callback arrays as values
   }

   subscribe(eventName, callback) {

      // event nahi h to empty array set kr diya
      if (!this.events.has(eventName)) {
         this.events.set(eventName, []);
      }

      // event ke sare listeners(functions) nikalo
      const listeners = this.events.get(eventName);
      // adding new callback in array
      listeners.push(callback);

      return {
         unsubscribe: () => {
            // finding callback in array and remove it
            const index = listeners.indexOf(callback);
            if (index !== -1) {
               listeners.splice(index, 1);
            }
         }
      };
   }

   /**
    * @param {string} eventName
    * @param {Array} args
    * @return {Array}
    */
   emit(eventName, args = []) {

      const listeners = this.events.get(eventName);
      // there is no subscriber
      if (!listeners) return [];

      return listeners.map(fn => fn(...args));
      // calling each callback
   }
}


const emitter = new EventEmitter();
// Subscribe to the onClick event with onClickCallback
function onClickCallback() { return 99 }
const sub = emitter.subscribe('onClick', onClickCallback);
emitter.emit('onClick'); // [99]
sub.unsubscribe(); // undefined
emitter.emit('onClick'); // []

/*
actions = ["EventEmitter", "subscribe", "emit", "emit"], 
values = [[], ["firstEvent", "function cb1(...args) { return args.join(','); }"], ["firstEvent", [1,2,3]], ["firstEvent", [3,4,6]]]

output = [null, {"unsubscribe": "function"}, ["1,2,3"], ["3,4,6"]]
*/

const emitter1 = new EventEmitter();
emitter1.subscribe('firstEvent', function cb1(...args) { return args.join(','); });
console.log(emitter1.emit('firstEvent', [1, 2, 3])); // ["1,2,3"]
console.log(emitter1.emit('firstEvent', [3, 4, 6])); // ["3,4,6"]