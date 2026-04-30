/**
 * @return {Function}
 */
var createHelloWorld = function () {
    return function (...args) {
        return "Hello World";
    };
};

// create function
const f = createHelloWorld();

// call function and print result
console.log(f()); // Hello World