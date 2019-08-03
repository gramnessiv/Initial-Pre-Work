/*In this lesson we learned about the importance of declaring a variable with var,
and that things can go wrong if a variable is not correctly declared. Also that
variables declared outside a function are visible to all functions within the code.*/
// Declare your variable here
var myGlobal = (10);

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = (5);
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
