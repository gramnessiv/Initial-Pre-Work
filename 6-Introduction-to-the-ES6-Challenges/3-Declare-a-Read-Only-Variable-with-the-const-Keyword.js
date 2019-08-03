/*In this lesson we learn about how to declare a variable with Const and how const
variables never change, and should be named with all caps and underscores for spaces.*/
function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
