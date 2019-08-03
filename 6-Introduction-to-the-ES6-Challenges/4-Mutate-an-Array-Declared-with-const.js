/*In this lesson we learn how to change an array's values even though it is declared as
a constant, by changing the individual elements of the array.*/
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  // change code above this line
}
editInPlace();
