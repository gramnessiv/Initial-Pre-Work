/*In this lesson we learn about Else If statements and how they are linked together
with If statements and else statements.*/
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }

}

// Change this value to test
testElseIf(7);
