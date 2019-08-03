/*In this lesson we learn about the Strict Equality Operator, and how unlike the
Equality Operator, you can not compare different data types to one another.*/
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(7);
