/*In this lesson we practice our knowledge of the equality operator and the strict
equality operator. We also learn about the Typeof operator and how to use it to
identify the type of a variable or value.*/
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
