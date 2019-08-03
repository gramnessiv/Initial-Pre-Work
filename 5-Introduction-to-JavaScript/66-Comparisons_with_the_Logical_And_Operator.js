/*In this lesson we learned about the Logical And operator, and how to apply it
to an if statement.*/
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
      return "Yes";
    }
  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(25);
