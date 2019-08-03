/*In this lesson we learn about the local scope of a function, that a variable
can not exist outside of its container.*/
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "Pudding!";
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
