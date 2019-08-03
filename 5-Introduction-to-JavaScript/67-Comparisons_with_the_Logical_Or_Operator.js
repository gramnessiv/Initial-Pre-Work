/*In this lesson we learn about the Logical Or operator and how it will compare
two sets of rules and if either is true it will return with a true value. Unlike
the logical And operator which needs both rules to be true.*/
function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val < 10) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(14);
