/*In this lesson we learn how a function can still funtion locally, but still return
an undefined value if it has no arguments.*/
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive () {
  sum = sum + 5;
}


// Only change code above this line
var returnedValue = addFive();
