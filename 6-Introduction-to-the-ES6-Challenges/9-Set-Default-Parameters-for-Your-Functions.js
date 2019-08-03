/*In this lesson we learn how to set defualt parameters to functions incase a
value isn't given, the function has defualt information to display.*/
const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
