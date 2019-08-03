/*In this lesson we learn about the Rest operator and how it can be used to store
multiple arguments for a function inside of an array. */
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
